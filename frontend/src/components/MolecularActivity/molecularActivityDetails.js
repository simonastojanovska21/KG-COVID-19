import React, {useEffect, useState} from "react";
import MolecularActivityService from "../../services/MolecularActivityService";
import NotFound from "../NotFound/notFound";
import {Spinner} from "react-bootstrap";
import MolecularActivityItem from "./MolecularActivityItem";

const MolecularActivityDetails=(props)=>{
    const [molecularActivityItem, setMolecularActivityItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutMolecularActivity = async ()=>{
        try {
            await MolecularActivityService.getDetailsAboutMolecularActivity(props.molecularActivityName)
                .then((data)=>{
                    setMolecularActivityItem(data.data)
                })
            setLoading(true)
        }catch (e){
            //console.log(e.response.data.message)
            setErrorMessage(e.response.data.message);
            setNotFound(true);
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutMolecularActivity()
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/molecularActivity"} /> : ''}

            {loading ? <MolecularActivityItem molecularActivity={molecularActivityItem} /> :

                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )

}

export default MolecularActivityDetails;
import React, {useEffect, useState} from "react";
import NotFound from "../NotFound/notFound";
import {Spinner} from "react-bootstrap";
import ProteinService from "../../services/ProteinService";
import ProteinItem from "../Protein/proteinItem";

const ProteinDetails=(props)=>{

    const [proteinItem, setProteinItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutProtein = async () =>{
        try {
            await ProteinService.getDetailsAboutProtein(props.proteinName)
                .then((data)=>{
                    setProteinItem(data.data)
                })
            setLoading(true)
        }catch (e){
            setErrorMessage(e.response.data.message);
            setNotFound(true);
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutProtein();
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/protein"} /> : ''}

            {loading ? <ProteinItem protein={proteinItem} /> :

                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )
}

export default ProteinDetails;
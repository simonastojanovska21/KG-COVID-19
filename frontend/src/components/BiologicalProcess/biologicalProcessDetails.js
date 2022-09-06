import React, {useEffect, useState} from "react";
import BiologicalProcessService from "../../services/BiologicalProcessService";
import NotFound from "../NotFound/notFound";
import BiologicalProcessItem from "./biologicalProcessItem";
import {Spinner} from "react-bootstrap";

const BiologicalProcessDetails=(props)=>{
    const [biologicalProcessItem, setBiologicalProcessItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutBiologicalProcess  = async () =>{
        try {
            await BiologicalProcessService.getDetailsAboutBiologicalProcess(props.biologicalProcessName)
                .then((data)=>{
                    setBiologicalProcessItem(data.data)
                    //console.log(data.data)
                })
            setLoading(true)
        } catch (e){
            console.log(e.response.data.message)
            setErrorMessage(e.response.data.message);
            setNotFound(true);
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutBiologicalProcess()
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>

            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/biologicalProcess"} /> : ''}

            {loading ? <BiologicalProcessItem biologicalProcess={biologicalProcessItem} /> :
                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }

        </div>
    )
}

export default BiologicalProcessDetails;
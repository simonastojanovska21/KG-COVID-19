import React, {useEffect, useState} from "react";
import DiseaseService from "../../services/DiseaseService";
import NotFound from "../NotFound/notFound";
import {Spinner} from "react-bootstrap";
import DiseaseItem from "./diseaseItem";

const DiseaseDetails=(props)=>{

    const [diseaseItem, setDiseaseItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutDisease = async ()=>{
        try {
            await DiseaseService.getDetailsAboutDisease(props.diseaseName)
                .then((data)=>{
                    setDiseaseItem(data.data)
                })
            setLoading(true)
        }catch (e){
            setErrorMessage(e.response.data.message)
            setNotFound(true)
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutDisease()
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/disease"} /> : ''}

            {loading ? <DiseaseItem disease={diseaseItem} /> :

                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )
}

export default DiseaseDetails;
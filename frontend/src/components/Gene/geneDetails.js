import React, {useEffect, useState} from "react";
import GeneService from "../../services/GeneService";
import NotFound from "../NotFound/notFound";
import {Spinner} from "react-bootstrap";
import GeneItem from "./geneItem";

const GeneDetails=(props)=>{
    const [geneItem, setGeneItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutGene = async () =>{
        try {
            await GeneService.getDetailsAboutGene(props.geneName)
                .then((data)=>{
                    setGeneItem(data.data)
                })
            setLoading(true)
        }catch (e){
            setErrorMessage(e.response.data.message);
            setNotFound(true);
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutGene();
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/gene"} /> : ''}

            {loading ? <GeneItem gene={geneItem} /> :

                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )
}

export default GeneDetails;
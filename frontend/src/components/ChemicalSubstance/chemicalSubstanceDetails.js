import React, {useEffect, useState} from "react";
import ChemicalSubstanceService from "../../services/ChemicalSubstanceService";
import {Spinner} from "react-bootstrap";
import ChemicalSubstanceItem from "../ChemicalSubstance/chemicalSubstanceItem";
import NotFound from "../NotFound/notFound";

const ChemicalSubstanceDetails=(props)=>{

    const [chemicalSubstanceItem, setChemicalSubstanceItem] = useState(null);
    const [loading, setLoading] = useState(false);

    const [notFound, setNotFound] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const [visibility, setVisibility] = useState("visible");

    const getDetailsAboutChemicalSubstance = async () =>{
        try {
            await ChemicalSubstanceService.getDetailsAboutChemicalSubstance(props.chemicalSubstanceName)
                .then((data)=>{
                    setChemicalSubstanceItem(data.data)
                    console.log(data.data)
                })
            setLoading(true)
        }catch (e){
            console.log(e.response.data.message)
            setErrorMessage(e.response.data.message);
            setNotFound(true);
            setVisibility("none")
        }
    }

    useEffect(()=>{
        getDetailsAboutChemicalSubstance();
    },[])

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            {notFound ? <NotFound errorMessage={errorMessage} goBack={"/chemicalSubstances"} /> : ''}

            {loading ? <ChemicalSubstanceItem chemicalSubstance={chemicalSubstanceItem} onProteinSearch={props.onProteinSearch} /> :

                <div className={"d-flex justify-content-center"}>
                    <Spinner animation={"border"} role="status"  style={{ width: "4rem", height: "4rem", display:visibility}} >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    )
}
export default ChemicalSubstanceDetails;
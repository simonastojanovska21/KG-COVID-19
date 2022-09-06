import React from "react";
import {Link} from "react-router-dom";

const ChemicalSubstanceItem=(props)=>{

    return(
        <div className={"container"} about={props.chemicalSubstance.chemicalSubstanceUrl}>
            <div className={"row text-center pb-3"}>
                <h1 className={"title"} property={"rdfs:label"}>
                    Details about chemical substance: {props.chemicalSubstance.chemicalSubstanceName}
                </h1>
            </div>

            <div className={"card pb-5"}>
                <div className={"row"}>
                    <div className={"col-4 d-flex justify-content-center"}>
                        <img src={`https://www.ebi.ac.uk/chebi/displayImage.do?defaultImage=true&imageIndex=0&chebiId=${props.chemicalSubstance.chebiId}`}
                             className={"img-fluid m-4"} alt={"chemical substance"}/>
                    </div>

                    <div className={"col-8 pt-5"}>
                        <div className={"row"}>
                            <div className={"col-3 text-end"}>
                                <h5>Name: </h5>
                            </div>
                            <div className={"col-9"}>
                                <h5>{props.chemicalSubstance.chemicalSubstanceName}</h5>
                            </div>
                        </div>

                        <div className={"row pt-2"}>
                            <div className={"col-3 text-end"}>
                                <h5>Definition: </h5>
                            </div>
                            <div className={"col-9"}>
                                <span>{props.chemicalSubstance.definition}</span>
                            </div>
                        </div>
                        <div className={"row pt-2"}>
                            <div className={"col-3 text-end"}>
                                <h5>Chemical formula: </h5>
                            </div>
                            <div className={"col-9"}>
                                <h5>{props.chemicalSubstance.chemicalFormula}</h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6 p-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Synonyms</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.chemicalSubstance.synonyms.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>

                    <div className={"col-6 p-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Interacts with proteins</th>
                            </tr>
                            </thead>
                            <tbody>
                            {[...new Set(props.chemicalSubstance.interactsWithProteins)].map((item)=>{
                                return(
                                    <tr>
                                        <td>
                                            <Link onClick={()=>props.onProteinSearch(item)}
                                                  to={`/protein/${item}`} >
                                                {item}
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={"row m-3 text-center"}>
                    <h3>Similar chemical substances</h3>
                    {Object.keys(props.chemicalSubstance.similarChemicalSubstances).map((term)=>{
                        return(
                            <div className={"col"}>
                                <img src={`https://www.ebi.ac.uk/chebi/displayImage.do?defaultImage=true&imageIndex=0&chebiId=${term}`}
                                     className={"img-fluid"} alt={"similar chemical substances"}/>
                                <span className={"text-center fw-bolder"}>{props.chemicalSubstance.similarChemicalSubstances[term]}</span>
                            </div>
                        )
                    })}
                </div>

                <div className={"row m-3 text-center"}>
                    <h3 className={"mt-3"}>Compounds that contain chemical substance</h3>
                    {Object.keys(props.chemicalSubstance.compoundWhichContainTheChemicalSubstances).map((term)=>{
                        return(
                            <div className={"col"}>
                                <img src={`https://www.ebi.ac.uk/chebi/displayImage.do?defaultImage=true&imageIndex=0&chebiId=${term}`}
                                     className={"img-fluid"} alt={"compound contains chemical substance"}/>
                                <span className={"text-center fw-bolder"}>
                                    {props.chemicalSubstance.compoundWhichContainTheChemicalSubstances[term]}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
export default ChemicalSubstanceItem;
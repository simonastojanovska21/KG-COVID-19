import React from "react";

const MolecularActivityItem=(props)=>{
    return(
        <div className={"container"} about={props.molecularActivity.molecularActivityUrl}>
            <div className={"row text-center pb-3"}>
                <h1 className={"title"} property={"rdfs:label"}>
                    Details about molecular activity: {props.molecularActivity.name}
                </h1>
            </div>

            <div className={"card pb-5"}>
                <div className={"row"}>
                    <div className={"col-7 d-flex justify-content-center"}>
                        <img src={`https://www.ebi.ac.uk/QuickGO/services/ontology/go/terms/%7Bids%7D/chart?ids=${props.molecularActivity.goId}`}
                             className={"img-fluid m-4"} alt={"chemical substance compound"}/>
                    </div>

                    <div className={"col-5 pt-5"}>
                        <div className={"row"}>
                            <div className={"col-3 text-end"}>
                                <h5>Name: </h5>
                            </div>
                            <div className={"col-9"}>
                                <h5>{props.molecularActivity.name}</h5>
                            </div>
                        </div>

                        <div className={"row pt-2"}>
                            <div className={"col-3 text-end"}>
                                <h5>Definition: </h5>
                            </div>
                            <div className={"col-9"}>
                                <span>{props.molecularActivity.description}</span>
                            </div>
                        </div>

                        <div className={"row pt-2"}>
                            <div className={"col-12 p-5"}>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className={"h3"}>Synonyms</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {props.molecularActivity.synonyms.map((item)=>{
                                        return(
                                            <tr>
                                                <td>{item}</td>
                                            </tr>
                                        )
                                    })}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6 p-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Capable of</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.molecularActivity.capable_of.map((item)=>{
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
                                <th className={"h3"}>Regulates</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.molecularActivity.regulates.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6 ps-5 pe-5 pb-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Negatively regulates</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.molecularActivity.negatively_regulates.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>

                    <div className={"col-6 ps-5 pe-5 pb-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Positively regulates</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.molecularActivity.positively_regulates.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MolecularActivityItem;
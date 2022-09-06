import React from "react";

const DiseaseItem = (props)=>{
    return(
        <div className={"container"} about={props.disease.diseaseUrl}>
            <div className={"row text-center pb-3"}>
                <h1 className={"title"} property={"rdfs:label"}>
                    Details about disease: {props.disease.name}
                </h1>
            </div>

            <div className={"card pb-5"}>
                <div className={"row pt-5"}>
                    <div className={"col-2 text-end"}>
                        <h5>Name: </h5>
                    </div>
                    <div className={"col-10"}>
                        <h5>{props.disease.name}</h5>
                    </div>
                </div>

                <div className={"row pt-2"}>
                    <div className={"col-2 text-end"}>
                        <h5>Definition: </h5>
                    </div>
                    <div className={"col-10"}>
                        <span>{props.disease.description}</span>
                    </div>
                </div>

                <div className={"row pt-2"}>
                    <div className={"col-6 p-5"}>
                        <table className="table">
                            <thead>
                            <tr>
                                <th className={"h3"}>Synonyms</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.disease.synonyms.map((item)=>{
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

export default DiseaseItem;
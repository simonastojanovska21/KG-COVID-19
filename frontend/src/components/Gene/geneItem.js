import React from "react";

const GeneItem=(props)=>{
    return(
        <div className={"container"} about={props.gene.geneUrl}>
            <div className={"row text-center pb-3"}>
                <h1 className={"title"} property={"rdfs:label"}>
                    Details about gene: {props.gene.name}
                </h1>
            </div>

            <div className={"card pb-5"}>
                <div className={"row pt-5"}>
                    <div className={"col-3 text-end"}>
                        <h5>Name: </h5>
                    </div>
                    <div className={"col-9"}>
                        <h5>{props.gene.name}</h5>
                    </div>
                </div>

                <div className={"row pt-2"}>
                    <div className={"col-3 text-end"}>
                        <h5>Definition: </h5>
                    </div>
                    <div className={"col-9"}>
                        <span>{props.gene.description}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneItem;
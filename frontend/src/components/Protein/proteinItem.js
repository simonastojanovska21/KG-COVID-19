import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleQuestion} from "@fortawesome/free-solid-svg-icons";

const ProteinItem=(props)=>{
    return(
        <div className={"container"} about={props.protein.proteinUrl}>
            <div className={"row text-center pb-3"}>
                <h1 className={"title"} property={"rdfs:label"}>
                    Details about protein: {props.protein.proteinName}
                </h1>
            </div>

            <div className={"card pb-5"}>

                <div className={"row ps-5 pe-5 pt-5"}>
                    <div className={"col-2"}>
                        <h5>Name: </h5>
                    </div>
                    <div className={"col-10"}>
                        <h5>{props.protein.proteinName}</h5>
                    </div>
                </div>

                <div className={"row ps-5 pe-5 pt-2"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-functions">	General function(s) of a protein</Tooltip>}>
                        <h5 className={"col-3"}>Functions: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.functions.map((item)=>{
                            return(
                                <li className="list-group-item">{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={"row ps-5 pe-5 pt-3"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-cat-act">Reaction(s) catalyzed by an enzyme</Tooltip>}>
                        <h5 className={"col-3"}>Catalytic activity: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.catalyticActivity.map((item)=>{
                            return(
                                <li className="list-group-item">{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={"row ps-5 pe-5 pt-3"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-cofactors">Non-protein substance required for enzyme activity</Tooltip>}>
                        <h5 className={"col-3"}>Cofactors: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.cofactors.map((item)=>{
                            return(
                                <li className="list-group-item">{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={"row ps-5 pe-5 pt-3"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-subunits">Interaction(s) with other proteins or protein complexes</Tooltip>}>
                        <h5 className={"col-3"}>Subunits: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.subunit.map((item)=>{
                            return(
                                <li className="list-group-item">{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={"row ps-5 pe-5 pt-3"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-sub-loc">Description of the subcellular location of the mature protein</Tooltip>}>
                        <h5 className={"col-3"}>Subcellular location: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.subCellularLocation.map((item)=>{
                            return(
                                <li className="list-group-item">{item}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={"row ps-5 pe-5 pt-2"}>
                    <OverlayTrigger
                        placement="right"
                        delay={{ hide: 400 }}
                        overlay={<Tooltip id="button-tooltip-diseases">Disease(s) associated with genetic variations in a given protein.</Tooltip>}>
                        <h5 className={"col-3"}>Diseases: <FontAwesomeIcon icon={faCircleQuestion} className={"ms-2"}/></h5>
                    </OverlayTrigger>
                    <ul className="list-group list-group-flush">
                        {props.protein.diseases.map((item)=>{
                            return(
                                <li className="list-group-item">
                                    <h6>{item.diseaseId.value}</h6>
                                    <div className={"ps-5"}>
                                        {item.description.value}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProteinItem;
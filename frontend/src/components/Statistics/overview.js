import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAtom, faCircle, faCircleNodes} from "@fortawesome/free-solid-svg-icons";

const Overview=(props)=>{
    return(

        <div className={"p-5 row"}>
            <div className={"col-4 "}>
                <div className={"row"}>
                    <div className={"col-4 text-center"}>
                        <FontAwesomeIcon icon={faCircle} size="5x"/>
                    </div>
                    <div className={"col-6 text-center"}>
                        <h2>{props.statistics.nodes.toLocaleString('en-US')}</h2>
                        <h2 className={"text-muted"}>Nodes</h2>
                    </div>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"row"}>
                    <div className={"col-4 text-center"}>
                        <FontAwesomeIcon icon={faAtom} size="5x"/>
                    </div>
                    <div className={"col-6 text-center"}>
                        <h2>{props.statistics.categories.toLocaleString('en-US')}</h2>
                        <h2 className={"text-muted"}>Categories</h2>
                    </div>
                </div>
            </div>
            <div className={"col-4"}>
                <div className={"row"}>
                    <div className={"col-4 text-center"}>
                        <FontAwesomeIcon icon={faCircleNodes} size="5x"/>
                    </div>
                    <div className={"col-6 text-center"}>
                        <h2>{props.statistics.edges.toLocaleString('en-US')}</h2>
                        <h2 className={"text-muted"}>Edges</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;
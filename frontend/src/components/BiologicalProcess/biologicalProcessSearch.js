import React from "react";
import Search from "../Search/search";

const BiologicalProcessSearch=(props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Biological processes</h1>
                </div>

                <Search onSearchTerm={props.onBiologicalProcessSearch} redirectLocation={"/biologicalProcess/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.biologicalProcessAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BiologicalProcessSearch;
import React from "react";
import Search from "../Search/search";

const GeneSearch=(props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Gene</h1>
                </div>

                <Search onSearchTerm={props.onGeneSearch} redirectLocation={"/gene/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.geneAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default GeneSearch;
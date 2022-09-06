import React from "react";
import Search from "../Search/search";

const ProteinSearch=(props)=>{

    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Proteins</h1>
                </div>

                <Search onSearchTerm={props.onProteinSearch} redirectLocation={"/protein/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.proteinAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProteinSearch;
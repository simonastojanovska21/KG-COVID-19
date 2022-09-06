import React from "react";
import Search from "../Search/search";

const MolecularActivitySearch=(props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Molecular activity</h1>
                </div>

                <Search onSearchTerm={props.onMolecularActivitySearch} redirectLocation={"/molecularActivity/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.molecularActivityAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MolecularActivitySearch;
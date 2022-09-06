import React from "react";
import Search from "../Search/search";

const ChemicalSubstanceSearch=(props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Chemical substances</h1>
                </div>

                <Search onSearchTerm={props.onChemicalSubstanceSearch} redirectLocation={"/chemicalSubstances/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.chemicalSubstanceAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ChemicalSubstanceSearch;
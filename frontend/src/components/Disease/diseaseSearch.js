import React from "react";
import Search from "../Search/search";

const DiseaseSearch=(props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container "}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Diseases</h1>
                </div>

                <Search onSearchTerm={props.onDiseaseSearch} redirectLocation={"/disease/"} />

                <div className={"row pe-5 ps-5 pb-5 introductionContent"}>
                    <span className={"indentText"}>
                        {props.diseaseAbstract}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DiseaseSearch;
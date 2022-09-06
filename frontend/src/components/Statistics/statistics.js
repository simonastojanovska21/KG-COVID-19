import React from "react";
import Overview from "./overview";
import CategoriesChart from "./categoriesChart";


const Statistics = (props)=>{
console.log(props.categories)

    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container"}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Statistics about the COVID-19 biomedical database</h1>
                </div>
                <Overview statistics={props.statistics}/>
                <div className={"row text-center pt-5"}>
                    <h1 className={"title"}>Nodes categories available for searching</h1>
                </div>
                <div className={"d-flex justify-content-center"}>
                    <CategoriesChart categories={props.categories}/>
                </div>

            </div>

        </div>
    )
}

export default Statistics;
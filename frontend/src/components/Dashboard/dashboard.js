import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookOpen, faDna, faVirusCovid,faAtom, faShareNodes, faRepeat, faChartLine, faVialVirus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Dashboard = (props)=>{
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container"}>
                <div className={"row text-center mb-5"}>
                    <h1 className={"title"}>Explore the biomedical and molecular data available</h1>
                </div>

                <div className={"row"}>
                    <div className={"col-3"}>
                        <Link className={" dashboardItemsText"} to={"/publications"} >
                            <div className={"shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faBookOpen} size="8x" color={"#003049"}/>
                                <h1 className={"pt-2"}>Publications</h1>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3 dashboardItems"}>
                        <Link className={"dashboardItemsText"} to={"/protein"} >
                            <div className={"shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faAtom} size="8x" color={"#003049"}/>
                                <h1 className={"pt-2"}>Proteins</h1>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3"}>
                        <Link className={"dashboardItemsText "} to={"/gene"} >
                            <div className={"shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faDna} size="8x" color={"#003049"}/>
                                <h1 className={"pt-2 "}>Genes</h1>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3"}>
                        <Link className={"dashboardItemsText"} to={"/disease"} >
                            <div className={"shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faVirusCovid} size="8x" color={"#003049"}/>
                                <h1 className={"pt-2"}>Disease</h1>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className={"row"}>

                    <div className={"col-3"}>
                        <Link className={" dashboardItemsText"} to={"/chemicalSubstances"} >
                            <div className={"dashboardItems shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faVialVirus} size="8x" color={"#003049"}/>
                                <h2 className={"pt-2"}>Chemical substances</h2>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3 dashboardItems"}>
                        <Link className={"dashboardItemsText"} to={"/molecularActivity"} >
                            <div className={"dashboardItems shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faShareNodes} size="8x" color={"#003049"}/>
                                <h2 className={"pt-2"}>Molecular activity</h2>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3"}>
                        <Link className={"dashboardItemsText "} to={"/biologicalProcess"} >
                            <div className={"dashboardItems shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faRepeat} size="8x" color={"#003049"}/>
                                <h2 className={"pt-2 "}>Biological processes</h2>
                            </div>
                        </Link>
                    </div>

                    <div className={"col-3"}>
                        <Link className={"dashboardItemsText"} to={"/statistics"} >
                            <div className={"dashboardItems shadow-lg p-5 bg-light mb-5 border  rounded  text-center"}>
                                <FontAwesomeIcon icon={faChartLine} size="8x" color={"#003049"}/>
                                <h1 className={"pt-2"}>Statistics </h1>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dashboard;
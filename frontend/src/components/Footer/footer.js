import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faEnvelope, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons";

const Footer=(props)=>{
    return(
        <footer className={"text-white redBackground"}>
            <div className={"container"}>
                <div className={"row pt-5"}>
                    <hr/>
                    <div className={"col-4"}>
                        <h5>About us</h5>
                        <hr className={"bg-white mb-2 mt-0 d-inline-block mx-auto w-25"}/>
                            <p className={"pe-3"}>
                                COVID-19 is a web site where you can find biomedical and molecular data to aid the
                                massive research effort to address the COVID-19 pandemic. It uses KG-COVID-19 knowledge
                                graph as database for the resources.
                            </p>
                        <small className={"d-block mb-3"}>© COVID-19</small>
                    </div>

                    <div className={"col-4"}>
                        <h5>Frequently visited pages</h5>
                        <hr className={"bg-white mb-2 mt-0 d-inline-block mx-auto w-25"}/>
                        <ul className={"list-unstyled"}>
                            <li><a className={"text-decoration-none text-white"} href={"/publications"}>Publications</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/protein"}>Proteins</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/gene"}>Genes</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/disease"}>Disease</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/chemicalSubstances"}>Chemical substances</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/molecularActivity"}>Molecular activity</a></li>
                            <li><a className={"text-decoration-none text-white"} href={"/biologicalProcess"}>Biological processes</a></li>
                        </ul>
                    </div>


                    <div className={"col-4"}>
                            <h5>Contact</h5>
                            <hr className={"bg-white mb-2 mt-0 d-inline-block mx-auto w-25"}/>
                                <ul className={"list-unstyled"}>
                                    <li><FontAwesomeIcon icon={faHome} className={"me-2"}/> COVID-19</li>
                                    <li><FontAwesomeIcon icon={faEnvelope} className={"me-2"}/>email@example.com</li>
                                    <li><FontAwesomeIcon icon={faPhone} className={"me-2"}/> + 389 70 123 456</li>
                                    <li><FontAwesomeIcon icon={faPrint} className={"me-2"}/> + 389 02 123 456</li>
                                </ul>
                    </div>


                </div>
            </div>
        </footer>

)
}

export default Footer;
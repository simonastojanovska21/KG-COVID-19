import React from "react";
import coverImage from "../../images/cover.jpg"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Home=(props)=>{
    return(
        <div style={{position: 'relative'}}>
            <div className="card bg-dark text-white border-0">
                <img src={coverImage} className="d-block w-100 card-img" alt="COVID-19 cover"/>

                <div className="card-img-overlay w-50 text-center" style={{top: '35%'}}>
                    <h1 className={"fontSize blueText mb-4"}>COVID-19 biomedical information</h1>
                    <Link className={"mt-2 btn btn-lg text-white fontSize"} to={"/dashboard"} style={{backgroundColor :'#d62828'}}>
                        Continue <FontAwesomeIcon icon={faArrowRight} className={"ps-2"}/>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Home;
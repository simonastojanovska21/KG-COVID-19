import React from "react";
import {Link} from "react-router-dom";
import errorImage from "../../images/error.png"

const NotFound=(props)=>{

    return(
        <div className={"brightBackground pt-5 pb-5"}>
            <div className="container">
                <div className={"text-center"}>
                    <img src={errorImage} className={"img-fluid"} alt={"404 error"} style={{maxHeight: '300px'}}/>
                </div>
                <div className={"row text-center pt-3"}>
                    <p className={"introductionContent blueText fw-bold"}>Sorry, {props.errorMessage}<br/>
                        Please go back to the previous page to continue browsing.</p>
                </div>
                <div className={"row text-center pt-3"}>
                    <Link className="btn w-50 mx-auto text-white fw-bolder"
                          style={{backgroundColor: '#003049'}}
                          to={props.goBack}>
                        Go back!
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NotFound;
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Search=(props)=>{

    const [formData, updateFormData] = React.useState({
        name:""
    })
    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    return(
        <div className={"row p-5 d-flex justify-content-center"}>
            <div className="w-75 input-group mb-3">
                <input type="text" className="form-control form-control-lg shadow-lg"
                       placeholder="Search..." name={"name"}
                       onChange={handleChange}/>
                <Link className="btn btn-lg btn-danger" onClick={()=>props.onSearchTerm(formData.name)}
                      to={`${props.redirectLocation+formData.name}`} >
                    <FontAwesomeIcon icon={faSearch}/>
                </Link>
            </div>
        </div>
    )
}

export default Search;
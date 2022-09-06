import React from "react";
import SendSuggestion from "./sendSuggestion";
import PublicationsFromCategory from "./publicationsFromCategory";

const Publications=(props)=>{
    //console.log(props.publications)
    return(
        <div className={"brightBackground pt-5"}>
            <div className={"container"}>
                <div className={"row text-center"}>
                    <h1 className={"title"}>Publications used for creating the knowledge graph</h1>
                </div>
                <div className={"row pt-2"}>
                    <span className={"text-end text-muted"}>Have any relevant publications in mind?</span>
                    <SendSuggestion onAddPublicationSuggestion={props.onAddPublicationSuggestion} />
                </div>

                <div className={"row pe-5 ps-5 pt-5 introductionContent"}>
                    <span className={"indentText"}>
                        In order to create this biomedical knowledge database, various publications were used. Relevant
                        information were extracted from them, followed by the process of their transformation into usable
                        data. Finally, this application was made, so that you, as a end user, can find all information
                        you need in one place.
                    </span>
                    <br/>
                    <h4 className={"pt-2 indentText fw-bold"}>
                        Below, for each category of data, the TOP 15 publications are listed.
                    </h4>
                </div>
                <div>
                    <PublicationsFromCategory publications={props.publications}/>
                </div>
            </div>
        </div>
    )
}

export default Publications;
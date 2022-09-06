import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const PublicationsFromCategory = (props)=>{
    return(
        <div className={"p-5"}>
            <Accordion flush>
                {props.publications.map((term)=>{
                    let category = term[0].substring(3)
                    let publications = term[1]
                    console.log(term)
                    return(
                        <Accordion.Item eventKey={category}>
                            <Accordion.Header>{category}</Accordion.Header>
                            <Accordion.Body about={"https://w3id.org/biolink/vocab/Publication"}>
                                {publications.map((each=>{
                                    return(
                                        <span about={each.publicationUrl} property={"rdfs:label"}>
                                            {each.publicationLabel}
                                            <br/><br/>
                                        </span>
                                    )
                                }))}
                            </Accordion.Body>
                        </Accordion.Item>
                    )
                })}
            </Accordion>
         </div>
    )
}

export default PublicationsFromCategory;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const SendSuggestion=(props)=>{

    const [formData, updateFormData] = React.useState({
        name:"",
        authorsNames:"",
        url:"",
        description:""
    })

    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            [e.target.name] : e.target.value.trim()
        })
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        const name=formData.name;
        const authorsNames=formData.authorsNames;
        const url = formData.url;
        const description = formData.description;

        props.onAddPublicationSuggestion(name,authorsNames,url,description);
        handleClose()
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant={"link"}  size={"sm"} onClick={handleShow} className={"text-white fontSize"} style={{backgroundColor :'#003049', textDecoration:'none'}}>
                Send us a suggestion
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Publication details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onFormSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" id={"name"} name={"name"}
                                          onChange={handleChange}
                                placeholder="Enter the name of the publication" autoFocus/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Authors names</Form.Label>
                            <Form.Control type="text" id={"authorsNames"} name={"authorsNames"}
                                          onChange={handleChange}
                                          placeholder="Enter the names of the authors"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" id={"url"} name={"url"}
                                          onChange={handleChange}
                                          placeholder="Enter the url of the publication"/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" id={"description"} name={"description"}
                                          onChange={handleChange}
                                          rows={3} />
                        </Form.Group>
                        <Button variant="danger" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default SendSuggestion;
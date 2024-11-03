import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

const Edit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className='btn'><i className="fa-solid fa-edit pe-4 fs-4" style={{ color: 'green' }}></i></button>
            <Modal size='md' centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="border rounded p-3">
                        <FloatingLabel controlId="floatingInputTitle" label="Title" className="mb-3" >
                            <Form.Control type="text" placeholder="Title" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInputDescription" label="Description" className="mb-3" >
                            <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Description" />
                        </FloatingLabel>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit
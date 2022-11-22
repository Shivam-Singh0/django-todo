
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux'
import { AddTask } from '../actions';
import { TASK_ADD_RESET } from '../constants'

function FormModal() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const taskAdd = useSelector((state) => state.taskAdd)
    const { success } = taskAdd

    useEffect(() => {
        if (success) {
            setShow(false)
            dispatch({ type: TASK_ADD_RESET })

        }
    }, [success, dispatch])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(AddTask({ 'title': title, 'description': desc }))

    }

    return (
        <>
            <Button variant="secondary" size={'lg'} className='mb-2' onClick={handleShow}>
                <i class="fa-solid fa-pencil"></i> Add Task
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Title...."
                                autoFocus
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setDesc(e.target.value)} />
                        </Form.Group>

                        <Button variant="secondary" type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FormModal
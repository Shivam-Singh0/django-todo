import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { CompTask, DelTask, getTasks } from '../actions';
import FormModal from '../components/formModal';
import { Button, Card, Table } from 'react-bootstrap'
import { TASK_COMP_RESET, TASK_DEL_RESET } from '../constants';

import Loader from '../Loader'

function Homescreen() {

    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const taskList = useSelector((state) => state.taskList)
    const { loading, error, tasks } = taskList
    const taskAdd = useSelector((state) => state.taskAdd)
    const { success } = taskAdd
    const taskComp = useSelector((state) => state.taskComp)
    const { completed, loading: compLoading } = taskComp
    const taskDel = useSelector((state) => state.taskDel)
    const { deleted, loading: delLoading } = taskDel


    let filter = location.search.split('=')[1]



    useEffect(() => {
        dispatch(getTasks(filter))

        if (completed) {
            dispatch({ type: TASK_COMP_RESET })
        }

        if (completed) {
            dispatch({ type: TASK_DEL_RESET })
        }


    }, [dispatch, success, completed, deleted, filter])

    const compHandler = (id) => {
        dispatch(CompTask(id))
    }

    const delHandler = (id) => {
        dispatch(DelTask(id))
    }

    const compTaskHandler = () => {
        navigate('/?filter=completed')
    }



    return (
        <div>
            <h1 className='text-center mb-4'>Todo App</h1>


            {loading ? <h3>Loading.....</h3> : error ? (<h3>{error}</h3>) : (
                <div>
                    <div className='d-flex justify-content-end'>
                        <FormModal />
                    </div >
                    <Card>
                        {filter && filter === 'completed' ? (<h1 className='ms-3'>Completed Tasks....</h1>) :
                            filter === 'pending' ? (<h1 className='ms-3'>Pending Tasks....</h1>) :
                                (<h1 className='ms-3'>Tasks List....</h1>)
                        }
                        <Card.Title><button className='btn btn-outline-success' id="btn-comp" onClick={compTaskHandler} >Completed Tasks</button>
                            <Link className='btn btn-outline-danger' id="btn-del" to={'/?filter=pending'}>Pending Tasks</Link> {filter && <Link className='btn btn-outline-primary' id='back' to={'/'}><i class="fa-solid fa-backward"></i></Link>}
                        </Card.Title>

                        <Card.Body>

                            <Table responsive className=''  >
                                <thead>
                                    <tr >
                                        <th>ID</th>
                                        <th>Title</th>
                                        <th >Description</th>
                                        <th className='d-flex justify-content-end'>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {tasks.map((task) => (
                                        <tr key={task.id}>
                                            <td>{task.id}</td>
                                            <td>{task.title}</td>
                                            <td className='text-wrap'>{task.description}</td>
                                            <td className='d-flex justify-content-end'>{task.completed ? (<p className='ms-1 mt-2'>Completed</p>) : <button className='btn btn-outline-primary btn-sm mt-2' onClick={() => compHandler(task.id)}>{compLoading ? <Loader /> : <>Mark as Completed</>}</button>}</td>
                                            <td><Button variant='light' onClick={() => delHandler(task.id)} disabled={delLoading}><i className='fas fa-trash'></i></Button></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>

            )}


        </div>
    )
}

export default Homescreen
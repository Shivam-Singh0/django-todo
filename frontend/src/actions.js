import {
    TASK_ADD_REQUEST,
    TASK_ADD_SUCCESS,
    TASK_ADD_FAIL,

    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    TASK_COMP_REQUEST,
    TASK_COMP_SUCCESS,
    TASK_COMP_FAIL,

    TASK_DEL_REQUEST,
    TASK_DEL_SUCCESS,
    TASK_DEL_FAIL,

} from '../src/constants'

import axios from 'axios'

export const AddTask = (task) => async (dispatch) => {
    try {
        dispatch({ type: TASK_ADD_REQUEST })

        const { data } = await axios.post('/api/create/', task)

        dispatch({
            type: TASK_ADD_SUCCESS,
        })
    } catch (error) {
        dispatch({
            type: TASK_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const getTasks = (filter) => async (dispatch) => {
    try {
        dispatch({ type: TASK_LIST_REQUEST })

        const { data } = await axios.get(`/api/tasks/?filter=${ filter }`)

        dispatch({
            type: TASK_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TASK_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const CompTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_COMP_REQUEST })

        await axios.put(`/api/completed/${ id }/`)

        dispatch({
            type: TASK_COMP_SUCCESS,

        })
    } catch (error) {

        dispatch({
            type: TASK_COMP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

export const DelTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_DEL_REQUEST })

        await axios.delete(`/api/del/${ id }/`)

        dispatch({
            type: TASK_DEL_SUCCESS,

        })
    } catch (error) {

        dispatch({
            type: TASK_DEL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }

}

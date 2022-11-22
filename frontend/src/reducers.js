import {
    TASK_ADD_REQUEST,
    TASK_ADD_SUCCESS,
    TASK_ADD_FAIL,
    TASK_ADD_RESET,

    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    TASK_COMP_REQUEST,
    TASK_COMP_SUCCESS,
    TASK_COMP_FAIL,
    TASK_COMP_RESET,

    TASK_DEL_REQUEST,
    TASK_DEL_SUCCESS,
    TASK_DEL_FAIL,
    TASK_DEL_RESET,
} from '../src/constants'


export const taskAddReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_ADD_REQUEST:
            return { ...state, loding: true }

        case TASK_ADD_SUCCESS:
            return { loding: false, success: true }


        case TASK_ADD_FAIL:
            return { loding: false, error: action.payload }


        case TASK_ADD_RESET:
            return {}



        default:
            return state;
    }
}

export const taskListReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case TASK_LIST_REQUEST:
            return { ...state, loding: true }

        case TASK_LIST_SUCCESS:
            return { loding: false, tasks: action.payload }


        case TASK_LIST_FAIL:
            return { loding: false, error: action.payload }



        default:
            return state;
    }
}

export const taskCompReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_COMP_REQUEST:
            return { ...state, loding: true }

        case TASK_COMP_SUCCESS:
            return { loding: false, completed: true }


        case TASK_COMP_FAIL:
            return { loding: false, error: action.payload }


        case TASK_COMP_RESET:
            return {}



        default:
            return state;
    }
}

export const taskDelReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_DEL_REQUEST:
            return { ...state, loding: true }

        case TASK_DEL_SUCCESS:
            return { loding: false, deleted: true }


        case TASK_DEL_FAIL:
            return { loding: false, error: action.payload }


        case TASK_DEL_RESET:
            return {}



        default:
            return state;
    }
}
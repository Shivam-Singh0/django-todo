import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { taskAddReducer, taskListReducer, taskCompReducer, taskDelReducer } from './reducers'

const reducer = combineReducers({
    taskAdd: taskAddReducer,
    taskList: taskListReducer,
    taskComp: taskCompReducer,
    taskDel: taskDelReducer,
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
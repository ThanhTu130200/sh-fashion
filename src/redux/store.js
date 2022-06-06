import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import sagas from "./sagas"

import rootReducer from "./reducer"

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default store

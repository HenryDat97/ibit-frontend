import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import reducers from './redux/reducers/index'
import mySaga from './redux/sagas/mySaga'


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {post: reducers},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(mySaga)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />,
        </Provider>
    </React.StrictMode>
)

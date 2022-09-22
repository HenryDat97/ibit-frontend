import { combineReducers } from 'redux'
import postsReducers from './postsReducers'
import modalReducers from './modal'

export default combineReducers({
    postsReducers,
    modalReducers,
})

import { combineReducers } from 'redux'
import postsReducers from './posts'
import modalReducers from './modal'
import userReducers from './user'

export default combineReducers({
    postsReducers,
    modalReducers,
    userReducers
})

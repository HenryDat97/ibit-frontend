import { INIT_STATE } from '../../constant'
import {
    CREATEPOSTSUCCESS,
    DELETEPOSTSUCCESS,
    GETPOSTSFAILURE,
    GETPOSTSREQUEST,
    GETPOSTSUCCESS,
    UPDATEPOSTSUCCESS,
} from '../../types/types'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case GETPOSTSREQUEST:
            return {
                isLoading: true,
            }

        case GETPOSTSUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case GETPOSTSFAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case CREATEPOSTSUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case UPDATEPOSTSUCCESS:
            return {
                ...state,
                data: state.data.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            }
        case DELETEPOSTSUCCESS:
            return {
                ...state,
                data: state.data.filter(
                    (post) => post._id !== action.payload._id
                ),
            }
        default:
            return state
    }
}

import { INIT_STATE } from '../../constant'
import {
    CREATEUSERSUCCESS,
    FINDUSERSUCCESS,
} from '../../types/types'

export default function userReducers(state = INIT_STATE.users, action) {
    switch (action.type) {
        case CREATEUSERSUCCESS:
            return {
                data: [...state.data, action.payload],
            }
        case FINDUSERSUCCESS:
            return {
                isLogged: true,
                data: action.payload,
            }
        default:
            return state
    }
}

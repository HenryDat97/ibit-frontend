import { INIT_STATE } from '../../constant'
import { SHOWCREATEPOSTMODAL, HIDECREATEPOSTMODAL } from '../../types/types'

export default function modalReducers(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case SHOWCREATEPOSTMODAL:
            return {
                isShow: true,
            }
        case HIDECREATEPOSTMODAL:
            return {
                isShow: false,
            }
        default:
            return state
    }
}

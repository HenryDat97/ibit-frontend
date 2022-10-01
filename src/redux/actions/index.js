import { createAction } from 'redux-actions'

export const getPostsRequest = createAction("GET_POSTS_REQUEST")
export const getPostSuccess = createAction("GET_POST_SUCCESS")
export const getPostFailure = createAction("GET_POST_FAILURE")

export const CreatePostRequest = createAction("CREATE_POST_REQUEST")
export const CreatePostSuccess = createAction("CREATE_POST_SUCCESS")
export const CreatePostFailure = createAction("CREATE_POST_FAILURE")

export const UpdatePostRequest = createAction("UPDATE_POST_REQUEST")
export const UpdatePostSuccess = createAction("UPDATE_POST_SUCCESS")
export const UpdatePostFailure = createAction("UPDATE_POST_FAILURE")

export const DeletePostRequest = createAction("DELETE_POST_REQUEST")
export const DeletePostSuccess = createAction("DELETE_POST_SUCCESS")
export const DeletePostFailure = createAction("DELETE_POST_FAILURE")

export const createUserRequest = createAction("CREATE_USER_REQUEST")
export const createUserSuccess = createAction("CREATE_USER_SUCCESS")
export const createUserFailure = createAction("CREATE_USER_FAILURE")

export const findUserRequest = createAction("FIND_USER_REQUEST")
export const findUserSuccess = createAction("FIND_USER_SUCCESS")
export const findUserFailure = createAction("FIND_USER_FAILURE")


export const showModal= createAction("SHOW_CREATE_POST_MODAL")
export const hideModal= createAction("HIDE_CREATE_POST_MODAL")
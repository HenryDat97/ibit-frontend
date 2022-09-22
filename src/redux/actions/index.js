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

export const showModal= createAction("SHOW_CREATE_POST_MODAL")
export const hideModal= createAction("HIDE_CREATE_POST_MODAL")
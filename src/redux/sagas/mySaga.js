import { takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import * as api from '../../api'
import * as actions from '../actions'

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(api.fetchPosts)
        yield put(actions.getPostSuccess(posts.data))
    } catch (err) {
        console.error(err)
        yield put(actions.getPostFailure(err))
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(api.createPost, action.payload)
        yield put(actions.CreatePostSuccess(post.data))
    } catch (err) {
        console.error(err)
        yield put(actions.CreatePostFailure(err))
    }
}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(api.updatePost, action.payload)
        yield put(actions.UpdatePostSuccess(updatePost.data))
    } catch (err) {
        console.error(err)
        yield put(actions.UpdatePostFailure(err))
    }
}

function* deletePostSaga(action) {
    try {
        const deletePost = yield call(api.deletePost, action.payload)
        yield put(actions.DeletePostSuccess(deletePost.data))
    } catch (err) {
        console.error(err)
        yield put(actions.UpdatePostFailure(err))
    }
}

function* mySaga() {
    yield takeLatest(actions.getPostsRequest, fetchPostsSaga)
    yield takeLatest(actions.CreatePostRequest, createPostSaga)
    yield takeLatest(actions.UpdatePostRequest, updatePostSaga)
    yield takeLatest(actions.DeletePostRequest, deletePostSaga)
}

export default mySaga

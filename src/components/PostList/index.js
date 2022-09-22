import React from 'react'
import Post from './posts'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions'
import { postsState$ } from '../../redux/selectors'

export default function PostList() {
    const dispatch = useDispatch()
    const posts = useSelector(postsState$)

    React.useEffect(() => {
        dispatch(actions.getPostsRequest())
    }, [dispatch])

    return (
        <Grid container spacing={2} alignItems="stretch">
            {posts?.map((post) => (
                <Grid key={post._id} item xs={12} sm={6}>
                    <Post post={post} />
                </Grid>
            ))}
        </Grid>
    )
}

import React from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@material-ui/core'

import { Delete } from '@material-ui/icons/'
import { Favorite } from '@material-ui/icons/'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { DeletePostRequest, UpdatePostRequest } from '../../../redux/actions'

export default function Post({ post }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const onDeleteBtnClick = React.useCallback(() => {
        dispatch(DeletePostRequest({ ...post }))
    }, [post, dispatch])

    const onLikeBtnClick = React.useCallback(() => {
        dispatch(UpdatePostRequest({ ...post ,likeCount: post.likeCount + 1 }))
    }, [post, dispatch])

    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.createdAt).format('HH:MM MMM DD, YYYY')}
                action={
                    <IconButton onClick={onDeleteBtnClick}>
                        <Delete />
                    </IconButton>
                }
            />
            <CardMedia
                image={post.attachment === '' ? null : post.attachment}
                title="Title"
                className={post.attachment === '' ? null : classes.media}
            />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onLikeBtnClick}>
                    <Favorite />
                    <Typography component="span" color="textSecondary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

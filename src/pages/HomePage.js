import React, { useCallback } from 'react'
import { Add } from '@material-ui/icons'
import { Container, Fab } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import Header from '../components/header'
import PostList from '../components/PostList'
import useStyles from './style'
import { showModal } from '../redux/actions'
import CreatePostModal from '../components/CreatePostModal'

function HomePage() {
    const classes = useStyles()
    const disptach = useDispatch()

    const openCreatePostModal = useCallback(() => {
        disptach(showModal())
    }, [disptach])

    return (
        <Container maxWidth="lg" className={{}}>
            <Header />
            <PostList />
            <CreatePostModal />
            <Fab
                color="primary"
                className={classes.Fab}
                onClick={openCreatePostModal}
            >
                <Add />
            </Fab>
        </Container>
    )
}

export default HomePage

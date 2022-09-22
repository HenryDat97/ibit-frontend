// Import Modules
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64'
import React from 'react'
// Import Components
import { modalState$ } from '../../redux/selectors'
import { hideModal } from '../../redux/actions'
import useStyles from './styles'
import * as actions from '../../redux/actions'

export default function CreatePostModal() {
    // React Hook Variables
    const [data, setData] = React.useState({
        title: '',
        content: '',
        attachment: '',
    })
    //...
    const disptach = useDispatch()
    const { isShow } = useSelector(modalState$)
    const classes = useStyles()
    // React Hook Functions
    const onClose = React.useCallback(() => {
        disptach(hideModal())
        setData({})
    }, [disptach])

    const onSubmit = React.useCallback(() => {
        console.log({data})
        disptach(actions.CreatePostRequest(data))
        disptach(actions.hideModal())
    }, [data, disptach])

    // Popup(maybe)
    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <h2>Create New Post</h2>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                    className={classes.title}
                    required
                    label="Title"
                    value={data.title}
                    onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                    }
                />
                <TextareaAutosize
                    className={classes.textarea}
                    minRows={10}
                    maxRows={15}
                    placeholder="content..."
                    value={data.content}
                    onChange={(e) =>
                        setData({ ...data, content: e.target.value })
                    }
                />
                <FileBase64 accept="image/**" multiple={false} type="file" value={data.attachment} onDone={({base64}) => setData({...data, attachment: base64})}/>
                <div className={classes.footer}>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        component="span"
                        onClick={onSubmit}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    )
    // Render
    return (
        <Modal open={isShow} onClose={onClose}>
            {body}
        </Modal>
    )
}

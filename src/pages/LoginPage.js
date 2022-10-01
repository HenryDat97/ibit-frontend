import React from 'react'
import {
    Avatar,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from '@material-ui/core'
import { LockOpenOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findUserRequest } from '../redux/actions'
import { usersState$ } from '../redux/selectors'

function LoginPage() {
    const [data, setData] = React.useState({
        gmail: '',
        password: '',
    })
    const [Result, setResult] = React.useState('')
    const dispatch = useDispatch()
    const users = useSelector(usersState$)
    const paperStyle = {
        padding: 20,
        height: '40vh',
        width: 280,
        margin: '20px auto',
    }
    const avatarStyle = {
        backgroundColor: 'steelblue',
        marginBottom: '10px',
    }

    const textStyle = {
        fontFamily: 'Roboto',
    }
    const onSubmit = () => {
        if (data.gmail !== '' && data.password !== '') {
            dispatch(findUserRequest({ ...data }))
            setResult("")
            console.log(users.isLogged)
        } else {
            setResult('Please enter Email/password')
        }
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
                        <LockOpenOutlined />
                    </Avatar>
                    <Typography variant="h5" style={textStyle}>
                        Sign In
                    </Typography>
                    <TextField
                        label="Email"
                        onChange={(e) =>
                            setData({ ...data, gmail: e.target.value })
                        }
                        required
                        fullWidth
                    />
                    <TextField
                        label="Password"
                        type="password"
                        required
                        fullWidth
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <Button
                        variant="outlined"
                        style={{ marginTop: '30px' }}
                        color="primary"
                        onClick={onSubmit}
                        fullWidth
                    >
                        Sign In
                    </Button>
                    <Typography style={{ marginTop: '10px' }}>
                        Don't have an account yet? {''}
                        <Link
                            to="/register"
                            style={{
                                textDecoration: 'none',
                                color: 'steelblue',
                            }}
                        >
                            Sign Up
                        </Link>
                    </Typography>
                    <Typography style={{ marginTop: '10px', color: 'red' }}>
                        {Result}
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LoginPage

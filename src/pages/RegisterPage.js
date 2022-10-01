import React from 'react'
import {
    Avatar,
    Grid,
    Paper,
    TextField,
    Typography,
    Button,
} from '@material-ui/core'
import { AccountCircleOutlined } from '@material-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUserRequest } from '../redux/actions'

export default function RegisterPage() {
    const [data, setData] = React.useState({
        gmail: '',
        name: '',
        password: '',
    })

    const disptach = useDispatch()

    const navigate = useNavigate()
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
        disptach(createUserRequest(data))
        navigate("/login")
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle} sx={{ width: 56, height: 56 }}>
                        <AccountCircleOutlined />
                    </Avatar>
                    <Typography variant="h5" style={textStyle}>
                        Register
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
                        label="Username"
                        required
                        fullWidth
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        required
                        fullWidth
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                    <Button
                        variant="outlined"
                        style={{ marginTop: '30px' }}
                        color="primary"
                        onClick={onSubmit}
                        fullWidth
                    >
                        Register
                    </Button>
                    <Typography style={{marginTop: '10px'}}>
                        Already have an account? {''}
                        <Link to="/login" style={{ textDecoration: 'none', color: 'steelblue'}}>Login</Link>
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}

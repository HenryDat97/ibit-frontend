import React, { useContext } from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './style'
import { AuthContext } from '../provider/AuthContext'

function Header() {
    const classes = useStyles()
    const currentUsers = useContext(AuthContext)
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                className={classes.container}
            >
                Blog - Games
            </Typography>
            <Typography
                variant="h5"
                align="center"
                className={classes.userInfo}
            >
                {currentUsers.data.name}
            </Typography>
        </>
    )
}

export default Header

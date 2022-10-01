import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'lighter',
        padding: '5px 0',
        margin: 'none'
    },
    userInfo: {
        backgroundColor: "#14213D",
        width: '200px',
        fontStyle: 'italic',
        color: 'white',
        borderRadius: "5px",
        marginBottom: '10px',
        position: 'absolute',
        left: "20px",
        top: "5px"
    }
}))
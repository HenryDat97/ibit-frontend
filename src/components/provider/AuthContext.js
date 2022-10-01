import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { usersState$ } from '../../redux/selectors'

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
    const navigate = useNavigate()
    const users = useSelector(usersState$)

    React.useEffect(() => {
        const unsubcribed = () => {
            if (users.isLogged) {
                navigate('/')
                return
            } 
            navigate("/login")
        }

        return (
            unsubcribed()
        )
    }, [navigate, users])

    return <AuthContext.Provider value={users}>{children}</AuthContext.Provider>
}

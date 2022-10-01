import { Route, Routes,  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import AuthProvider from './components/provider/AuthContext'

function App() {
    return (
        <AuthProvider>
           <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </AuthProvider>
            
    )
}

export default App

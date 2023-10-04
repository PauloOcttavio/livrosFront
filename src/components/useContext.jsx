import { useState, useEffect, createContext, useContext } from "react"
import { NotificationManager } from "react-notifications"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { Navigate } from "react-router-dom"
const UserContext = createContext({
    user: null,
    loginUser: () => { },
})

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(user && user.role === 'admin')
    }, [user])


    const loginUser = async (data) => {
        return await axios.post("http://localhost:8080/login",data)
        .then((response) => {
            const dados = response.data;
            const token = dados.token;
            if (!token) {
                alert('falha no login, tente novamnte');
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            setTimeout(() => {
                navigate('/');
            }, 500);
            })
    }

    return (
        <UserContext.Provider value={{ user, loginUser, isAdmin }}>
            {children}
        </UserContext.Provider>
    )
}

export { useUser, UserProvider }
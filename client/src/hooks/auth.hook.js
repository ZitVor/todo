import { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
const storageName = 'userData'
export const useAuth = () => {
    const auth = useContext(AuthContext)
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
  
    // const login = useCallback((jwtToken, id) => {
        
    //     auth.token = jwtToken
    //     auth.userId = id
    //     console.log(`1login:${id}`)
    //     localStorage.setItem(storageName,JSON.stringify({jwtToken, id}))
    //     auth.login()
    //     // setToken(jwtToken)
    //     // setUserId(id)
    //     console.log(`login:${token}`)
    //     console.log(auth.token)
        
    // },[]
    // )
  
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)
    
        localStorage.setItem(storageName, JSON.stringify({
          userId: id, token: jwtToken
        }))
        
      }, []) 

      const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
      }, [])
      
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem(storageName))
  
      if (data && data.token) {
        login(data.token, data.userId)
      }
      setReady(true)
    }, [login])
  
  
    return { login, logout, token, userId, ready }
  }
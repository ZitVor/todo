import { useCallback, useContext, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { useHttp } from "../../../../hooks/http.hooks"

const All = () =>{
    const [tasks,setTasks] = useState([])
    const request = useHttp()
    const token = useContext(AuthContext)

    const fetchTasks = useCallback(async() => {
        try{
            const fetched = await request('http://localhost:5000/api/')
        }
        catch(e){
            
        }
    })
}
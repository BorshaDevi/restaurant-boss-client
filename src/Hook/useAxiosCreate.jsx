import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
 const AxiosCreate=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosCreate = () => {
    const {login}=useAuth()
    const navigate=useNavigate()
    AxiosCreate.interceptors.request.use((config)=>{
        // console.log(config)  
        const token=localStorage.getItem('token')
       config.headers.authorization=`Bearer ${token}`
        return config;
    },(error)=>{
        return Promise.reject(error);
    })
    AxiosCreate.interceptors.response.use((response)=>{
        return response;
    }, (error)=>{
        const status=error.response.status;
        console.log('error status',error)
        if(status === 401 || status === 403){
            login()
            .then(result=>{

            })
            .catch(error => {
                console.log(error)
            })
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return AxiosCreate;
};

export default useAxiosCreate;
import { useEffect, useState } from "react"
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu=()=>{
    const axiosPublic=useAxiosPublic()
    const {data : menus = [],isLoading : loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn: async () =>{
            const res =await axiosPublic.get('/menu')
            console.log(res.data)
            return res.data
        }
        
    })
    return [menus,loading , refetch]
    // const [menus,setMenus]=useState([])
    // const [loading,setLoading]=useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
        
    //        setMenus(data)
    //        setLoading(false)
    //     } )
    // },[])

    
}
export default useMenu;
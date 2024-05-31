import { useQuery } from "@tanstack/react-query";

import useAxiosCreate from "./useAxiosCreate";
import useAuth from "./useAuth";



const useAdmin = () => {
    const {user}=useAuth()
    const axiosAdmin=useAxiosCreate()
   const {data :admin,isPending}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async ()=> {
        const res=await axiosAdmin.get(`/use/admin/${user?.email}`)
        console.log(res.data.isAdmin)
        return res.data.isAdmin
    }
   })
  
   return [admin,isPending]
};

export default useAdmin;
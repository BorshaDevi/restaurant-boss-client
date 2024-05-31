import { useQuery } from "@tanstack/react-query";
import useAxiosCreate from "./useAxiosCreate";
import useAuth from "./useAuth";

const useCarts = () => {
    const  axiosUrl=useAxiosCreate()
    const {user}=useAuth()
    const {refetch,data : cart = []} =useQuery({
        queryKey:['carts',user?.email],
        queryFn:async ()=>{
            const res=await axiosUrl.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    
    return [cart,refetch]
    
};

export default useCarts;
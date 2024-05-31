import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useAdmin from "../Hook/useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading}=useAuth()
    const [isAdmin,isPending]=useAdmin()
    const location=useLocation()
    if(loading ||  isPending){
        return ('Loading......')
    }
    if(user &&  isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;
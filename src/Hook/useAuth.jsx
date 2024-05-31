import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const useAuth = () => {
   const userAuth=useContext(AuthContext)
   return userAuth;
};

export default useAuth;
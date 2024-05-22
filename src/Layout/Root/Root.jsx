import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navar from "../Navar/Navar";


const Root = () => {
    const location=useLocation()
    const noNavFoot=location.pathname.includes('login')
    return (
        <div>
            {noNavFoot || <Navar></Navar>}
            <Outlet></Outlet>
           {noNavFoot ||  <Footer></Footer>}
        </div>
    );
};

export default Root;
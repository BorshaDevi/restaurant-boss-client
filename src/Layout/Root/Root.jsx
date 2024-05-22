import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navar from "../Navar/Navar";


const Root = () => {
    const location=useLocation()
    const noNavFoot=location.pathname.includes('login')
    const noSign=location.pathname.includes('signUp')
    return (
        <div>
            {noNavFoot || noSign || <Navar></Navar>}
            <Outlet></Outlet>
           {noNavFoot || noSign || <Footer></Footer>}
        </div>
    );
};

export default Root;
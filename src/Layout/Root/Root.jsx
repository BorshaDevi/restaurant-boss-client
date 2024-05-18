import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navar from "../Navar/Navar";


const Root = () => {
    return (
        <div>
            <Navar></Navar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
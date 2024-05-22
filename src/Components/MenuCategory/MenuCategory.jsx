import { Link } from "react-router-dom";
import Popular from "../../Pages/Home/Popular";


const MenuCategory = ({items,title}) => {
    return (
        <div className="mt-10">
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(menu => <Popular key={menu._id} menu={menu}></Popular>)
                }
            </div>
            <div className="justify-center items-center ">
            
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn border-b-orange-500 mx-auto">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;
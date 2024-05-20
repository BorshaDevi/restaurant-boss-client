import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SeactonTitle/SectionTitle";
import Popular from "./Popular";


const Menu = () => {
    const [menus,setMenus]=useState([])
    useEffect(() => {
        fetch('menus.json')
        .then(res => res.json())
        .then(data => {
           const poprofuler= data.filter(da => da.category === "popular")
           setMenus(poprofuler)
        } )
    },[])
   
    return (
        <div>
            <SectionTitle
             subUnderline={'--Check it out--'}
             underline={'From our menu'}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menus.map(menu => <Popular key={menu._id} menu={menu}></Popular>)
                }
            </div>
            <div className="justify-center items-center ">
            <button className="btn border-b-orange-500 ">View Details</button>
            </div>
            
        </div>
    );
};

export default Menu;
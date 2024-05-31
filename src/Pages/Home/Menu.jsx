
import SectionTitle from "../../Components/SeactonTitle/SectionTitle";
import Popular from "./Popular";
import useMenu from "../../Hook/useMenu";


const Menu = () => {
    const [menus]=useMenu()
    
    const poprofulers=menus.filter(menu => menu.category === 'popular')

    
   
    return (
        <div>
            <SectionTitle
             subUnderline={'--Check it out--'}
             underline={'From our menu'}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    poprofulers.map(menu => <Popular key={menu._id} menu={menu}></Popular>)
                }
            </div>
            <div className="justify-center items-center ">
            <button className="btn border-b-orange-500 ">View Details</button>
            </div>
            
        </div>
    );
};

export default Menu;
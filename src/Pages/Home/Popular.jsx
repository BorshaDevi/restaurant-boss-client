import { Link } from "react-router-dom";


const Popular = ({menu}) => {
   const {name,price,recipe,image}=menu
    return (
        <>
        <div className="flex space-x-5">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-orange-400">${price}</p>

        </div>
        
        </>
    );
};

export default Popular;
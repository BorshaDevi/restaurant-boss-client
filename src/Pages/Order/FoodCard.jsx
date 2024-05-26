import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosCreate from "../../Hook/useAxiosCreate";
import useCarts from "../../Hook/useCarts";


const FoodCard = ({items}) => {
    const {name,image,recipe,price,_id}=items
    const {user}=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const axios=useAxiosCreate()
    const [,refetch]  =useCarts()

    const handleCart=cart=>{
     if(user && user.email){
        const cartItem={
          menuId:_id,
          userEmail:user.email,
          name,
          price
        }
       axios.post('/carts',cartItem)
       .then(res => {
        console.log(res.data)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} Added successfully`,
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
       })
     }
     else{
      Swal.fire({
        title: "Please Login",
        text: "You are not  login",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from:location}},{replace:true})
        }
      });
     }
    }
  
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image}alt="Shoes" /></figure>
  <p className="absolute  px-4 right-0 bg-black text-white">${price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() => handleCart(items)} className="btn border-b-yellow-500 uppercase">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;
import 'animate.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCarts from '../../Hook/useCarts';
const Navar = () => {
  const {user,login}=useContext(AuthContext)
  const [cart]=useCarts()
  const handleLogout=()=>{
    login()
    .then(result=>{
      console.log(result)
    })
  }
    const links=<>
         <li><Link className='focus:text-white  text-yellow-500  focus:underline  font-bold' to='/'>Home</Link></li>
         <li><Link className='text-yellow-500 font-bold focus:text-white  focus:underline' to='/ourMenu'>Our Menu</Link></li>
         <li><Link className='text-yellow-500 font-bold focus:text-white  focus:underline' to='/order/salad'>Order your Menu</Link></li>
         <li><Link className='text-yellow-500 font-bold focus:text-white  focus:underline' to='/secret'>Secret</Link></li>
         
        <li>
          <Link to='/dashboard/cart' className="indicator">
         
  <button className=""><AiOutlineShoppingCart /></button>
  <span className="indicator-item badge badge-secondary">+{cart.length}</span> 

          </Link>
        </li>
         
         {
          user?< button onClick={handleLogout} className='text-yellow-500 font-bold focus:text-white  focus:underline'>LogOut</button> :
          <div>
             <li><Link className='text-yellow-500 font-bold focus:text-white  focus:underline' to='/login'>Login</Link></li>
         {/* <li><Link className='text-yellow-500 font-bold focus:text-white  focus:underline' to='/signUp'>Sing Up</Link></li> */}
          </div>
         }
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-glass max-w-screen-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
         {links}
      </ul>
    </div>
    <a className=" text-xl font-semibold animate__animated animate__bounce animate__faster-800ms animate__fadeInDownBig text-white "><span className='text-green-500 font-bold text-3xl '>Restaurant</span> Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navar;
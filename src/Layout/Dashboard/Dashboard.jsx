import { BsCalendar, BsCart, BsList } from "react-icons/bs";
import {  FaEnvelope, FaHome, FaRegUser, FaUtensils } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa6";
import { VscBook, VscMenu, VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../../Hook/useCarts";
import { BiSolidContact } from "react-icons/bi";



const Dashboard = () => {
    const [cart]=useCarts()
    const isAdmin=true
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300 p-4 ">
               <ul className="space-y-5">

                   {
                      isAdmin? <>
                    <li>
                        <NavLink to='/dashboard/adminHome' className='flex space-x-2'>
                        <FaHome />
                            Admin Home</NavLink>
                    </li>


                    <li>
                        <NavLink to='/dashboard/addItem' className='flex space-x-2'>
                        <FaUtensils /> Add items</NavLink>
                            
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItem' className='flex space-x-2 '>
                        <VscMenu></VscMenu>
                            Manage  Item</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBooking' className='flex space-x-2'>
                            <VscBook></VscBook>
                            Manage Booking</NavLink>
                    </li>
                       <li>
                        <NavLink to='/dashboard/manageUser' className='flex space-x-2'>
                        <FaRegUser />
                            Manage user</NavLink>
                    </li>
                      </> :
                      <>
                       <li>
                        <NavLink to='/dashboard/cart' className='flex space-x-2'>
                        <BsCart />
                            My cart({cart.length})</NavLink>
                    </li>


                    <li>
                        <NavLink to='/dashboard/userHome' className='flex space-x-2'>
                        <FaHome />
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation' className='flex space-x-2'>
                            <BsCalendar></BsCalendar> Reservation</NavLink>
                            
                    </li>
                    <li>
                        <NavLink to='/dashboard/review' className='flex space-x-2 '>
                        <VscPreview />
                            ADD Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/booking' className='flex space-x-2'>
                            <BsList></BsList>
                            My Booking</NavLink>
                    </li>
                      </>
                   }
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/' className='flex space-x-2'>
                        <FaHome />
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ourMenu' className='flex space-x-2'>
                        <FaCarBattery></FaCarBattery>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ourMenu' className='flex space-x-2'>
                            <BiSolidContact></BiSolidContact>
                            Contact</NavLink>
                    </li>

               </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
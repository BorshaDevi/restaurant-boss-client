import { FcDeleteDatabase } from "react-icons/fc";
import SectionTitle from "../../../Components/SeactonTitle/SectionTitle";
import useMenu from "../../../Hook/useMenu";
import { RxUpdate } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosCreate from '../../../Hook/useAxiosCreate'


const ManageItem = () => {
  const [menus , , refetch]=useMenu()
  const  axiosSecure=useAxiosCreate()
  const handleDelete=(menu)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res= await axiosSecure.delete(`/menuDelete/${menu._id}`)
        console.log(res.data)
          if(res.data.deletedCount >0){
            refetch()
            Swal.fire({
          title: "Deleted!",
          text: `${menu.name}Your file has been deleted.`,
          icon: "success"
        });
          }
       
      }
    });
  }
    
    return (
        <div>
            <SectionTitle subUnderline={'--Hurry up--'}
             underline={'Manage all item'}>

      </SectionTitle>
      <div>
        <div>
            <h1 className="text-xl">Total Item={menus.length}</h1>
        </div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        menus.map((menu , index) =>  <tr key={menu._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>
              {menu.name}
              
            </td>
            <td className="text-orange-400"> $ {menu.price}</td>
            <th>
              <button className="btn btn-ghost text-xl "><RxUpdate /></button>
            </th>
            <th>
              <button onClick={() => handleDelete(menu)}className="btn btn-ghost text-xl "><FcDeleteDatabase /></button>
            </th>
          </tr>)
     }
      
    </tbody>
   
    
  </table>
</div>
                </div>
        </div>
    );
};

export default ManageItem;
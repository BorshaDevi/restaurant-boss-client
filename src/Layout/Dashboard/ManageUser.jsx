import { useQuery } from "@tanstack/react-query";
import useAxiosCreate from "../../Hook/useAxiosCreate";
import { FcDeleteDatabase } from "react-icons/fc";
import { FaRegUser } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUser = () => {
    const axiosUrl=useAxiosCreate()
    const {data : users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const data=await axiosUrl.get('/users')
            return data.data
        }
    })
    const handleAdmin=id=>{
        
    }
    const handleDeleteUser=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosUrl.delete(`/deleteUser/${id}`)
            .then(res => {
                if(res.data.deletedCount >0){
                    refetch()
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })
            }
          });
    }
    return (
        <div className="text-center mx-auto ">
            <div className="flex justify-between">
                <h2>All user</h2>
                <h2>Total user{users.length}</h2>
            </div>



            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,index) =>  <tr key={user._id}>
            <th>{index +1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Blue</td>
            <td onClick={() => handleAdmin(user._id)} className="text-3xl bg-orange-400 text-center text-white"><FaRegUser /></td>
            <td onClick={() => handleDeleteUser(user._id)} className="text-3xl"><FcDeleteDatabase /></td>
          </tr> )
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;
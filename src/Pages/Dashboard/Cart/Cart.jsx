
import Swal from "sweetalert2";
import useCarts from "../../../Hook/useCarts";
import { FaTrash } from "react-icons/fa";
import useAxiosCreate from "../../../Hook/useAxiosCreate";


const Cart = () => {
    const axiosUrl=useAxiosCreate()
    const [cart,refetch]=useCarts()
    let totalPrice=cart.reduce((ass,item)=> ass+ item.price,0)
    const handleDelete=id=>{
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
            
            axiosUrl.delete(`/delete/${id}`)
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
        <div>
            <div className="flex justify-evenly">
                <h1 className="text-2xl">Total item {cart.length}</h1>
                <h1 className="text-2xl">Total price $ {totalPrice}</h1>
                <button className="btn bg-orange-200">Pay</button>
            </div>
            {
                cart.map((item,index) => <div key={item._id} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                        <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                           {index + 1}
                        </td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                      {item.name}
                      </td>
                      <td>{item.price}</td>
                      <th>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrash className="text-red-500"></FaTrash></button>
                      </th>
                    </tr>
                   
                  </tbody>
                  
                </table>
              </div> )
            }









        </div>
    );
};

export default Cart;
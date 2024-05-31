import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SeactonTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosCreate from "../../../Hook/useAxiosCreate";
import Swal from "sweetalert2";


const Image_hosting_key=import.meta.env.VITE_Image_Upload
const image_host_api=`https://api.imgbb.com/1/upload?key=${Image_hosting_key}`
const AddItem = () => {
  const axiosSecre=useAxiosCreate()
  const axiosPublic=useAxiosPublic()
  
    const { register, handleSubmit ,reset } = useForm()
    const onSubmit =async(data) => {
      const image={image : data.image[0]}
        console.log(data)
     const res=await axiosPublic.post(image_host_api,image,{
      headers:{"content-type": "multipart/form-data",}
     })
     if(res.data.success){
         const addData={
              name:data.name,
              category:data.category,
              price:parseFloat(data.price),
              recipe:data.recipe,
              image:res.data.data.display_url
         }
         const postData=await axiosSecre.post('/menu',addData)
         if(postData.data.insertedId){
          reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "",
            showConfirmButton: false,
            timer: 1500
          });
         }
     }
     console.log(res.data)
    }
    return (
        <div>
            <SectionTitle underline={'Add an item'} subUnderline={'---what next---'}>

            </SectionTitle>
            <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      
      <div className="form-control w-full ">
  <div className="label">
    <span className="label-text">Recipe Name<span className="text-red-500">*</span></span>
   
  </div>
  <input type="text" {...register("name",{required:true})} placeholder="Recipe name" className="input input-bordered w-full " />
  
</div>

    <div className="lg:flex  ">
        {/* category */}
           
      <div className="form-control w-full ">
  <div className="label">
  <label>Category Selection<span className="text-red-500">*</span></label>
   
  </div>
  <select  {...register("category",{required:true})}
       className="select select-bordered w-full ">
            <option value=''>Chosses</option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="desert">Desert</option>
            <option value="drinks">Drinks</option>
            
    </select>
  
</div>

        {/* price */}

        <div className="form-control w-full ml-2">
  <div className="label">
    <span className="label-text">Price<span className="text-red-500">*</span></span>
   
  </div>
  <input type="number" {...register("price",{required:true})} placeholder="price" className="input input-bordered w-full " />
  
</div>
    </div>
    <label className="form-control">
  <div className="label">
  <span className="label-text">Recipe Details<span className="text-red-500">*</span></span>
    
  </div>
  <textarea className="textarea textarea-bordered h-24" {...register("recipe",{required:true})} placeholder="Recipe"></textarea>
 
</label>
<input type="file" {...register("image",{required:true})} className="file-input w-full max-w-xs" />
 <br></br>
    <button className="btn bg-orange-400"> <input type="submit" value="Add Item " /> <FaUtensils></FaUtensils></button>
    </form>
            </div>
        </div>
    );
};

export default AddItem;
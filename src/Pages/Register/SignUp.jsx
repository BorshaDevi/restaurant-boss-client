import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";


const SignUp = () => {
  const {createUserWith,profileUpdate}=useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit=data=>{
        
        createUserWith(data.email,data.password)
        .then(result => {
          const user=result.user
        profileUpdate(data.name,data.photo)
        .then(result => {
           reset()
         Swal.fire({
          title: "Sign Up successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        })
        })
        .catch(error => {
          console.log(error)
        })

      }
    return (
     <div>
       <Helmet>
                <title>Restaurant Boss | Sign Up</title>
            </Helmet>
    
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
           
            <img className="max-w-screen lg:max-w-xl" src="https://i.ibb.co/0C36RdQ/10594778-4498897.jpg" alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" name='name' {...register ('name',{required:true})} placeholder="Enter your name" className="input input-bordered" />
                {errors.name && <span className="text-red-500">!Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input type="text" name='name' {...register ('photo',{required:true})} placeholder="Enter your name" className="input input-bordered" />
                {errors.photo && <span className="text-red-500">!Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' {...register ('email',{required:true})} placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-500">!Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input type="password" name='password'{...register ('password',{required:true,pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/})} placeholder="password" className="input input-bordered"  />
                {errors.password?.type === 'required' && <span className="text-red-500">!Password is required</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-500">!Password should be one uppercase ,one lowercase,one special character,one number,and at least 8 character is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input  className="btn bg-blue-700" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center p-4">Already have account?<Link className="text-blue-500" to='/login'>Go to Login page</Link></p>
          </div>
        </div>
      </div>
      </div>
    );
};

export default SignUp;
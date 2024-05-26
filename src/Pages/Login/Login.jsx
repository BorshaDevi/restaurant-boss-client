import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
    const {signIn , googleSignIn}=useContext(AuthContext)
const navigate=useNavigate()
const location=useLocation()
let from = location.state?.from?.pathname || "/";
    
    const [disabled,setDisabled]=useState(true)

    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        // const person={email,password}
        // console.log(person)
        signIn(email,password)
        .then(result => {
            const user=result.user
            console.log(user)
            form.reset()
            Swal.fire({
              title: "Login successfully",
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
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }
    

    
   
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
     const handleCaptcha=(e)=>{
        const user_captcha_value=e.target.value
        if(validateCaptcha(user_captcha_value)){
          setDisabled(false)
        }
        else{
            setDisabled(true)
        }
     }
    return (
        <div>
            <Helmet>
                <title>Restaurant Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      
      <img className="max-w-screen lg:max-w-2xl shadow-2xl shadow-red-200" src="https://i.ibb.co/KXJdCsh/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai.jpg" alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-glass">
      <form onSubmit={handleSubmit} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          
          <input  onBlur={handleCaptcha}  type="text" placeholder="Captcha" name='Captcha' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          
          <input disabled={disabled} className="btn bg-blue-700" type="submit" value="Login" />
        </div>
        <div className="divider">OR</div>
         <SocialLogin></SocialLogin>
      </form>
      <p className="text-center p-4">Do not any account?<Link className="text-blue-500" to='/signUp'>Go to Sign up page</Link></p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const inputFill=useRef(null)
    const [disabled,setDisabled]=useState(true)
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value;
        const password=form.password.value;
        const person={email,password}
        console.log(person)
    }

    
   
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])
     const handleCaptcha=()=>{
        const user_captcha_value=inputFill.current.value
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
          
          <input   ref={inputFill} type="text" placeholder="Captcha" name='Captcha' className="input input-bordered" required />
          <button onClick={handleCaptcha} className="btn bg-zinc-200 mt-2">Valition</button>
        </div>
        <div className="form-control mt-6">
          
          <input disabled={disabled} className="btn bg-blue-700" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
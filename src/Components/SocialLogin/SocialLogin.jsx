import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate=useNavigate()
    const axiosPublic=useAxiosPublic()
    const {googleSignIn}=useAuth()
    const handleGoogle=()=>{
        googleSignIn()
        .then(result => {
            const userDe={
                name:result.user.displayName,
                email:result.user.email
            }
        //   alert('logged in successfully')
          axiosPublic.post('/user',userDe)
          .then(res => {
            console.log(res.data)
            Swal.fire({
                title: "Sign up successfully",
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
              navigate('/')
          })
        })
        .catch(error => console.log(error))
      }
    return (
        <div>
            <h1 onClick={handleGoogle} className=" text-center border btn  border-blue-600 text-blue-800 font-bold text-2xl">Google</h1>
        </div>
    );
};

export default SocialLogin;
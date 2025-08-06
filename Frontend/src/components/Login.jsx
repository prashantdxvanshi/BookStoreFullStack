import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit =async (data) =>{
    const userinfo={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userinfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        // alert
        toast.success("login successfully");
      }
      localStorage.setItem("Users:", JSON.stringify(res.data.userfind));
    }).catch((err)=>{
      console.log(err);
      // alert("error: ",err.message);
      toast.error("error: ",err.message);
    })
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
      
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          {/* Wrap all interactive elements inside the form */}
          <div className="absolute right-2 top-2">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => {
                document.getElementById("my_modal_3").close();
                navigate("/");
              }}
            >
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-60 outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">Email is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-60  outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">Password is required</span>}
            </div>
            <div className="flex justify-around mt-3">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="text-blue-600 cursor-pointer underline">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

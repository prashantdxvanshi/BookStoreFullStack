import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => console.log(data);

  return (
   <>
   <div>
   <dialog id="my_modal_3" className="modal ">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-4 space-y-2">
        <span>Email</span> 
        <br />
        <input type="email"  name="email" placeholder="Enter Your Email" className="w-80 outline-none" {...register("email", { required: true })} />
    </div>
    <div className="mt-4 space-y-2">
        <span>Password</span> 
        <br />
        <input type="password" name="password" placeholder="Enter Your Password" className="w-80 outline-none" {...register("Password", { required: true })}/>
    </div>
    <div className="flex justify-around mt-3">
    <button className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700">Login</button>
    <p>Not registered?{" "} 
    <Link to="/signup" className="text-blue-600 cursor-pointer underline">Signup</Link></p>
    </div>
    </form>
  </div>
</dialog>
   </div>
   </>
   
  )
}

export default Login

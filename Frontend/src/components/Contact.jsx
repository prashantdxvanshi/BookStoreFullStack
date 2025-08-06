import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


const Contact = () => {
   
  return (
    <>
    <div className="flex h-screen items-center justify-center">
          <div className="border-[2px] shadow-md p-4 rounded ">
          <div className=" dark:bg-slate-900 dark:text-white">
          
            <form  method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form >
            <h3 className="font-bold text-3xl">Contact us</h3>
            <div className="mt-4 space-y-2">
                <span>Name</span> 
                <br />
                <input type="text" placeholder="Enter Your Name" className="w-50 outline-none"  />
            </div>
            <div className="mt-4 space-y-2">
                <span>Email</span> 
                <br />
                <input type="email" placeholder="Enter Your Email" className="w-50 mx-3 outline-none"  />
            </div>
            <div className="mt-4 space-y-2">
                <span>Message</span> 
                <br />
                <input type="text" placeholder="Type your message" className="w-80 mx-3 px-3 outline-none"/>
            </div>
            <div className="flex justify-around mt-3">
            <button className="bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700">Submit</button>
            </div>
          </div>
        </div>
        

       </div>
    </>
  )
}

export default Contact

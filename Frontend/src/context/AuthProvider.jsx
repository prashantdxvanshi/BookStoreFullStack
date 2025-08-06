import React, { createContext } from 'react'
export const AuthContext=createContext();
const AuthProvider = () => {
    const initialAuthUser=localStorage.getItem("Users");

  return (
    <div>
      
    </div>
  )
}

export default AuthProvider

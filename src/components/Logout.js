// src/components/Login.js
import React, { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { auth } from "./firebaseConfig"
import { signOut } from "firebase/auth"

const Logout = () => {
  const { user, setUser } = useContext(UserContext)
  const logOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user")
        setUser(null)
      })
      .catch((error) => {
        // Handle errors here
        console.error(error)
      })
  }

  return (
    <button style={{ margin: "20px" }} onClick={logOut}>
      Logout
    </button>
  )
}

export default Logout

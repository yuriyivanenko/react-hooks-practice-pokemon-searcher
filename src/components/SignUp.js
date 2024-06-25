// src/components/Signup.js
import React, { useState } from "react"
import { auth } from "./firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { db } from "./firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const starterPokemon = {
    id: 2,
    name: "ivysaur",
    hp: 60,
    sprites: {
      front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await addDoc(collection(db, `users/${userCredential.user.uid}/pokemon`), starterPokemon)
      setUser(userCredential.user)
      setEmail("")
      setPassword("")
    } catch (error) {
      console.error("Error signing up:", error)
      alert(error)
      setEmail("")
      setPassword("")
    }
  }

  return (
    <form onSubmit={handleSignup} style={{ marginBottom: "20px" }}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Signup

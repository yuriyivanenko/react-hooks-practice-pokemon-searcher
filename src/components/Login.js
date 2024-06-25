// src/components/Login.js
import React, { useState } from 'react'
import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setUser(userCredential.user)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
      <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login

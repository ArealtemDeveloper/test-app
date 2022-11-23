import { colors } from "../colors"
import Header from "../components/Header"
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'
import { AuthError } from "../components/AuthError"

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { firebaseApp } from "../firebase/firebaseConfig"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Home() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ authError, setAuthError ] = useState(false)
  const router = useRouter()

  const firebaseAuth = getAuth(firebaseApp)
  const providerGoogle = new GoogleAuthProvider()

  const signInGoogle = async() => {
    try {
      const response = await signInWithPopup(firebaseAuth, providerGoogle)
      router.push('/about')
    } catch (error) {
      alert(error.message)
    }
  }

  const signUpWithEmail = async() => {
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, email, password )
      setEmail('')
      setPassword('')
    } catch (error) {
      alert(error.message)
    }
  }
  const signInWithEmail = async(e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(firebaseAuth, email, password )
      setEmail('')
      setPassword('')
      setAuthError(false)
      router.push('/about')
    } catch (error) {
      setAuthError(true)
    }
  }

  return (
    <div className='container'>
      <Header/>
    <div className='wrapper'>
      <h3 className='title'>Pokemon Auth</h3>
      {authError ? <AuthError/> : ''}
      <form>
        <div className="auth-inputs">
            <input 
            type="email" 
            placeholder='E-mail'
            required 
            className='input-text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="password" 
            placeholder='Password' 
            className='input-text'
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div className='buttons'>
            <button 
            className='btn' 
            style={{backgroundColor: colors.lightBlue }}
            onClick={signInWithEmail}
            >
              Login
            </button>
            <button 
            className='btn' 
            style={{border: `2px solid ${colors.lightBlue}`}}
            onClick={signUpWithEmail}
            >
              Sign Up
            </button>
      </div>
      </form>
      <div className="auth-buttons">
        <div className="google-wrapper">
            <FcGoogle/>
            <button 
            className='auth-btn'
            onClick={signInGoogle}
            >
              Sign in with Google</button>
        </div>
        </div>
    </div>
    </div>
  )
}

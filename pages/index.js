import { colors } from "../colors"
import Header from "../components/Header"
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple } from 'react-icons/ai'

import { getAuth, signInWithPopup, GoogleAuthProvider, OAuthProvider } from 'firebase/auth'
import { firebaseApp } from "../firebase/firebaseConfig"

export default function Home() {

  const firebaseAuth = getAuth(firebaseApp)
  const providerGoogle = new GoogleAuthProvider()
  const providerApple = new OAuthProvider('apple.com')

  const signInGoogle = async() => {
    const response = await signInWithPopup(firebaseAuth, providerGoogle)
    console.log(response)
  }
  const signInApple = async() => {
    const response = await signInWithPopup(firebaseAuth, providerApple)
    console.log(response)
  }

  return (
    <div className='container'>
      <Header/>
    <div className='wrapper'>
      <h3 className='title'>Auth/Reg</h3>
      <div>
        <input 
        type="text" 
        placeholder='E-mail' 
        className='input-text'
        />
      </div>
      <div>
        <input 
        type="text" 
        placeholder='Password' 
        className='input-text'
        />
      </div>
      <div className='buttons'>
        <button className='btn' style={{backgroundColor: colors.lightBlue }}>Login</button>
        <button className='btn' style={{border: `2px solid ${colors.lightBlue}`}}>Sign Up</button>
      </div>
      <div className="auth-buttons">
        <div className="google-wrapper">
            <FcGoogle/>
            <button 
            className='auth-btn'
            onClick={signInGoogle}
            >
              Sign in with Google</button>
        </div>
        <div className="apple-wrapper">
            <AiFillApple style={{color: '#fff'}}/>
            <button 
            className='auth-btn'
            onClick={signInApple}
            >
              Sign in with Apple</button>
        </div>
        </div>
    </div>
    </div>
  )
}

import { colors } from "../colors"
import Header from "../components/Header"

export default function Home() {

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
    </div>
    </div>
  )
}

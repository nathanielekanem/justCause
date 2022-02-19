// justcause.vercel.app/signup

import globalStyles from '../styles/globals.css'
import signupStyles from '../styles/Signup.module.css'

function signup() {
  return (
      <div className={globalStyles.body}>
        <h1 
        className={signupStyles.header}>
            SIGNUP
        </h1>
      </div>    
  )
}

export default signup;
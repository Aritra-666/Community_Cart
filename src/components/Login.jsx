import React from 'react'
import { Link} from 'react-router-dom'
import LoginStyle from './Login.module.css'

export default function Login() {


   


  return (
    <div className={LoginStyle.loginpage}>
    <div className={LoginStyle.logincontainer}>
       
      <h2>Login</h2>
      <form action="#" method="post">
        <div className={LoginStyle.wrapinput}>
          <input
            className={LoginStyle.input}
            id={LoginStyle.username}
            type="text"
            placeholder="Mobile number"
          />
          <span className={LoginStyle.focusborder}></span>
        </div>

        <div className={LoginStyle.wrapinput}>
          <input
            className={LoginStyle.input}
            id={LoginStyle.password}
            type="password"
            placeholder="Password"
          />
          <span className={LoginStyle.focusborder}></span>
        </div>
      </form>
      <div id={LoginStyle.submit}><h3>log in</h3></div>
      <Link to="/Signin"> <p className={LoginStyle.create}> create new account </p></Link>
      </div>
    </div>
  )
}

import React from 'react'
import { Link} from 'react-router-dom'
import SignStyle from './Sign.module.css'


export default function Sign() {
  return (
    <div className={SignStyle.Signpage}>
       <div className={SignStyle.Signcontainer}>
       
       <h2>Sign in</h2>
       <form action="#" method="post">
         <div className={SignStyle.wrapinput}>
           <input
             className={SignStyle.input}
             id={SignStyle.Mobile}
             type="text"
             placeholder="Your mobile number"
           />
           <span className={SignStyle.focusborder}></span>
         </div>

         <div className={SignStyle.wrapinput}>
           <input
             className={SignStyle.input}
             id={SignStyle.username}
             type="text"
             placeholder="Your name"
           />
           <span className={SignStyle.focusborder}></span>
         </div>

         <div className={SignStyle.wrapinput}>
           <input
             className={SignStyle.input}
             id={SignStyle.password}
             type="password"
             placeholder="Enter a password"
           />
           <span className={SignStyle.focusborder}></span>
         </div>
       </form>
       <div id={SignStyle.verify}><h3>Verify</h3></div>
       <Link to="/Login"> <p className={SignStyle.create}> Already have an account? </p></Link>
       </div>

    </div>
  )
}


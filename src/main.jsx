import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Login from "./components/Login";
import Sign from './components/Sign';
import App from './components/App.jsx'
import Account from './components/Account.jsx';

const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },


  {
    path:'/Login',
    element: <Login/>
  },


  {
    path:'/Signin',
    element: <Sign/>
  },

  {
    path:'/Account',
    element: <Account/>
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(


  
  <React.StrictMode>
    <>

   <RouterProvider router={router}/>
   
   </>
  </React.StrictMode>,
)

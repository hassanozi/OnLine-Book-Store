import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ForgetPass from './Modules/AuthModule/Components/ForgetPass/ForgetPass'
import Login from './Modules/AuthModule/Components/Login/Login'
import Register from './Modules/AuthModule/Components/Register/Register'
import ResetPass from './Modules/AuthModule/Components/ResetPass/ResetPass'
import AuthLayout from './Modules/Shared/Components/AuthLayout/AuthLayout'
import NotFound from './Modules/Shared/Components/NotFound/NotFound'
import ChangePass from './Modules/AuthModule/Components/ChangePass/ChangePass'
import { ToastContainer } from 'react-toastify'
import MasterLayout from './Modules/Shared/Components/MasterLayout/MasterLayout'
import Home from './Modules/HomePageModule/Components/Home/Home'
import ProtectedRoute from './Modules/Shared/Components/ProtectedRoute/ProtectedRoute'

function App() {
  
  const routes = createBrowserRouter([
    { path: '', element: <AuthLayout /> ,errorElement:<NotFound/>,
      children:[
        {index:true, element:<Login/>},
        {path:'login', element:<Login/>},
        {path:'register', element:<Register/>},
        {path:'forget-pass', element: <ForgetPass/>},
        {path:'reset-pass', element: <ResetPass/>},
        {path:'change-pass', element: <ChangePass/>}
      ]},
    {
      path: 'home',element: <ProtectedRoute><MasterLayout/></ProtectedRoute> ,
      errorElement:<NotFound/>,
      children: [
        {index:true, element:<Home/>}
      ]
    }
  ])

  return (
    <>
      <ToastContainer/>
      <RouterProvider router={routes} />

    </>
  )
}

export default App

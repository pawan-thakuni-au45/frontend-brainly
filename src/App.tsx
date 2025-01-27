
import './App.css'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Dashboard } from './Pages/Dashboard'
import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'

function App() {

 
  

  return (
   <>
   <BrowserRouter>
   <Routes>

    <Route path="/Signup" element={<Signup/>}>

      
    </Route>
    <Route path="/Signin" element={<Signin/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}> </Route>
   </Routes>
   
   
   </BrowserRouter>
   

     

  
    </>
  )
}

export default App

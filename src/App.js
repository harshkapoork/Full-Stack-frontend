
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
// components 
import { Home, Admin, Create, Contact, Onboard, Login, Signup, Forgetpassword } from './components/index';
import { app } from './config/firebase';
import {getAuth} from 'firebase/auth'
import { useEffect, useState } from 'react';

// components




function App() {
 
  const baseURL = https://full-stack-ce7x.onrender.com/
  console.log(baseURL)
  

  const [token, settoken] = useState("")
  const firebaseAuth= getAuth(app)
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth")==="true")
  const navigate=useNavigate()
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((res) => {
      // console.log(res)
      if ( res || window.localStorage.getItem("auth") === "true") {
        
        // console.log(res.accessToken)
      
      }
      else {
        navigate("/login",{replace:true})
      }



    })

 
   
  },[])



  return (
  
    <div className="App">
   
      {/* <Router> */}
      <Routes>
        {/*All the Routes to navigate from onne page tto another */}

        <Route path='/admin' element={<Admin />} />;
        <Route path='/post' element={<Create />} />;
        <Route path='/contact' element={<Contact />} />;
        <Route path='/signup' element={<Signup />} />;
        <Route path='/login'  setAuth={setAuth} element={<Login />}/>;
        <Route path='/reset' element={<Forgetpassword />} />;
        <Route path='/*' element={<Onboard />} />;
        <Route path='/' element={<Home />} />;
      
        {/*All the Routes to navigate from onne page tto another */}
        
  
    </Routes>

      {/* </Router> */}
     
    </div>
  );
}

export default App;

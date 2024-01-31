import React from "react"
import Homepage from "./Homepage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Createuser from "./Createuser"
import User from "./User"
import Editusers from "./Editusers"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="/" element= {<Createuser/>}></Route>
      <Route path="/users" element= {<User/>}></Route>
      <Route path="/edit/:index" element={<Editusers/>}/>
    </Routes>
    </BrowserRouter>
    
     
    </div>
  )
}

export default App

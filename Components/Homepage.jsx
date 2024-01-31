import React from 'react'
import style from "./home.module.css"
 import {Link} from "react-router-dom"



const Homepage = () => {
  return (
   <section id={style.nav}>
    <Link to="/">Create-Users</Link>
    <Link to="/users">Users</Link>
     {/* <a href="">Create-Users</a>
    <a href="">User</a> */}
   </section>
  )
}

export default Homepage

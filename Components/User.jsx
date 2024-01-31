import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./s.module.css"

const User = () => {
  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/content")
    .then((responce)=>{3
      setData(responce.data)
    })
    .catch(()=>{
    console.log("Didnt Get The Data");
    })
  },[])
  let deleteUser=(id)=>{
    axios.delete(`http://localhost:3000/content/${id}`)
    .then(()=>{console.log("Deleted");})
  .catch(()=>{console.log("Sorry");})
  window.location.assign(`/user`)
  }
  

  return (
    <div id={style.myUser}>
   {data.map((x)=>{
     return(
      <div id={style.cards}>
        <table>
          <tr>
            <th colSpan="2"><h4>Employee {x.id}</h4></th>
          </tr>
          <tr>
            <td>Name</td>
            <td>:{x.name}</td>
          </tr>
          <tr>
            <td>salary</td>
            <td>:{x.salary}</td>

          </tr>
          <tr>
            <td>company</td>
            <td>:{x.company}</td>
          </tr>
          <tr>
            <td><button><Link to ={`/edit/${x.id}`}>Edit</Link></button></td>


            <td><button onClick={()=>{deleteUser(x.id)}}> Delete</button></td>
          </tr>
        </table>
        </div>
     )
   })}
  </div>
  )}

export default User

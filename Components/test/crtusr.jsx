import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const crtusr = () => {
  
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let {index}=useParams()
    console.log(index)

    let navigate=useNavigate()

    let nameData=(e)=>{
      setName(e.target.value)
    }

    let salaryData=(e)=>{
      setSalary(e.target.value)

      let companyData=(e)=>{
        setCompany(e.target.value)
      }

      let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("website",payload)
        .then(()=>{
          console.log(dataget);
        })
        .catch(()=>{
          console.log(nodatafound);

        })
        navigate("/users")

      }
      return (
    

    <div id ={style.nav}>

      <table>

        <tr> 
          <th colSpan="2"><h4>userdetails</h4></th>

        </tr>
        <tr>
          <td><label>Name</label></td>
          <td>:<input type="text" value={name} onChange={nameData}/> </td>

        </tr>
        <tr>
          <td> <label>salary</label></td>
          <td> <input type="text" value={salary} onChange={salaryData} /> </td>

        </tr>
        <tr> <th colSpan="2"><button onClick={formhan
        }>submit</button></th></tr>
      </table>
      
    </div>
  )
}

export default crtusr


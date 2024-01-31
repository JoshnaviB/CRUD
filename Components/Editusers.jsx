import style from "./s.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Editusers = ()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")
    let {index}=useParams()
    console.log(index)

    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[])

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)

    }

    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    return(


<div id={style.myForm}>
        <table>
            <tr>
                <th colSpan="2"><h4>Update</h4></th>
            </tr>
            <tr>
              <td><label >Name</label></td>
                <td>:<input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
               <td><label >Salary</label></td>
                <td>:<input type="text" value={salary} onChange={salaryData}/></td>
            </tr>
            <tr>
              <td><label >Company</label></td>
            <td>:<input type="text" value={company} onChange={companyData} /></td>
            </tr>
       
        <tr><th colSpan="2"><button><h4>Update</h4></button></th>
        </tr>
        </table>
      {/* <h1>create here</h1> */}
    </div>
  
    )
}
export default Editusers
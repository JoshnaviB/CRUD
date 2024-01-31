import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Createuser=()=>{

let [name,setName]=useState("")
let [salary,setSalary]=useState("")
let [company,setCompany]=useState("")

let navigate=useNavigate()

let nameData=(e)=>{
  setName(e.target.value)
}
let salaryData=(e)=>{
  setSalary(e.target.value)
}
let companyData=(e)=>{
setCompany(e.target.value)
}

let formhandle=(e)=>{
  e.preventdefault()
  let payload={name,salary,company}
  axios.post('',payload)
  .then(()=>{
    console.log("data has been added");
  })
.catch(()=>{
console.log("Data not added");
})
navigate("/user")
}
  return(
    <div id ={style.Myform}>
    <table>
      <tr>
        <th colSpan="2"><h4>User Details</h4></th>
      </tr>
      <tr>
        <td><label>Name</label></td>
        <td> <input type="text" id="inp" value={name} onChange={nameData}/></td>
      </tr>
      <tr>
        <label>Salary</label>
        <input type="number" id="inp1" value={salary} onChange={salaryData} />
     </tr>
     <tr>
      <label>Company</label>
      <input type="text" id="inp2" value={company} onChange={companyData}/>
     </tr>
     <th colSpan="2"><button type={formhandle}>submit</button></th>
    </table>
    </div>
  )
}
export default Createuser
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
function StudentForm() {
   var[student,setStudent] = React.useState([])
  var studentform =  useFormik({
    initialValues:{
        firstname:"",
        lastname:"",
        gender:"",
        age:"",
        username:"",
        password:"",
    },
    validationSchema:Yup.object({
        // firstname:Yup.string().required("first name is required").min(2,"inka rai"),
        // lastname:Yup.string().required("lastname is required"),
        // password:Yup.string().required("password is required").matches( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"debbal padutai sariga rai")
        age:Yup.string().required("neeku pelli vadda").test({
            name:"GenderBasedAgeValidation",
            message:"inka age rale",
            test:(value,a)=>{
            //    console.log(a.parent)
            if(a.parent.gender==="male" && value<21){
                return false
            }
            if(a.parent.gender==="female" && value<18){
                return false
            }
            return true;
            }
        }),
        username:Yup.string().required("username rayu").test({
            name:"usernamevalidation",
            message:"user name already undi",
            test:(async(value,a)=>{
                var res=await axios.get(`https://jsonplaceholder.typicode.com/users?username=${value}`);
                if(res.data.length!==0){
                    return a.createError({message:"user  vere try cheyu"})
                }
                else{
                    return true
                }
            })
            
        })
    }),
    onSubmit:(values)=>{
        // console.log(values)
        setStudent([...student,values])
    }
  })
  return (
    <div className='mybox'>
        {/* {console.log(studentform.errors)} */}
        <h1>StudentForm</h1>
        <form onSubmit={studentform.handleSubmit}  >
            <input type="text" placeholder='firstname' name='firstname' onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                <b>{ studentform.touched.firstname && studentform.errors.firstname}</b>
            </div>
            <br />
            <input type="text" placeholder="lastname" name='lastname' onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                <b>{studentform.touched.lastname && studentform.errors.lastname}</b>
            </div>
            <br />
            <input type="radio" name='gender' value="male" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />:Male
            <input type="radio" name='gender' value="female" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />:Female
            <div>
                <b>{studentform.touched.lastname && studentform.errors.lastname}</b>
            </div>
            <br />
            <input type="text" placeholder='username' name='username'  onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                <b>{studentform.touched.username && studentform.errors.username}</b>
            </div>
            <br />
            <input type="text" placeholder='age' name='age' onChange={studentform.handleChange} />
            <br />
            <input type="text" placeholder='password' name="password" onChange={studentform.handleChange} onBlur={studentform.handleBlur} />
            <div>
                <b>{studentform.touched.password && studentform.errors.password}</b>
            </div>
            <button>AddStudent</button>
         </form>
         <ul style={{display:"flex",flexWrap:"wrap"}}>
            {
                student.map((x)=>{
                    return(
                       <li style={{listStyle:"none",padding:"10px",margin:"10px",border:"1px solid grey"}}>
                            <h3>{x.firstname}</h3>
                            <h3>{x.lastname}</h3>
                            <h3>{x.age}</h3>
                       </li>
                    )
                })
            }
         </ul>
    </div>
  )
}

export default StudentForm
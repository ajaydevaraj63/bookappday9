import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Register = () => {
      var[name,setName]=useState("")
      var[email,setEmail]=useState("")
      var[usname,setusName]=useState("")
      var[pswd,newPswd]=useState("")
      var[npswd,retPswd]=useState("")
      const datain=()=>{
            const data2={"name":name,"email":email,"username":usname,"password":pswd,"cpassword":npswd}
            console.log(data2)
      }
  return (
      
    <div> 
          <Nav/>
    <div class="container" >
<div class="row">
    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
          <div class="row g-5">
                <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                      <label for="" class="form-label"><b>name</b></label>
                      <input type="text" class="form-control"onChange={(e)=>{setName(e.target.value)}}/>
                </div>
              <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                <label for="" class="form-label"><b>email</b></label>
                <input type="email" class="form-control"onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
                <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                      <label for="" class="form-label"><b>username</b></label>
                      <input type="text" class="form-control"onChange={(e)=>{setusName(e.target.value)}}/>
                </div>
                
             
                   
              
                      <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                            <label for="" class="form-label"><b> new password</b></label>
                            <input type="password" class="form-control"onChange={(e)=>{newPswd(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                            <label for="" class="form-label"><b>retype password</b></label>
                            <input type="password" class="form-control"onChange={(e)=>{retPswd(e.target.value)}}/>
                      </div>
                      
                      <div class="col gx-4 col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="button" value="Register" class="btn btn-success"onClick={datain} />
                         
                      </div>
                      
                      <div class="col  col-12 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8">
                          
                           <Link to='/'> back to login</Link>
                      </div>
                      </div>
          </div>
    </div>
</div>
</div>
  )
}

export default Register
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Login = () => {
      var[usName,setusName]=useState("")
      var[pswd,setPswd]=useState("")
     const datain=()=>{
           
           const data={"username":usName,"password":pswd}
           console.log(data)
     }
  return (
    <div><Nav/>
          
          <div class="container" >
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                <div class="row g-5">
                      <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                            <label for="" class="form-label"><b>user name</b></label>
                            <input type="text" class="form-control"onChange={(e)=>{setusName(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                            <label for="" class="form-label"><b>password</b></label>
                            <input type="password" class="form-control"onChange={(e)=>{setPswd(e.target.value)}}/>
                      </div>
                      
                      <div class="col gx-4 col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6" >
                      <button onClick={datain}><Link to='/a' className='btn btn-success'><b>login</b></Link></button>

                         
                      </div>
                      <div class="col  col-12 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-xxl-8">
                          
                            <Link to='/R'>new user click here</Link>
                           
                      </div>
                </div>
          </div>
    </div>
    </div></div>
  )
}

export default Login
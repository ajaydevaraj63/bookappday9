import React, { useState } from 'react'
import Nav2 from './Nav2'

const Add = () => {
      var[name,setbkName]=useState("")
      var[author,setAuthr]=useState("")
      var[price,setprice]=useState("")
      const datain=()=>{
            const data={"name":name,"emauthorName":author,"price":price}
            console.log(data)
      }
  return (
    <div> <Nav2/> <div class="container" >
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">
                <div class="row g-5">
                      <div class="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label"><b>book name</b></label>
                            <input type="text" class="form-control"onChange={(e)=>{setbkName(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label"><b>author</b></label>
                            <input type="password" class="form-control"onChange={(e)=>{setAuthr(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-md-10 col-sm-10 col-lg-10 col-xl-10 col-xxl-10">
                            <label for="" class="form-label"><b>price</b></label>
                            <input type="text" class="form-control"onChange={(e)=>{setprice(e.target.value)}}/>
                      </div>
                     
                      <div class="col gx-4 col-12 col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6">
                            <input type="button" value="submit" class="btn btn-success"onClick={datain} />
                         </div>
                     
                </div>
          </div>
    </div>
    </div></div>
  )
}

export default Add
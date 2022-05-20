import React from 'react'
import { Link } from 'react-router-dom'
import Nav2 from './Nav2'

const View = () => {
  return (
    <div>
          <Nav2/>
          <table class="table">
    <thead>
      <tr>
        <th scope="col">no</th>
        <th scope="col"><b>book name</b></th>
        <th scope="col"><b>author name</b></th>
        <th scope="col"><b>price</b></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>999</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>1200</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >Larry the Bird</td>
        <td>Thornton</td>
        <td>349</td>
      </tr>
    </tbody>
  </table>  
  <div class='row g-3 col-12 col-lg-12'>     <button ><Link to='/' className='btn btn-success'><b>login</b></Link></button>
</div>  
  </div>
  )
}

export default View
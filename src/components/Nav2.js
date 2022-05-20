import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div> <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to='/v'>view</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to='/a'>add</Link>
          </li>

        </ul>
      
      </div>
    </div>
  </nav></div>
  )
}

export default Nav2
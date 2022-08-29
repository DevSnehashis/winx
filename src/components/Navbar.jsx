import React from 'react'

const Navbar = () => {
  return (
    <div className='header'>
      <img className='logo' src="/assets/log.png" alt="" />
      <div className="navbar">
        <a href="#">About</a>
        <a href="#">Book now</a>
        <h3 className='log'>Wnix</h3>
        <a href="#">Reviews</a>
        <a href="#">Contact</a>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa fa-user" aria-hidden="true"></i>  Profile
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"><i class="fa fa-check-circle" aria-hidden="true"></i>  Register as Chef</a></li>
          <li><a class="dropdown-item" href="#"><i class="fa fa-cutlery" aria-hidden="true"></i>  Book a Cook</a></li>
          <li><a class="dropdown-item" href="#"><i class="fa fa-user-times" aria-hidden="true"></i> Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
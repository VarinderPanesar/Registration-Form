import React from 'react';
import pern_logo from './assets/pics/pernlogo.png';
export default function Navbar() {
  return (
  
    <>
   <section className="nav-bar">
    <nav>
    <img src={pern_logo} alt="" className="main-logo" />

    <ul>
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">Contact Us</a></li> */}
    </ul>


    </nav>
    </section>

    <section className="banner-wrapper">
        <h2>Register Now</h2>
    </section>

    </>
      

  )
}

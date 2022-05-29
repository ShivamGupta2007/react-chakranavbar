import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div >
        <div className='container'>
        <h1 className='h1'>Logo</h1>
        <h3 className='h3'>Inspiration</h3>
        <h3 className='h3'>Find Work</h3>
        <h3 className='h3'>Learn Design</h3>
        <h3 className='h3'>Hire Designers</h3>
        <h3 className='Sign'>Sign In</h3>
        <button className='button'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
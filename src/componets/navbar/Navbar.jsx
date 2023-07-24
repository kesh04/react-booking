// import React, { useState } from 'react'
 import "./Navbar.css"
const Navbar = () => {

  // const [openDate, setOpenDate] = useState(false);
  // const [openOption, setOpenOption] = useState(false)

  // const handleDateClick = () => {
  //   setOpenDate(!openDate);
  // };

  // const handleOptionClick = () => {
  //   setOpenOption(!openOption);
  //   setOpenDate(false);
  // };
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">
                Keshbooking.com
            </span>
            <div className="navItems">
              <button className='navButton'>Register</button>
              <button className='navButton'>Login</button>
            </div>
        </div>
  
    </div>

    // <div>
    //      <button onClick={handleDateClick}>Toggle Date</button>
    //   <button onClick={handleOptionClick}>Toggle Option</button>
    //   <p>openDate: {openDate ? "true" : "false"}</p>
    //   <p>openOption: {openOption ? "true" : "false"}</p>
    // </div>
  )
}

export default Navbar

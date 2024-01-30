import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilter } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";

const Navbar = ({ bgColor, color, toggleButton,toggle }) => {
  const bgcolor = color == "black"?"#cbc5c5":"black"
  return (
    <>
    <div className="nav_bar flex items-center justify-between px-4" style={{
        backgroundColor:`${bgcolor}`
      }}>
        <div className="logo flex items-center justify-around"  style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}>LOGO 
          <div onClick={toggleButton}>
            {toggle ? (
              <BsToggle2On />
            ):(<BsToggle2Off/>)}
          </div>
           </div>
        <div className="search flex items-center justify-between"  style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}>
            <div className="left flex items-center ">{""}<FcSearch className='mx-2'/>Search here</div>
            <div className="right flex items-center"><IoFilter className='mx-2' />Filter</div>
        </div>
        <div className="seller"  style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
          }}>Become a seller</div>
    </div>
    </>
  )
}

export default Navbar
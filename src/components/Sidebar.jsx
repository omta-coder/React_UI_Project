import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBagShopping } from "react-icons/fa6";
import { IoIosChatboxes } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

const Sidebar = ({bgColor, color}) => {
  return (
    <>
    <div className="side_bar_content flex justify-between flex-col" style={{
        backgroundColor:`${bgColor}`,
        color:`${color}`
      }}>
        <div className="top_content">
            <div className="items flex items-center"><FaHome className="icons" />Home</div>
            <div className="items flex items-center"><IoIosNotifications className="icons" />Notification</div>
            <div className="items flex items-center"><FaBagShopping className="icons" />Shop</div>
            <div className="items flex items-center"><IoIosChatboxes className="icons" />Conversation</div>
            <div className="items flex items-center"><FaWallet className="icons" />Wallet</div>
            <div className="items flex items-center"><FaYoutube className="icons" /> Subscription</div>
            <div className="items flex items-center"><CgProfile className="icons" />My Profile</div>
        </div>
        <div className="bottom_content flex items-center"><RiLogoutBoxFill className="icons" />Log Out</div>
    </div>
    </>
  )
}

export default Sidebar
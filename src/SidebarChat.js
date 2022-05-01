import React from 'react'
import './SidebarChat.css'
import {Avatar} from "@mui/material"

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className="sidebarchat-info">
          <h2>Chat 01</h2>
          <p>last message</p>
        </div>
    </div>
  )
}

export default SidebarChat
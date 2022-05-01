import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar, IconButton} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <Avatar src='https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/2021-Best-Latest-Whatsapp-Dp-Profile-Images-pics.gif'/>
            <div className="sidebar-headerRight">
                <IconButton>
                    <DonutLargeIcon className='MuiSvgIcon-root'/>
                </IconButton>
                <IconButton>
                    <ChatIcon className='MuiSvgIcon-root'/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon className='MuiSvgIcon-root'/>
                </IconButton>
                
            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-searchContainer">
                <SearchIcon className='MuiSvgIcon-search'/>
                <input type='text' id="searchInput" placeholder='Search or Start new Chat'/>
            </div>
        </div>
        <div className="sidebar-chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar
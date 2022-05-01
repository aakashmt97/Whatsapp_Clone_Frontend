import { Avatar, IconButton } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react'
import './Chat.css'

function Chat() {
  return (
    <div className='chat'>
      <div className="chat-header">
        <Avatar />
        
        <div className="chat-headerInfo">
          <h3>Chat 01</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat-headerRight">
          <IconButton>
            <SearchIcon className='MuiSvgIcon-search'/>
          </IconButton>
          <IconButton>
            <AttachFileIcon className='MuiSvgIcon-root'/>
          </IconButton>
          <IconButton>
              <MoreVertIcon className='MuiSvgIcon-root'/>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className='chat-message'>
          <span className="chat-name">Aakash</span>
          This is message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className='chat-message chat-receiver'>
          <span className="chat-name">Aakash</span>
          This is message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className='chat-message'>
          <span className="chat-name">Aakash</span>
          This is message
          <span className="chat-timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat-footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder='Type a message' />
          <button type='sumit'></button>
        </form>
        <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
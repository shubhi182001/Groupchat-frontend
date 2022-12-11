import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
const Chat = () => {
  return (
    <div className='chat'>
       <div className="chat-header">
        <Avatar/>
        <div className="chat-headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ..</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlinedIcon/>
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon/>
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon/>
          </IconButton>
        </div>
       </div>
       <div className="chat-body">
        <p className='chat-message'>
          <span className="chat-name">
            Sonny
          </span>
          This is a message
          <span className="chat-timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className=' chat-message chat-reciever'>
          <span className="chat-name">
            Sonny
          </span>
          This is a message
          <span className="chat-timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
        <p className='chat-message'>
          <span className="chat-name">
            Sonny
          </span>
          This is a message
          <span className="chat-timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
       </div>
       <div className="chat-footer">
          <InsertEmoticonIcon/>
           <form>
            <input type="text" placeholder='Type a message' />
            <button type='submit'>Send a message</button>
           </form>
          <MicNoneOutlinedIcon/>
       </div>
    </div>
  )
}

export default Chat
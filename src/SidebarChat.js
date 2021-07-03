import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css';

function SidebarChat() {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarchat_info">
          <h2>ROOM NAME</h2>
          <p> The last message in that room</p>
      </div>
    </div>
  );
}

export default SidebarChat;

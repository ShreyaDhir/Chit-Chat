import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
          <Avatar src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"/>
      <div className='sidebar_headerRight'>
        <IconButton>
    <DonutLargeIcon/>
    </IconButton>
    <IconButton>
    <MessageIcon />
    </IconButton>
    <IconButton>
    <MoreVertIcon />
    </IconButton>
      </div>
     </div>
     <div className="sidebar_search">
         <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
         </div>

     </div>
     <div className="sidebar_chats">
     <SidebarChat />
     <SidebarChat />
     <SidebarChat />
     </div>
    </div>
  );
}

export default Sidebar;

import { Button } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from "react-redux"
import { openSendMessage } from './features/mailSlice';


const Sidebar = () => {

  const dispatch = useDispatch()

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose</Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={99} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={99} />
      <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" number={99} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={99} />
      <SidebarOption Icon={SendIcon} title="Sent" number={99} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={99} />

      <SidebarOption Icon={ExpandMoreIcon} title="More" number={99} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

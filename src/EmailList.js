import React, { useState, useEffect } from 'react'
import { Checkbox, IconButton, Tooltip } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsIcon from '@material-ui/icons/Settings';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import "./EmailList.css"
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

const EmailList = () => {

  const [emails, setEmails] = useState([])

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", 'desc')
      .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))))

  }, [])

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Tooltip title="select">
            <Checkbox />
          </Tooltip>
          <Tooltip title="select">
            <IconButton className="emailList__dropdown">
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh">
            <IconButton>
              <RedoIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="More">
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className="emailList__settingsRight">
          <Tooltip title="Older">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Newer">
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <Tooltip title="Settings">
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#5F6368" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__List">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}

      </div>
    </div>
  )
}

export default EmailList

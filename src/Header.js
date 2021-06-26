import React from 'react'
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })

  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://res.cloudinary.com/dz4tt9omp/image/upload/v1623934928/gmail_logo_PNG13.png" alt="Gmail Image" />
      </div>

      <div className="header__center">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDownwardIcon className="header__inputCaret" />
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        {/* <Avatar onClick={signOut} src={user?.photoUrl} /> */}
        <IconButton onClick={signOut}>
          <img className="img" src={user?.photoUrl} width="32" height="32" alt={<Avatar />} />
        </IconButton>
      </div>

    </div>
  )
}

export default Header

import React, { useState } from 'react'

import SailingIcon from '@mui/icons-material/Sailing';
import SearchBar from './SearchBar';
import Icons from './Icons';
import { AppBar, Avatar, Badge, Box, Divider, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Tooltip, Typography, styled } from '@mui/material'
// Icons
import { Notifications, Mail, Logout, Settings, PersonAdd } from '@mui/icons-material';

import navbarStyle from '../styles/Navbar';

const StyledToolbar = styled(Toolbar)({
   display: "flex",
   justifyContent: "space-between"
})

function Navbar() {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography sx={navbarStyle.title} variant="h6">Sodia</Typography>
            <SailingIcon sx={navbarStyle.logo} />

            <SearchBar > Search</SearchBar>
            <Icons >
               <Badge badgeContent={4} color="error">
                  <Mail />
               </Badge>
               <Badge badgeContent={2} color="error">
                  <Notifications />
               </Badge>

               <Tooltip title="Account settings">
                  <IconButton
                     onClick={handleClick}
                     size="small"
                     sx={{ ml: 2 }}
                     aria-controls={open ? 'account-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                  >
                     <Avatar sx={{ width: "2rem", height: "2rem" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  </IconButton>
               </Tooltip>
            </Icons>
            <Menu
               anchorEl={anchorEl}
               id="account-menu"
               open={open}
               onClose={handleClose}
               onClick={handleClose}
               PaperProps={{
                  elevation: 0,
                  sx: {
                     overflow: 'visible',
                     filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                     mt: 1.5,
                     '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                     },
                     '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                     },
                  },
               }}
               transformOrigin={{ horizontal: 'right', vertical: 'top' }}
               anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
               <MenuItem>
                  <Avatar /> Profile
               </MenuItem>
               <MenuItem>
                  <Avatar /> My account
               </MenuItem>
               <Divider />
               <MenuItem>
                  <ListItemIcon>
                     <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
               </MenuItem>
               <MenuItem>
                  <ListItemIcon>
                     <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
               </MenuItem>
               <MenuItem>
                  <ListItemIcon>
                     <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
               </MenuItem>
            </Menu>
         </StyledToolbar>
      </AppBar>
   )
}

export default Navbar
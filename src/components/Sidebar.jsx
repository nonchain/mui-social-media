import React from 'react'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Pages, Home, Group, Store, Groups, Settings, AccountCircle, ModeNight, Brightness5 } from '@mui/icons-material'

function Sidebar({ setMode, mode }) {
   return (
      <Box flex={1.5} sx={{ display: { xs: "none", sm: "block" } }} p={2} bgcolor="background.default" color="text.secondary">
         <Box position="fixed">
            <nav aria-label="main mailbox folders">
               <List>
                  <ListItem disablePadding>
                     <ListItemButton component="a" href="#home">
                        <ListItemIcon >
                           <Home color='#f00' />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <Pages />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <Groups />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <Store />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <Group />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                     </ListItemButton>
                  </ListItem>
               </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
               <List>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                     </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding >
                     <ListItemButton sx={{ display: "flex", justifyContent: "space-between" }}>
                        <ListItemIcon>
                           {mode === "light" ? <ModeNight /> : <Brightness5 />}
                        </ListItemIcon>
                        <Switch color="secondary" onClick={() => setMode(mode === "light" ? "dark" : "light")} />
                     </ListItemButton>
                  </ListItem>
               </List>
            </nav>
         </Box>
      </Box>
   )
}

export default Sidebar
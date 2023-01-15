import React from 'react'
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'

function Discover() {
   return (
      <Box
         flex={2}
         p={2}
         sx={{ display: { xs: "none", sm: "block" } }}
         bgcolor="background.default" 
         color="text.secondary"
      >
         <Box position="fixed">
            <Typography component="h6" fontFamily="Josefin Sans" fontSize="24px" >
               Online People
            </Typography>
            <AvatarGroup max={4} sx={{ margin: "0.5rem 0 1.25rem" }}>
               <Avatar alt="Remy Sharp" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" />
               <Avatar sx={{ backgroundColor: "#2867e1" }}>A</Avatar>
               <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvy4i1DSS4rKalGOgSMqarMQgZSIYRuysxUfJ8-GnSDaY0ipcnQuOYOOKExft2pNHkLNw&usqp=CAU" />
               <Avatar alt="Cindy Baker" src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427" />
               <Avatar alt="Agnes Walker" src="https://shayarimaza.com/files/boys-dp-images/sad-boy-dp-images/Sad-boy-Profile-Pic.jpg" />
            </AvatarGroup>
         </Box>
      </Box>
   )
}

export default Discover
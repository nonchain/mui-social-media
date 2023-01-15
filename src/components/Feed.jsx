import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Favorite, MoreVert, Share } from '@mui/icons-material'

function Feed() {
   return (
      <Box 
      flex={6}
         p={2}
         sx={{
            display: "grid",
            gap: {
               xs: "1rem",
               sm: "1.5rem"
            },
            gridTemplateColumns: { xs: "1fre", sm: "1fr 1fr" }
         }}
         bgcolor="background.paper"
      >
         <Card>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                     R
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVert />
                  </IconButton>
               }
               title="Funny food for weekend"
               subheader="September 14, 2022"
            />
            <CardMedia
               component="img"
               height="198"
               image="https://i1.delgarm.com//images/news/a798/1398/09/06/b/1574839454_A8yJ4.jpg"
               alt="Paella dish"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <Favorite />
               </IconButton>
               <IconButton aria-label="share">
                  <Share />
               </IconButton>
            </CardActions>
         </Card>
         <Card>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                     R
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVert />
                  </IconButton>
               }
               title="Alone tree"
               subheader="AUgust 04, 2022"
            />
            <CardMedia
               component="img"
               height="198"
               image="https://cdn.mashreghnews.ir/d/2020/02/16/4/2718373.jpg"
               alt="Paella dish"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <Favorite />
               </IconButton>
               <IconButton aria-label="share">
                  <Share />
               </IconButton>
            </CardActions>
         </Card>
         <Card>
            <CardHeader
               avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                     R
                  </Avatar>
               }
               action={
                  <IconButton aria-label="settings">
                     <MoreVert />
                  </IconButton>
               }
               title="Lamborghini"
               subheader="January 09, 2022"
            />
            <CardMedia
               component="img"
               height="198"
               image="https://setare.com/files/fa/news/1399/4/29/371883_797.jpg"
               alt="Paella dish"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook
                  together with your guests. Add 1 cup of frozen peas along with the mussels,
                  if you like.
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                  <Favorite />
               </IconButton>
               <IconButton aria-label="share">
                  <Share />
               </IconButton>
            </CardActions>
         </Card>
      </Box>
   )
}

export default Feed
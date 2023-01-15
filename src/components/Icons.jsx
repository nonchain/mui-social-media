import React from 'react'
import { Box, styled } from "@mui/material";

export const IconsWrapper = styled(Box)(({ theme }) => ({
   display: "flex",
   gap: "1.5rem",
   alignItems: "center"
}));

function Icons({children}) {
  return (
    <IconsWrapper>
      {children}
    </IconsWrapper>
  )
}

export default Icons
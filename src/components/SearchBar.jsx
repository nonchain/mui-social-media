import React from 'react';
import { InputBase, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
   padding: "0.25rem 0.75rem",
   width: "40%",
   backgroundColor: theme.palette.background.default,
   borderRadius: theme.shape.midRadius
})) 


function SearchBar() {
  return (
    <Search>
      <InputBase placeholder="Search ..."></InputBase>
    </Search>
  )
}

export default SearchBar
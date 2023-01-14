import React from 'react'

import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Discover from './components/Discover'
import { Box, Stack } from '@mui/material'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Stack direction="row">
        <Sidebar />
        <Feed />
        <Discover />
      </Stack>
    </React.Fragment>
  )
}

export default App

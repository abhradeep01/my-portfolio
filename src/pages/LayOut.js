import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

function LayOut() {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default LayOut;
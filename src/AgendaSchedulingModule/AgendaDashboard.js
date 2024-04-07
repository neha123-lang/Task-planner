import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import AgendaScheduling from './AgendaScheduler/AgendaScheduling'
const AgendaDashboard = () => {
  return (
    <div> <Navbar>
    <Nav>
< Nav.Link as={NavLink} to={"/AgendaScheduling"} >Enter Event</Nav.Link>
< Nav.Link as={NavLink} to={"/TimeTable"} >Time Table</Nav.Link>

</Nav></Navbar>
</div>
  )
}

export default AgendaDashboard
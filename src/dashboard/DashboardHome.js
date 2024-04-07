import React from 'react'
import { DashboardResponse } from './DashboardResponse'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './Dashboard.css'
const DashboardHome = () => {

  return (
    <div>DashboardHome

<div>
    <p>Recent items </p>
    <p> click again to open them </p>
    <div className='recent-item'>
{DashboardResponse.map((e,i)=>{
    return(
        <div className='recent-item-card'>

<Navbar><Nav>
              < Nav.Link as={NavLink} to={e.path} >{e.name}</Nav.Link>


            </Nav></Navbar>

            </div>
    )
})
}
</div>
</div>





<p> for the fotter items </p>
{/* for footer items */}
{DashboardResponse.map((e,i)=>{
    return(
        <div>

<Navbar><Nav>
              < Nav.Link as={NavLink} to={e.path}>{e.name}</Nav.Link>


            </Nav></Navbar>

            </div>
    )
})
}


    </div>
  )
}

export default DashboardHome
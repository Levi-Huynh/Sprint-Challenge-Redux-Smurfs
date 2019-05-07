import React from "react";
import { NavLink } from 'react-router-dom'

export default props => {
  return (
   
      <div className='navbar'>
        <ul>
          <li>
            <NavLink exact activeClassName="activeNavButton" to='/'><button>Smurf List</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/SmurfForm'><button>Add a Smurf Form</button></NavLink>
            <NavLink exact activeClassName="activeNavButton" to='/UpdateSmurf'><button>Update Smurf Form</button></NavLink>
          </li>
        </ul>
      </div>
   
  )
}


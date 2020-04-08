import React from 'react'
import UserItem from './UserItem'
import './UsersList.css'
import Users from '../pages/User'

const UsersList = props => {
  if(props.items.length === 0){
    return(
      <div className="center">
        <h2>No users found</h2>
      </div>

    )
  }

  return(
    <ul>
      {props.items.map(user => 
        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCoount={user.places]/> 
      )}
    </ul>
  )
}

export default UsersList
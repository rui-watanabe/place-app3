import React from 'react'

import './UsersList.css'

const UsersList = props => {
  if(props.item.length === 0){
    return(
      <div className="center">
        <h2>No, </h2>
      </div>

    )
  }
}

export default UsersList
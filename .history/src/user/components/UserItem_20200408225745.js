import React from 'react'
import './UserItem'

const UserItem = props => {
  return(
    <li className='user-item'>
      <div className='user-item__content'>
        <div className='user-item__image'>
          <img src={props.image} alt=''
        </div>
      </div>
    </li>
  )
}

export default UserItem
import React from 'react'
import './UserItem'

const UserItem = props => {
  return(
    <li className='user-item'>
      <div className='user-item__content'>
        <div className='user-item__image'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='user-item__info'>
  <h2>{props.}</h2>
        </div>
      </div>
    </li>
  )
}

export default UserItem
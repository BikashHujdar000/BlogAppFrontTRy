import React, { useContext } from 'react'
import Base from '../Components/Base'
import userContext from '../Context/userContext'

const UserProfile = () => {

  const user = useContext(userContext)
  return (
    <div>


      <Base>

        <h3>Welcome Mr.{user.name}</h3>




      </Base>


    </div>
  )
}

export default UserProfile

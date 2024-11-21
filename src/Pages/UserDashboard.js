import React from 'react'
import Base from '../Components/Base'
import Post from '../Components/Post'
import { Container } from 'reactstrap'

const UserDashboard = () => {

  
  return (
    <div>


      <Container>


        {/* // checking the login in dateails is in the nav bar so i  hvae to use this in all section  */}
        <Base>



          <Post></Post>


        </Base>


      </Container>


    </div>
  )
}

export default UserDashboard

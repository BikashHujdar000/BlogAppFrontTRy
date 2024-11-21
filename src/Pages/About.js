import React from 'react'
import Base from '../Components/Base'
import { Container } from 'reactstrap'
import userContext from '../Context/userContext'

const About = () => {
  return (
    <div>


      <userContext.Consumer>

        {(user) => (
          <Base>

            <h1> This is about page </h1>
            <h1> This is about page </h1>

            <h1> Welcoane user : {user.name}
            </h1>

          </Base>

        )}










      </userContext.Consumer>



    </div>
  )
}

export default About

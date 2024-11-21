import React, { useState } from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { toast } from 'react-toastify'
import { login } from '../Services/userService'
import { doLogin } from '../Authentication/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {



  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({

    errorObj: {},
    isError: false
  })


  const handleOnChange = (event, property) => {


    let changedValue = event.target.value

    setLoginDetail({
      ...loginDetail,
      [property]: changedValue
    })
  }

  const handleReset = () => {
    setLoginDetail({
      email: "",
      password: ""
    })
  }

  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail)
    if (loginDetail.email == "") {
      toast.error("Email is required")
      return;
    }

    // lets submit data now 
    login(loginDetail).then((tokenData) => {
      console.log(tokenData);
      setLoginDetail({
        email: "",
        password: ""
      })
      toast.success("Login Successfull")

      // set the data token ion data
      doLogin(tokenData, () => {
        console.log("Login details is saved ")
      })

      // redirect in the  dash board now 


      navigate("/user/dashboard"); // Absolute path, correct redirect




    }).catch((error) => {

      console.log(error)
      setError({
        errorObj: error,
        isError: true
      })

      toast.error(error.response?.data?.message)

    })






  }

  return (
    <div>

      <Base>


        <Container>

          <Row>


            <Col sm={
              {
                size: 6,
                offset: 3
              }

            } >
              <Card>
                <CardHeader>
                  <h3 className='text-center'>Login here</h3>

                  <CardBody>

                    <form onSubmit={handleFormOnSubmit}>

                      <FormGroup>

                        <Label for="email">Enter Email

                        </Label>
                        <Input type='email' placeholder='Enter email'
                          id='email'
                          value={loginDetail.email}
                          onChange={
                            (event) => handleOnChange(event, "email")
                          }
                        >
                        </Input>

                      </FormGroup>


                      <FormGroup>

                        <Label for="Password">Enter Password

                        </Label>
                        <Input type='Password'
                          id='Password'
                          value={loginDetail.password}

                          onChange={
                            (event) => handleOnChange(event, "password")
                          }

                        >

                        </Input>

                      </FormGroup>


                      <Container className="text-center">
                        <Button color="primary">Login</Button>
                        <Button onClick={handleReset}
                          color="secondary" type="reset" className="ms-2"> Reset</Button>

                      </Container>


                    </form>




                  </CardBody>
                </CardHeader>
              </Card>


            </Col>

          </Row>

        </Container>


      </Base>

    </div>
  )
}

export default Login

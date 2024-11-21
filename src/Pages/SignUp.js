import React, { useEffect, useState } from "react";
import Base from "../Components/Base";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormFeedback, FormGroup, Input, Row } from "reactstrap";
import { signUp } from "../Services/userService";
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const SignUp = () => {


  const navigate = useNavigate();


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: ""

  })

  const [error, setEroor] = useState({
    errorsObj: {},
    isError: false
  })


  const resetData = () => {

    setData({
      name: "",
      email: "",
      password: "",
      about: ""


    })

  }

  // lets handle change here 


  const submitForm = (event) => {

    event.preventDefault();
    //data validation 
    // call server api for sendin  the data 
    console.log(data)

    // okay  hits the api now 
    signUp(data).then((resp) => {
      console.log(resp)
      console.log("SucessLog")
      toast.success("User Registered Sucessfully")

      navigate("/login");

      setData({
        name: "",
        email: "",
        password: "",
        about: ""
      })



    })
      .catch((error) => {
        console.log(error)
        console.log("error toast ")
        toast.error(error.response?.data?.message)
        setEroor({
          errorsObj: error,
          isError: true
        })


      })



  }



  const handleChange = (event, property) => {


    setData({
      ...data,
      [property]: event.target.value

    })

  };


  return (
    <div>


      <Base>
        <Container>




          <Row>

            <Col sm={{ size: 6, offset: 3 }} >

              <Card>

                <CardHeader>
                  <h3 className="text-center">Register Now  </h3>

                </CardHeader>

                <CardBody>
                  {/* // lets makee an body  */}

                  <Form onSubmit={submitForm}>
                    <FormGroup>
                      <label for="name" >Enter name</label>
                      <Input type="text" placeholder="Enter your name " id="name"
                        onChange={(event) => handleChange(event, "name")}
                        value={data.name}
                        invalid={error.errorsObj?.response?.data?.name ? true : false}

                      ></Input>
                      <FormFeedback className="pd-2">
                        {error.errorsObj?.response?.data?.name}
                      </FormFeedback>

                    </FormGroup>
                    <FormGroup>
                      <label for="email" >Enter email</label>
                      <Input type="email" placeholder="Enter your email " id="email"
                        onChange={(event) => handleChange(event, "email")}
                        value={data.email}
                        invalid={error.errorsObj?.response?.data?.email ? true : false}
                      ></Input>
                      <FormFeedback>
                        {error.errorsObj?.response?.data?.email}
                      </FormFeedback>

                    </FormGroup>
                    <FormGroup>
                      <label for="password" >Enter password</label>
                      <Input type="password"
                        id="password"
                        onChange={(event) => handleChange(event, "password")}
                        value={data.password}
                        invalid={error.errorsObj?.response?.data?.password ? true : false}

                      ></Input>

                      <FormFeedback>
                        {error.errorsObj?.response?.data?.password}
                      </FormFeedback>

                    </FormGroup>
                    <FormGroup>
                      <label for="about" >Describe yourself</label>
                      <Input type="textarea" placeholder="describe yourself " id="about"
                        onChange={(event) => handleChange(event, "about")}
                        value={data.about}
                      ></Input>

                    </FormGroup>


                    <Container className="text-center">
                      <Button color="primary">Register</Button>
                      <Button

                        onClick={resetData}
                        color="secondary" type="reset"

                        className="ms-2"


                      > Reset</Button>

                    </Container>
                  </Form>

                </CardBody>
              </Card>
            </Col>

          </Row>


        </Container>

      </Base>


    </div>
  );
};

export default SignUp;

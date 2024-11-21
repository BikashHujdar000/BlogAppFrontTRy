import React, { useEffect, useState } from 'react'
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { getCurrentUser, isLoggedIn, logOut } from '../Authentication/auth';





const Comstomnav = () => {


  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  // yaha pe user details nikalunga 


  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {



    setLogin(isLoggedIn());

    setUser(getCurrentUser());

    console.log("login pe kya hain ")
    console.log(login);

    console.log("user pe kya hain ")
    console.log(user);





  }, [login])


  const handleLogout = () => {
    logOut(() => {
      navigate("/")
    })



  }




  return (
    <div>

      <div>
        <Navbar
          color="light" light expand="md"
          className='px-5'>

          <NavbarBrand href="/">Blogs</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>

            <Nav className="me-auto" navbar>


              <NavItem>
                <NavLink tag={ReactLink} to="/news"   >NewsFeed</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/"   >Home</NavLink>
              </NavItem>



              <NavItem>
                <NavLink tag={ReactLink} to="/about"   >About</NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={ReactLink} to="/"   >Service</NavLink>
              </NavItem>







              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Contact</DropdownItem>
                  <DropdownItem>Career</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Information</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>

            <Nav navbar>

              {
                login && (
                  <>

                    <NavItem >
                      <NavLink tag={ReactLink} to="/user/dashboard"   >
                        UserProfile
                      </NavLink>
                    </NavItem>




                    {/* // name set garna double check garum */}
                    {user && user.userDto && (
                      <NavItem>
                        <NavLink tag={ReactLink} to="/user/profile"
                        >{user.userDto.name}</NavLink>
                      </NavItem>
                    )}


                    <NavItem >
                      <NavLink onClick={handleLogout}>
                        Logout
                      </NavLink>
                    </NavItem>



                  </>
                )
              }


              {
                !login && (
                  <>
                    <NavItem>
                      <NavLink tag={ReactLink} to="/signup">
                        Signup
                      </NavLink>
                    </NavItem>


                    <NavItem>
                      <NavLink tag={ReactLink} to="/login">
                        Login
                      </NavLink>
                    </NavItem>

                  </>
                )
              }








            </Nav>

          </Collapse>
        </Navbar>
      </div>


    </div>
  )
}

export default Comstomnav

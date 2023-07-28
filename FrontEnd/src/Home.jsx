import React from 'react';
import Profile from './Avatar';
import { Navbar, Nav, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBNavbarLink } from 'mdb-react-ui-kit';

export default function Home() {
  const { loggedIn } = useSelector((state) => state.case.case);
  console.log(loggedIn);
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Link to={"/"}><Navbar.Brand href="#home" style={{ color: 'white', marginLeft: '-50px' }}>REDEEM</Navbar.Brand></Link>
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle style={{ backgroundColor: 'transparent', marginLeft: '60px' }} id="dropdown-basic" className='shadow-none'>
                Report As
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ left: '5%' }}>
                <Dropdown.Item ><Link to={"/info"} style={{ color: 'black' }}>Anonymous User</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>Known User</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <MDBCollapse navbar>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <Link to={"/feed"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px', marginTop: '39px' }}>FeedBack</MDBNavbarLink></Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <MDBCollapse navbar>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <Link to={"/chat"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px', marginTop: '39px' }}>Chat</MDBNavbarLink></Link>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
            <Nav.Link href="#features" style={{ color: 'white', marginLeft: '100px' }}></Nav.Link>
          </Nav>
          <Profile />
        </Container>
      </Navbar>

    </div>
  );
}

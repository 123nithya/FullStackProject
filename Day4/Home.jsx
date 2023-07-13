import React from 'react';
import Profile from './Avatar';
import { Navbar, Nav, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white', marginLeft: '-50px' }}>REDEEM</Navbar.Brand>
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
            <Dropdown>
              <Dropdown.Toggle style={{ backgroundColor: 'transparent' }} id="dropdown-basic" className='shadow-none'>
                Report Cyber Crime
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ left: '5%' }}>
                <Dropdown.Item ><Link to={"/info"} style={{ color: 'black' }}>Personal Crimes</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>Property Crimes</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>Hate Crimes</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>White-Collar Crimes</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>Crimes Against Morality</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item ><Link to={"/form"} style={{ color: 'black' }}>Others</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#features" style={{ color: 'white', marginLeft: '100px' }}></Nav.Link>
          </Nav>
          <Profile />
        </Container>
      </Navbar>

    </div>
  );
}

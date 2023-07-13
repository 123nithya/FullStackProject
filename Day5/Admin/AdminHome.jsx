import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function AdminHome() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' style={{ color: 'white', marginLeft: '50px' }}>REDEEM</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#' style={{ color: 'white', marginLeft: '60px' }}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={"/dash"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>DashBoard</MDBNavbarLink></Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{ color: 'white', marginLeft: '60px' }}>
                                    Records
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Action</MDBDropdownItem>
                                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Search...' aria-label='Search' />
                        <MDBBtn color='white' className='shadow-none'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
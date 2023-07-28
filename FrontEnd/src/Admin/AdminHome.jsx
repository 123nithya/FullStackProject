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
                <Link to={"/"}><MDBNavbarBrand href='#' style={{ color: 'white', marginLeft: '50px' }}>REDEEM</MDBNavbarBrand></Link>

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
                            <MDBNavbarLink active aria-current='page' href='http://localhost:3000/home' style={{ color: 'white', marginLeft: '60px' }}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={"/new"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>New Arrival</MDBNavbarLink></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={"/caseview"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>Case Reports</MDBNavbarLink></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <a href='https://www.ndtv.com/topic/news-feed' target='_blank'><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>News Update</MDBNavbarLink></a>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={"/admin/chat"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>Chat</MDBNavbarLink></Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to={"/feedback"}><MDBNavbarLink style={{ color: 'white', marginLeft: '60px' }}>FeedBacks</MDBNavbarLink></Link>
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
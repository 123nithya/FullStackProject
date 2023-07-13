import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

const AdmminSign = () => {
    return (
        <div className='image1'>
            <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ right: '10%' }}>

                <MDBRow>
                    <MDBCol className='text-center text-md-start d-flex flex-column' style={{ marginTop: '12%' }}>

                        <h1 className="display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', fontSize: '700%' }}>
                            REDEEM
                            <img src='/Images/logo.png' alt='logo' style={{ height: '100%', width: '90px', marginLeft: '20px' }} />

                        </h1>

                        <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)', fontSize: '250%', lineHeight: '10px' }}>
                            The Passion To Save People
                        </p>

                    </MDBCol>
                    <MDBCol md='5' className='position-relative' style={{ marginRight: '5%' }}>

                        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                        <MDBCard className='my-2 bg-glass'>
                            <MDBCardBody className='p-5'>
                                <h1 style={{ textAlign: 'center',marginTop:'-30px' }}>Sign Up</h1>
                                <MDBRow>
                                    <MDBCol col='5'>
                                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
                                    </MDBCol>
                                </MDBRow>
                                <MDBInput wrapperClass='mb-4' label='Police Id' id='form3' type='number' />
                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />
                                <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password' />
                                <MDBInput wrapperClass='mb-4' label='Phone' id='form4' type='tel' pattern='[0-9]-{10}' />

                                <Link to='/home'><MDBBtn className='w-100 mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" size='md'> sign up </MDBBtn></Link>

                                <hr />

                                <div className="text-center">

                                    <h3>or sign up with:</h3>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='facebook-f' size="40%" />
                                    </MDBBtn>

                                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                        <MDBIcon fab icon='google' size="40%" />
                                    </MDBBtn>

                                </div>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default AdmminSign;

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
import { Link, useNavigate, useRoutes } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const AdmminSign = () => {

    const [name, setName] = useState("");
    const [policeId, setPoliceId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [phone, setPhone] = useState("");

    console.log(name);
    console.log(policeId);
    console.log(email);
    console.log(password);
    console.log(confirm);
    console.log(phone);
    const nav = useNavigate();
    const NavTo = () => {
		nav("/admin");
	};

	const onSubmit = (v) => {
		// console.log(values)
		// console.log(props)
		console.log( email);
		console.log( password);
		// console.log(auth);

		// setTimeout(() => {
		// 	props.resetForm();
		// 	props.setSubmitting(false);
		// }, 2000);

		axios.post("http://localhost:8080/sign-up",
		{
            "email":email,
			"password":password,
			"name":name,
			"phone":parseFloat(phone)
		})
		.then(response => {
			console.log("Success");
            NavTo();
			// Handle the response here
		})

		// let email = values.email;

		// let password = values.password;

		// createUserWithEmailAndPassword(auth, values.email, values.password)
		// 	.then((auth) => {
		// 		NavTo();
		// 	})
		// 	.catch((error) => console.error(error));
	};

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
                                <h1 style={{ textAlign: 'center', marginTop: '-30px' }}>Sign Up</h1>
                                <MDBRow>
                                    <MDBCol col='5'>
                                        <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'  value={name} onChange={(e) => setName(e.target.value)} />
                                    </MDBCol>
                                </MDBRow>
                                {/* <MDBInput wrapperClass='mb-4' label='Police Id' id='form3' type='number' value={policeId} onChange={(e) => setPoliceId(e.target.value)}/> */}
                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'value={email} onChange={(e) => setEmail(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password' value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Phone' id='form4' type='tel' pattern='[0-9]-{10}' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                <Link to='/home'><MDBBtn className='w-100 mb-4 btn btn-outline-secondary' data-mdb-ripple-color="dark" size='md' onClick={onSubmit}> sign up </MDBBtn></Link>

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

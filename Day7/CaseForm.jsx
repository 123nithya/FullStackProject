import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
    MDBFile
} from 'mdb-react-ui-kit';
import BasicDatePicker from './DatePicker';
import BasicTimePicker from './TimePicker';
import { Checkbox, Form, Input } from 'antd';
import LocationDisplay from './Loc';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useDispatch } from 'react-redux';
import { caseSuccess } from './slice/UserSlice';

function CaseForm() {

    const dispatch = useDispatch();

    const [componentDisabled, setComponentDisabled] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [crime, setCrime] = useState("");
    const [desc, setDesc] = useState("");
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = React.useState('');
    const [fileList, setFileList] = useState("");

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleFileChange = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-3);
        setFileList(fileList);
    }

    const handleTimeChange = (newTime) => {
        // Format the time as HH:MM:SS
        const formattedTime = newTime.format('HH:mm:ss');
        setSelectedTime(formattedTime);
    };

    const handleFormSubmit = () => {
        dispatch(caseSuccess({
            first: fname,
            last: lname,
            email: email,
            phone: phone,
            crime: crime,
            description: desc,
            date: selectedDate,
            time: selectedTime,
            file: fileList,
            loggedIn: true
        }))
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(phone);
        console.log(crime);
        console.log(desc);
        console.log(selectedDate);
        console.log(selectedTime);
        console.log(fileList);
    };

    return (
        <MDBContainer fluid >

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol>

                    <MDBCard className='my-4'>

                        <MDBRow className='g-0'>

                            <MDBCol md='6' className="d-none d-md-block">
                                <LocationDisplay />
                            </MDBCol>

                            <MDBCol md='6'>

                                <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
                                    <h3 className="mb-5 text-uppercase fw-bold word">Case Reporting Form</h3>
                                    <Checkbox
                                        checked={componentDisabled}
                                        onChange={(e) => setComponentDisabled(e.target.checked)}
                                    >
                                        Are You Anonymous User??
                                    </Checkbox>
                                    <br />
                                    <MDBRow>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'
                                                disabled={componentDisabled}
                                                value={fname}
                                                onChange={(e) => setFname(e.target.value)} />
                                        </MDBCol>

                                        <MDBCol md='6'>
                                            <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'
                                                disabled={componentDisabled}
                                                value={lname}
                                                onChange={(e) => setLname(e.target.value)} />
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email'
                                        disabled={componentDisabled}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                    <MDBInput wrapperClass='mb-4' label='Phone No.' size='lg' id='form2' type='number'
                                        disabled={componentDisabled}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)} />
                                    <MDBInput wrapperClass='mb-4' label='State' size='lg' id='form2' type='text'
                                        value={state}
                                        onChange={(e) => setState(e.target.value)} />
                                    <MDBInput wrapperClass='mb-4' label='Crime Name' size='lg' id='form5' type='text'
                                        value={crime}
                                        onChange={(e) => setCrime(e.target.value)} />
                                    <MDBInput wrapperClass='mb-4' type="textarea" label="Case Description" size='lg' id='form5' outline style={{ height: '100px' }}
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)} />
                                    <MDBFile label='Evidence File' id='customFile'
                                        value={fileList}
                                        onChange={(e) => setFileList(e.target.value)}
                                    />
                                    <br />
                                    <div className='d-flex'>
                                        {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Basic date picker" />
                                            </DemoContainer>
    </LocalizationProvider>*/}
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker
                                                    label="Pick a Date..."
                                                    value={selectedDate}
                                                    onChange={(date) => setSelectedDate(date.format('YYYY/MM/DD'))}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                        &nbsp;&nbsp;
                                        {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker label="Basic time picker" />
                                            </DemoContainer>
</LocalizationProvider>*/}
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['TimePicker']}>
                                                <TimePicker
                                                    label="Basic time picker"
                                                    value={selectedTime}
                                                    onChange={handleTimeChange}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </div>

                                    <div className="d-flex justify-content-end pt-3">
                                        <MDBBtn color='light' size='lg'>Reset all</MDBBtn>
                                        <MDBBtn className='ms-2' color='warning' size='lg' onClick={handleFormSubmit}><Link style={{ color: 'white' }} to={"/home"}>Submit form</Link></MDBBtn>
                                    </div>

                                </MDBCardBody>

                            </MDBCol>
                        </MDBRow>

                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default CaseForm;
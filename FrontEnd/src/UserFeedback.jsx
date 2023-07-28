import React, { useState } from 'react';
import Home from './Home';
import axios from 'axios';
// import SideDash from './SideDash';
import { Link } from 'react-router-dom';

const UserFeedback = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const handleClick = () => {
        axios.post("http://localhost:8081/feedback/addfeed", {
            "name": name,
            "email": email,
            "message": comment
        }).then(() => {
            // toast.success(`Thankyou for your wonderfull feedback !!`, {
            // 	position: 'bottom-center',
            // 	autoClose: 5000,
            // 	hideProgressBar: false,
            // 	closeOnClick: true,
            // 	pauseOnHover: true,
            // 	draggable: true,
            // 	progress: undefined,
            // 	theme: 'light',
            //   });
        })
    }

    return (
        <div>
            <div>
                <Home />
            </div>
            <div className='container col-12'
                style={{
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    boxShadow: "0 0 15px #0e0e0e1a",
                    marginTop: '100px',
                    width: '500px',
                    height: '400px'
                }}
            >
                <div style={{ marginTop: '50px' }}>
                    <form action='' className='d-flex flex-column' style={{ gap: '15px' }} >
                        <div>
                            <input type='text' className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input type='email' className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <textarea name='' id='' className='w-100 form-control' cols={80} rows={4} placeholder='Comments' value={comment} onChange={(e) => setComment(e.target.value)} />
                        </div>
                        <div>
                            <Link to={"/"}><button className='button border-0' style={{ textAlign: 'center' }} onClick={handleClick}>Submit</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserFeedback

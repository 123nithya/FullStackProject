import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div>
            <div className='container1'>
                <p className='para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className='btn' style={{
                    color: 'black',
                    marginLeft: '42%',
                    width: '10rem',
                    fontSize: '20px',
                    border: '1px solid white',
                    marginTop: '3px'
                }}>
                    <Link to={"/form"}>I Accept</Link>
                </button>
            </div>
        </div>
    )
}

export default Info

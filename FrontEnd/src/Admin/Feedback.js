import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Feedback() {
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;


    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/admin/feedback/get")
        setProductsList(res.data);
        console.log(res.data);
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>FeedBacks</h1>
            <hr style={{ borderTop: "10px double black" }} />
            {
                productsList.map((value) => {
                    return (
                        <Box sx={{ backgroundColor: 'white', color: 'black', border: '2px solid white', marginTop: '20px', width: '90%', height: '200px', boxShadow: "0 0 15px #0e0e0e1a", marginLeft: '70px' }}>
                            <card variant="outlined">
                                <CardContent style={{ marginTop: '20px' }}>
                                    <h5>User Id: {value.fid}</h5>
                                    <h5>User Name: {value.name}</h5>
                                    <h5>User mail: {value.email}</h5>
                                    <h5>Comment: {value.message}</h5>
                                </CardContent>
                            </card>
                        </Box>
                    );
                })
            }
        </div>
    )
}

export default Feedback
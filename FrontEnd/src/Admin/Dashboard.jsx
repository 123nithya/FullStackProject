import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import PoliceUpdate from './PoliceUpdate';
import PoliceAdd from './PoliceAdd';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Dashboard() {

    const [productsList, setProductsList] = useState([]);
    const [checked, setChecked] = React.useState([0]);
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false);
    };
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    useEffect(() => {
        fetchData();
    }, []);
    axios.defaults.headers.common['Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;

    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/admin/police/view");
        setProductsList(res.data);
        console.log(res.data);
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:8080/admin/police/delete/" + id);
        // window.location.reload();
    }

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 2500, bgcolor: 'background.paper' }}>
                {/* {productsList.map((value) => {
                const labelId = `checkbox-list-label-${value}`; */}
                <Button variant="outlined" onClick={handleClickOpenAdd} style={{marginLeft:'20px'}}>
                    <EditIcon />
                </Button>
                <Dialog open={openAdd} onClose={handleCloseAdd}>
                    <PoliceAdd />
                </Dialog>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'black' }}>Police DataBase</h1>
                    <hr style={{ borderTop: "10px double black" }} />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}>Police Id</TableCell>
                                    <TableCell align="right" style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}>Police Name</TableCell>
                                    <TableCell align="right" style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}>Email</TableCell>
                                    <TableCell align="right" style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}>Mobile</TableCell>
                                    <TableCell align="right" style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}>Police Location</TableCell>
                                    <TableCell align="right" style={{ textAlign: 'center', fontWeight: 600, fontSize: '18px' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productsList.map((value) => (
                                    <TableRow
                                        key={value.caseId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" style={{ textAlign: 'center' }}>
                                            {value.policeId}
                                        </TableCell>
                                        <TableCell align="right" style={{ textAlign: 'center' }}>{value.policeName}</TableCell>
                                        <TableCell align="right" style={{ textAlign: 'center' }}>{value.policeEmail}</TableCell>
                                        <TableCell align="right" style={{ textAlign: 'center' }}>{value.policeMobile}</TableCell>
                                        <TableCell align="right" style={{ textAlign: 'center' }}>{value.policeLocation}</TableCell>
                                        <TableCell align="right" style={{ display: 'flex', gap: '20px', marginTop: '25px', textAlign: 'center' }}>
                                            <Button variant="outlined" onClick={handleClickOpen}>
                                                <EditIcon />
                                            </Button>
                                            <Dialog open={open} onClose={handleClose}>
                                                <PoliceUpdate />
                                            </Dialog>
                                            <IconButton onClick={() => { handleDelete(value.policeId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <div style={{ marginLeft: '90%', marginTop: '20px' }}>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                <EditIcon />
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                                <CaseUpdate />
                            </Dialog>

                            <IconButton onClick={() => { handleDelete(value.caseId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
                                <DeleteIcon />
                            </IconButton>
                        </div> */}
                </div>

                {/* })} */}
            </List>
        </div>

    )
}

export default Dashboard;

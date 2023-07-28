import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; import { Router } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import CaseUpdate from './CaseUpdate';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import CaseAdd from './CaseAdd';



function Case() {

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

    axios.defaults.headers.common[ 'Authorization'] = `Bearer ${window.sessionStorage.getItem("jwt")}`;
    
    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/admin/case/get");
        setProductsList(res.data);
        console.log(res.data);
    }

    const handleDelete = (id) => {
        axios.delete("http://localhost:8080/admin/case/delete/" + id);
        // window.location.reload();
    }

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt'),
        createData('Ice cream sandwich'),
        createData('Eclair'),
        createData('Cupcake'),
        createData('Gingerbread'),
    ];

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 2500, bgcolor: 'background.paper' }}>
                {/* {productsList.map((value) => {
                    const labelId = `checkbox-list-label-${value}`; */}

              
                        <div>
                            <h1 style={{ textAlign: 'center', color: 'black' }}>Registered Cases</h1>
                            <hr style={{ borderTop: "10px double black" }} />
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Case Id</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Case Name</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Case Desc</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Date</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Time</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Location</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Area</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>User Name</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>User Id</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Police Id</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}>Evidence</TableCell>
                                            <TableCell align="right" style={{ textAlign: 'center' }}></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {productsList.map((value) => (
                                            <TableRow
                                                key={value.caseId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {value.caseId}
                                                </TableCell>
                                                <TableCell align="right">{value.caseName}</TableCell>
                                                <TableCell align="right">{value.caseDescription}</TableCell>
                                                <TableCell align="right">{value.caseDate}</TableCell>
                                                <TableCell align="right">{value.caseTime}</TableCell>
                                                <TableCell align="right">{value.caseLocation}</TableCell>
                                                <TableCell align="right">{value.area}</TableCell>
                                                <TableCell align="right">{value.userName}</TableCell>
                                                <TableCell align="right">{value.userId}</TableCell>
                                                <TableCell align="right">{value.policeId}</TableCell>
                                                <TableCell align="right">
                                                    <img src={value.caseFile} height={100} width={100} />
                                                </TableCell>
                                                <TableCell align="right" style={{ display: 'flex', gap: '20px', marginTop: '25px' }}>
                                                    <Button variant="outlined" onClick={handleClickOpen}>
                                                        <EditIcon />
                                                    </Button>
                                                    <Dialog open={open} onClose={handleClose}>
                                                        <CaseUpdate />
                                                    </Dialog>

                                                    <IconButton onClick={() => { handleDelete(value.caseId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
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
                    );
                {/* })} */}
            </List>
        </div>

    )
}

export default Case;


{/* <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon /> 
                                </IconButton>
                            }

                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemText id={labelId} title='CaseId' primary={`${value.caseId}`} style={{ marginRight: "20px" }} />
                                <ListItemText id={labelId} title='Case Name' primary={`${value.caseName}`} style={{ marginRight: "20px" }} />
                            </ListItemButton>
                            <ListItemText
                                primary={value.caseDescription}
                                style={{ width: "250px" }}
                                title='Case Desc'
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.caseDate}
                                title='Date'
                                style={{ width: "300px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.caseTime}
                                title='Time'
                                style={{ width: "250px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.caseLocation}
                                title='Location'
                                style={{ width: "400px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.area}
                                title='Area'
                                style={{ width: "300px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.userId}
                                title='userId'
                                style={{ width: "250px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.userName}
                                title='User Name'
                                style={{ width: "300px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItemText
                                primary={value.policeId}
                                aria-label=''
                                style={{ width: "250px" }}
                                secondary={
                                    <React.Fragment>
                                    </React.Fragment>
                                }
                            />
                            <ListItem title=''>
                                <img src={value.caseFile} height={100} width={100} />
                            </ListItem>
                            <ListItem>

                                <Button variant="outlined" onClick={handleClickOpen}>
                                    <EditIcon />
                                </Button>
                                <Dialog open={open} onClose={handleClose}>
                                    <CaseUpdate />
                                </Dialog>

                                <IconButton onClick={() => { handleDelete(value.caseId) }} edge="end" aria-label="comments" style={{ marginLeft: "20px" }}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        </ListItem> */}
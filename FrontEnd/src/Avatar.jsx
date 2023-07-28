import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const settings = ['Login as Public', 'Login as Admin'];

const Public = [
    ['Login as Public', '/login'],
    ['Login as Admin', '/admin']
];
const Profile = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu} style={{ color: 'white' }}>
                        Login
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >

                    {Public.map((row) => (
                        <MenuItem key={Public} onClick={handleCloseUserMenu}>
                            <Link to={row[1]} style={{color:'black'}}><Typography textAlign="center" style={{ left: '50%' }}>{row[0]}</Typography></Link>
                        </MenuItem>
                    ))}

                </Menu>
            </Box>
        </div>
    )
}

export default Profile;

// <Avatar alt="Remy Sharp" src="/Images/logo.png" />
// <AccountCircleIcon fontSize='large' style={{ marginLeft: '5%' }} />
// onClick={handleOpenUserMenu} (in IconButton)

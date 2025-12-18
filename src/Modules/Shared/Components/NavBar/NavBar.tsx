// import Button from '@mui/material/Button'
// import axios from 'axios';
// import React, { use } from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function NavBar() {

//   let navigate = useNavigate()

//   const logOut = () => {
//     try {
//       let response = axios.get('https://upskilling-egypt.com:3007/api/auth/logout',{headers:{
//         'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//       }});
//       localStorage.removeItem('accessToken');
//       navigate('/login');
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       <Button variant="outlined" color='error' onClick={logOut}>Log out</Button>

//     </>
//   )
// }


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Divider from '@mui/material/Divider';

const pages = ['Home', 'About us', 'Books','New Release', 'Contact us', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
        backgroundColor: '#fff',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0, mr: 2 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            
          
         
          <Box
  sx={{
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
  }}
>
  {pages.map((page, index) => (
    <React.Fragment key={page}>
      <Button
        sx={{
          color: '#000',
          textTransform: 'none',
          px: 2, // spacing
        }}
      >
        {page}
      </Button>

      {index < pages.length - 1 && (
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: 20,
            mx: 2,
            alignSelf: 'center', // 👈 THIS fixes alignment
          }}
        />
      )}
    </React.Fragment>
  ))}
</Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
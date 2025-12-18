import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import authbg from '../../../../Assets/Images/auth-bg.png'
import logo from '../../../../Assets/Images/Logo.png'
import Typography from '@mui/material/Typography';

export default function AuthLayout() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid size={{xs:12,sm:6,md:6}}>
            <Stack>
              <img src={authbg} alt="" />
            </Stack>
          </Grid>
          <Grid size={{xs:12,md:6}}>
            <Stack>
              <Stack sx={{width:'15%',margin:'4rem auto'}}> <img src={logo} alt="" /></Stack>
              <Outlet /> 
            </Stack>
          </Grid>
          
        </Grid>
      </Box>
    </>
      
   
  )
}

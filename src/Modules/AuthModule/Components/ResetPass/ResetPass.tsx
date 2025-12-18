import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ResetPass() {

  const [role, setRole] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setRole(event.target.value as string);
    };
  
    let {register,formState:{errors}, handleSubmit} = useForm();
    
    let onSubmit = (data:any) => {
      try {
          let response = axios.post('https://upskilling-egypt.com:3007/api/auth/reset-password',data);
          console.log(response);
        }
        catch (error) {
          console.log(error);
        }
    }

    let navigate = useNavigate()
  
  return (
    <Stack sx={{width:'70',margin:'auto'}}>
              <Typography variant="subtitle1">Welcome back!</Typography>
              <Typography variant='h5' sx={{marginBottom:'2rem'}}>Reset Your Password Now !</Typography> 
              
              <form onSubmit={handleSubmit(onSubmit)}>
               
                
                <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={12}>
                      <Stack>
                        <InputLabel id="demo-simple-select-label">Email</InputLabel>
                        <TextField {...register('email',{required:'This is rquired filed'})} type='email'   sx={{marginBottom:'1rem'}}/>
                        {errors.email && <Typography variant='body2' color='red'>{errors.email.message?.toString()}</Typography>}
                      </Stack>
                    </Grid>
                    <Grid size={12}>
                      <Stack>
                        <InputLabel id="demo-simple-select-label">OTP</InputLabel>
                        <TextField {...register('otp',{required:'This is rquired filed'})} type='password'   sx={{marginBottom:'1rem'}}/>
                        {errors.otp && <Typography variant='body2' color='red'>{errors.otp.message?.toString()}</Typography>}
                      </Stack>
                    </Grid>
                    <Grid size={12}>
                      <Stack>
                        <InputLabel id="demo-simple-select-label">Password</InputLabel>
                        <TextField {...register('Password',{required:'This is rquired filed'})} type='password'   sx={{marginBottom:'1rem'}}/>
                        {errors.Password && <Typography variant='body2' color='red'>{errors.Password.message?.toString()}</Typography>}
                      </Stack>
                    </Grid>

                  </Grid>
                </Box>
                
    
                

                <Button type='submit' variant="contained" fullWidth sx={{marginBottom:'1rem',backgroundColor:'#EF6B4A',marginTop:5}}>Send</Button>
                <Button onClick={()=> navigate('/login')} variant="outlined" fullWidth sx={{marginBottom:'1rem',marginTop:5}} >Login</Button>
              </form>
              
        </Stack>
  )
}

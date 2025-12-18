import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import Checkbox from '@mui/material/Checkbox'
import FormLabel from '@mui/material/FormLabel'
import { AuthContext } from '../../../../Context/AuthContext'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function Login() {

  let {register,formState:{errors}, handleSubmit} = useForm();
  let {saveLoginData} = useContext(AuthContext);

  let onSubmit = async (data:any) => {
    try {
      let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login',data);
      localStorage.setItem('accessToken', response.data.data.accessToken);
      toast.success('Login Successful',{theme:'colored'});
      navigate('/home');
      saveLoginData();
    }
    catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message,{theme:'colored'});

    }
  };

  let navigate = useNavigate()

  return (
    <Stack sx={{width:'50',margin:'auto',m:8}}>
          <Typography variant="subtitle1">Welcome back!</Typography>
          <Typography variant='h5' sx={{marginBottom:'2rem'}}>Login to your account</Typography> 
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('email',{required:'This is rquired filed'})} type='email' fullWidth label="Email" id="fullWidth" sx={{marginBottom:'1rem'}}/>
            {errors.email && <Typography variant='body2' color='red'>{errors.email.message?.toString()}</Typography>}

            <TextField {...register('password',{required:'This is rquired filed'})} type='password' fullWidth label="Password" id="fullWidth" sx={{marginBottom:'1rem'}}/>
            {errors.password && <Typography variant='body2' color='red'>{errors.password.message?.toString()}</Typography>}

            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />

            <Button type='submit' variant="contained" fullWidth sx={{marginTop:'1rem', marginBottom:'1rem',backgroundColor:'#EF6B4A'}} >Login</Button>
            <Button variant="outlined" fullWidth onClick={()=> navigate('/register')} sx={{marginBottom:'1rem'}}>Register</Button>
            <Button variant="outlined" fullWidth onClick={()=> navigate('/forget-pass')} sx={{marginBottom:'1rem'}}>Forget Password</Button>
            <Button variant="outlined" fullWidth onClick={()=> navigate('/change-pass')}>Change Password</Button>
          </form>
          
    </Stack>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgetPass() {

  let {register,formState:{errors}, handleSubmit} = useForm();
  
    let onSubmit = (data:any) => {
      try {
      let response = axios.post('https://upskilling-egypt.com:3007/api/auth/forgot-password',data);
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
    }

    let navigate = useNavigate()

  return (
    <Stack sx={{width:'70',margin:'auto',m:8}}>
          <Typography variant="subtitle1">Welcome back!</Typography>
          <Typography variant='h5' sx={{marginBottom:'2rem'}}>Forget Password !!</Typography> 
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField {...register('email',{required:'This is rquired filed'})} type='email' fullWidth label="Email" id="fullWidth" sx={{marginBottom:'1rem'}}/>
            {errors.email && <Typography variant='body2' color='red'>{errors.email.message?.toString()}</Typography>}
          
            <Button type='submit' onClick={()=> navigate('/reset-pass')} variant="outlined" fullWidth >Send</Button>
          </form>
          
    </Stack>
  )
}

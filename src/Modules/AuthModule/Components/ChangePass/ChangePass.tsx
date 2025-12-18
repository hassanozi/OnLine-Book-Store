import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function ChangePass() {
  let {register,formState:{errors}, handleSubmit} = useForm();

  let onSubmit = (data:any) => {
    try {
      let response = axios.post('https://upskilling-egypt.com:3007/api/auth/change-password',data);
      toast.success('Paswword changed Successful',{theme:'colored'});
      console.log(response);
    }
    catch (error:any) {
      console.log(error);
      toast.error(error.response.data.message,{theme:'colored'});

    }
  }

  let navigate = useNavigate()

  return (
    <Stack sx={{width:'70',margin:'auto'}}>
          <Typography variant="subtitle1">Welcome back!</Typography>
          <Typography variant='h5' sx={{marginBottom:'2rem'}}>Change Your Password Easily </Typography> 
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel id="demo-simple-select-label">Old Password</InputLabel>
            <TextField {...register('password',{required:'This is rquired filed'})} type='password' fullWidth sx={{marginBottom:'1rem'}}/>
            {errors.password && <Typography variant='body2' color='red'>{errors.password.message?.toString()}</Typography>}

            <InputLabel id="demo-simple-select-label">New Password</InputLabel>
            <TextField {...register('password_new',{required:'This is rquired filed'})} type='password' fullWidth sx={{marginBottom:'1rem'}}/>
            {errors.password_new && <Typography variant='body2' color='red'>{errors.password_new.message?.toString()}</Typography>}

            <Button  onClick={()=> navigate('/login')} type='submit' variant="contained" fullWidth sx={{marginBottom:'1rem',backgroundColor:'#EF6B4A'}} >Save</Button>
          </form>
          
    </Stack>
  )
}

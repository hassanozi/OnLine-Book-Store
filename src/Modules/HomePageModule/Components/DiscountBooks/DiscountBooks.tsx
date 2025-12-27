import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import book2 from '../../../../assets/images/Unsplash.png'
import prices from '../../../../assets/images/prices.png'
import Button from '@mui/material/Button';
import styles from './DiscountBooks.module.css'

export default function DiscountBooks() {

    const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',   // remove white card
  boxShadow: 'none',                 // remove shadow
  border: 'none',                    // remove border
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


  return (
    <>
        <Box sx={{ flexGrow: 1 }}  className={`${styles.roseBg}`} style={{ padding: "40px" }}>
            <Grid container spacing={2} alignItems="stretch">
                <Grid size={6}>
                    <Item sx={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'flex-start', 
                        paddingLeft: 4,  
                        }}>
                    <h1 style={{color:'darkblue' , marginLeft:'200px'}}>All books are 50% off now!</h1>
                    <h2 style={{color:'darkblue' , marginLeft:'200px'}}> Don't miss such a deal!</h2>
                    <p style={{color:'darkblue' , marginLeft:'100px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <p style={{color:'darkblue' , marginLeft:'100px'}}> Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <img src={prices} alt="" style={{ width: '200px', height: 'auto', marginLeft:'100px' }}  />
                </Item>
                </Grid>
                <Grid size={6}>
                    <Item sx={{ 
                            height: '100%', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center'
                        }}>
                        <img src={book2}  style={{ width: '500px', height: '100%', objectFit: 'cover' }}  />
                    </Item>
                </Grid>
                
            </Grid>
            </Box>
    </>
  )
}

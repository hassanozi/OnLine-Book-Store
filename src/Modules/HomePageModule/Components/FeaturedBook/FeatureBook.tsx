import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import book1 from '../../../../assets/images/book.png'
import Button from '@mui/material/Button';

export default function FeatureBook() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
        }));

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={6}>
                <Item sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={book1} alt="" src={book1} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                </Item>
                </Grid>
                <Grid size={6}>
                <Item sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'flex-start', 
                    
                }}>
                    <h1 style={{color:'darkblue'}}>Featured book</h1>
                    <p>By Timbur Hood</p>
                    <h2 style={{color:'darkblue'}}>Birds gonna be happy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p> Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                    <h2 style={{color:'darkred'}}>$ 45.00</h2>
                    <Button variant='outlined'>
                        View More
                    </Button>
                </Item>
                </Grid>
                
            </Grid>
            </Box>
    </>
  )
}

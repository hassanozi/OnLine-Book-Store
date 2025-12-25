import React from 'react'
import foot from '../../../../assets/images/Frame 238.png'
import Box from '@mui/material/Box'

export default function Footer() {
  return (
    <>
      <Box
          component="img"
          sx={{
            height: 500, // Fixed height in pixels
            width: 1500,  // Fixed width in pixels
            // maxHeight: { xs: 233, md: 167 }, // Responsive maxHeight for different breakpoints
            // maxWidth: { xs: 350, md: 250 },  // Responsive maxWidth
            objectFit: 'cover', // Ensures the image covers the area without stretching
          }}
          alt="Description of the image"
          src={foot}
    />
        
    </>
  )
}

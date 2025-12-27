import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import rec1 from '../../../../assets/images/Rectangle1.png';
import rec2 from '../../../../assets/images/Rectangle2.png';
import rec3 from '../../../../assets/images/Rectangle3.png';

const cardData = [
  {
    title: '2 aug, 2021',
    description: 'Reading books always makes the moments happy',
    image: rec1,
  },
  {
    title: '2 aug, 2021',
    description: 'Reading books always makes the moments happy',
    image: rec2,
  },
  {
    title: '2 aug, 2021',
    description: 'Reading books always makes the moments happy',
    image: rec3,
  },
];

export default function LatestArticle() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, textAlign: 'center' }}>
      <Typography variant="h6">Read our articles</Typography>
      <Typography variant="h4" gutterBottom>Latest Articles</Typography>

      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid key={index}>
            <Card sx={{ maxWidth: 300, margin: 'auto', textAlign: 'center' }}>
              <CardMedia
                component="img"
                height="180"
                image={card.image}
                alt={card.title}
                sx={{ objectFit: 'contain', padding: 1 }}
              />
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, pb: 2 }}>
                <FaFacebookF size={16} style={{ cursor: 'pointer' }} />
                <FaTwitter size={16} style={{ cursor: 'pointer' }} />
                <FaInstagram size={16} style={{ cursor: 'pointer' }} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Button variant="outlined" color="primary">
          Read All Articles
        </Button>
      </Box>
    </Box>
  );
}

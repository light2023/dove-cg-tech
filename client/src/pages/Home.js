import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/assets/hero-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Home = () => {
  return (
    <HeroSection>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'var(--green-primary)' }}>
          Transform your Workforce with DOVE CG Tech
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Cutting-edge eLearning solutions for corporate excellence
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          sx={{
            bgcolor: 'var(--green-primary)',
            color: 'var(--black-primary)',
            fontWeight: 'bold',
            px: 4,
            py: 2,
            '&:hover': {
              bgcolor: 'var(--green-secondary)',
              boxShadow: '0 0 15px var(--yellow-primary)',
            }
          }}
        >
          Explore Courses
        </Button>
      </Container>
    </HeroSection>
  );
};

export default Home;

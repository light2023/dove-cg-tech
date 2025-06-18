import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = styled(Box)({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'var(--text-light)',
});

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Container maxWidth="sm">
        <Typography variant="h1" sx={{ color: 'var(--green-primary)', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Sorry, the page you're looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            bgcolor: 'var(--green-primary)',
            color: 'var(--black-primary)',
            '&:hover': { bgcolor: 'var(--green-secondary)' },
          }}
        >
          Go Home
        </Button>
      </Container>
    </NotFoundContainer>
  );
};

export default NotFound;

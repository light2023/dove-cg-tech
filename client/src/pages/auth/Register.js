import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegisterContainer = styled(Box)({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const RegisterForm = styled(Box)({
  backgroundColor: 'var(--black-secondary)',
  padding: '40px',
  borderRadius: '8px',
  boxShadow: '0 0 10px var(--green-primary)',
  width: '100%',
  maxWidth: '400px',
});

const Register = () => {
  return (
    <RegisterContainer>
      <Container maxWidth="sm">
        <RegisterForm component="form">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'var(--green-primary)', textAlign: 'center' }}
          >
            Register
          </Typography>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--text-light)',
                '& fieldset': { borderColor: 'var(--text-muted)' },
                '&:hover fieldset': { borderColor: 'var(--green-primary)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--text-muted)' },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--text-light)',
                '& fieldset': { borderColor: 'var(--text-muted)' },
                '&:hover fieldset': { borderColor: 'var(--green-primary)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--text-muted)' },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: 'var(--text-light)',
                '& fieldset': { borderColor: 'var(--text-muted)' },
                '&:hover fieldset': { borderColor: 'var(--green-primary)' },
              },
              '& .MuiInputLabel-root': { color: 'var(--text-muted)' },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: 'var(--green-primary)',
              color: 'var(--black-primary)',
              marginTop: '20px',
              padding: '12px',
              '&:hover': {
                backgroundColor: 'var(--green-secondary)',
                boxShadow: '0 0 10px var(--yellow-primary)',
              },
            }}
          >
            Sign Up
          </Button>
        </RegisterForm>
      </Container>
    </RegisterContainer>
  );
};

export default Register;
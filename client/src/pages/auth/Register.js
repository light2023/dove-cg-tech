import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { register } from '../../../api/auth';

const RegisterContainer = styled(Box)({
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const RegisterForm = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '40px',
  borderRadius: '8px',
  boxShadow: `0 0 10px ${theme.palette.primary.main}`,
  width: '100%',
  maxWidth: '400px',
}));

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await register(name, email, password);
      authLogin(email, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <Container maxWidth="sm">
        <RegisterForm component="form" onSubmit={handleSubmit}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: 'var(--green-primary)', textAlign: 'center' }}
          >
            Register
          </Typography>
          {error && (
            <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
              {error}
            </Typography>
          )}
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ '& .MuiInputLabel-root': { color: 'var(--text-muted)' } }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ '& .MuiInputLabel-root': { color: 'var(--text-muted)' } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ '& .MuiInputLabel-root': { color: 'var(--text-muted)' } }}
          />
          <Button
            variant="contained"
            fullWidth
            type="submit"
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.5,
              bgcolor: 'var(--green-primary)',
              color: 'var(--black-primary)',
              '&:hover': { bgcolor: 'var(--green-secondary)' },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
          </Button>
        </RegisterForm>
      </Container>
    </RegisterContainer>
  );
};

export default Register;

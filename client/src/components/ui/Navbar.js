import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(0, 255, 127, 0.1)',
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DOVE CG Tech
        </Typography>
        <Box>
          <NavButton onClick={() => navigate('/')}>Home</NavButton>
          <NavButton onClick={() => navigate('/courses')}>Courses</NavButton>
          <NavButton onClick={() => navigate('/company')}>Company</NavButton>
          <NavButton onClick={() => navigate('/login')}>Login</NavButton>
          <NavButton
            variant="contained"
            onClick={() => navigate('/register')}
            sx={{
              backgroundColor: 'var(--green-primary)',
              color: 'var(--black-primary)',
              '&:hover': { backgroundColor: 'var(--green-secondary)' },
            }}
          >
            Sign Up
          </NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
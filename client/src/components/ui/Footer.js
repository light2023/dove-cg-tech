import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)({
  backgroundColor: 'var(--black-secondary)',
  color: 'var(--text-light)',
  padding: '20px 0',
  marginTop: 'auto',
  borderTop: '1px solid var(--green-primary)',
});

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} DOVE CG Tech. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              href="/about"
              sx={{
                color: 'var(--green-primary)',
                '&:hover': { color: 'var(--yellow-primary)' },
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              sx={{
                color: 'var(--green-primary)',
                '&:hover': { color: 'var(--yellow-primary)' },
              }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              sx={{
                color: 'var(--green-primary)',
                '&:hover': { color: 'var(--yellow-primary)' },
              }}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

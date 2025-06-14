import { AppBar, Box, IconButton, Stack, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, Phone, Email } from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#e8f0fa',
        color: 'black',
        boxShadow: 'none',
        padding: '10px 20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src="images/company.png" alt="Logo" width={60} style={{ objectFit: 'contain' }} />
          <Box>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                🏢
              </span>
              Talentriya Consultant Services
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone sx={{ fontSize: 16 }} />
              +91 7032007007
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ fontSize: 16 }} />
              talentriyacs@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* Right: Social Icons */}
        <Stack direction="row" spacing={1} sx={{ mt: { xs: 2, sm: 0 } }}>
          <IconButton size="small" sx={{ backgroundColor: '#e0e0e0' }}>
            <Facebook color="primary" />
          </IconButton>
          <IconButton size="small" sx={{ backgroundColor: '#e0e0e0' }}>
            <Twitter color="primary" />
          </IconButton>
          <IconButton size="small" sx={{ border: '2px solid red' }}>
            <Instagram sx={{ color: 'red' }} />
          </IconButton>
        </Stack>
      </Box>
    </AppBar>
  );
};

export default Header;

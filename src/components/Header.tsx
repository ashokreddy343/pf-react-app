import { AppBar, Toolbar, Typography, Box, IconButton, Stack } from '@mui/material';
import { Facebook, Twitter, Instagram, Phone, Email } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#e8f0fa', color: 'black', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
        

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Stack direction="row" spacing={2}>
            <NavLink to="/pf-consultant">PF Consultant</NavLink>
            <NavLink to="/esi-consultant">ESI Consultant</NavLink>
            <NavLink to="/gst-filing">GST Filing</NavLink>
            <NavLink to="/income-tax">Income Tax</NavLink>
            <NavLink to="/pf-withdrawal">PF Withdrawal</NavLink>
            <NavLink to="/company-formation">Company Formation</NavLink>
            <NavLink to="/licensing">Licensing</NavLink>
          </Stack>

          
        </Box>
      </Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img  alt="Logo" width={80} />
          <Box>
            <Typography variant="body2"><Phone sx={{ fontSize: 16 }} /> +91 93104 97713</Typography>
            <Typography variant="body2"><Email sx={{ fontSize: 16 }} /> soniyapfesiconsultant@gmail.com</Typography>
            <Typography variant="body2"><Email sx={{ fontSize: 16 }} /> info@pfesiconsultants.in</Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{ ml: 4 }}>
            <NavLink to="/ess-login">ESS Login</NavLink>
            <NavLink to="/employer-login">Employer Login</NavLink>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton size="small"><Facebook color="primary" /></IconButton>
            <IconButton size="small"><Twitter color="primary" /></IconButton>
            <IconButton size="small"><Instagram sx={{ color: 'red' }} /></IconButton>
          </Stack>
        </Box>
    </AppBar>
  );
};

export default Header;

import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const MainNavbar = () => (
  <AppBar position="static" sx={{ backgroundColor: '#083B66' }}>
    <Toolbar>
      <Box sx={{ flexGrow: 1, display: 'flex', gap: 3 }}>
        <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
        <Button component={Link} to="/aboutus" sx={{ color: 'white' }}>About Us</Button>
        <Button component={Link} to="/services" sx={{ color: 'white' }}>Services</Button>
        <Button sx={{ color: 'white' }}>Buy Online</Button>
        <Button component={Link} to="/location" sx={{ color: 'white' }}>Location</Button>
        <Button sx={{ color: 'white' }}>News & Advisories</Button>
        <Button sx={{ color: 'white' }}>Careers</Button>
        <Button sx={{ color: 'white' }}>Contact Us</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;

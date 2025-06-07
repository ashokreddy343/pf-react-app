import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        {/* Title */}
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          About Us
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Profile Section */}
        <Box mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Profile
          </Typography>
          <Typography variant="body1" paragraph>
            We are a trusted consultancy firm specializing in end-to-end HR and statutory compliance solutions,
            offering expert support in Provident Fund (PF), Employee State Insurance (ESI), payroll processing,
            and skilled/unskilled manpower supply. Our services are tailored to help businesses remain compliant,
            efficient, and workforce ready.
          </Typography>
        </Box>

        {/* Gallery & Awards Section */}
        <Box mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Gallery & Awards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* You can later replace this with actual image carousel/grid */}
            Our achievements and contributions have been recognized across various sectors. (Gallery coming soon...)
          </Typography>
        </Box>

        {/* Vision Section */}
        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            Vision
          </Typography>
          <Typography variant="body1">
            To be the most trusted and efficient partner in providing end-to-end statutory compliance,
            payroll solutions, and reliable manpower support — empowering businesses to focus on growth
            while we handle the backbone of their workforce management with integrity, accuracy, and care.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutUs;

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const AboutSection: React.FC = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'flex-start',
      justifyContent: 'center',
      p: 4,
      gap: 4,
    }}>
      {/* Image Section */}
      <Box
        component="img"
        src="/images/founder.jpg" // replace with your image path
        alt="Founder"
        sx={{
          width: { xs: '100%', md: '40%' },
          borderRadius: 2,
          objectFit: 'cover',
        }}
      />

      {/* Text Content Section */}
      <Stack spacing={2} sx={{ width: { xs: '100%', md: '60%' } }}>
        <Typography variant="body1" sx={{ color: '#333' }}>
          <Box component="span" sx={{ borderBottom: '3px solid red', pb: 0.5, display: 'inline-block' }} />
          {' '}We are the most efficient & renowned firms for providing the best Legal advisory Services like PF, ESIC & PF Withdrawal in India. Over 7 years of experience we’ll ensure you always get the best guidance.
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" component="p">24*7 WhatsApp Support</Typography>
          <Typography variant="body2" component="p">Smart Solutions with Experience Team</Typography>
          <Typography variant="body2" component="p">All types PF & ESIC Services</Typography>
          <Typography variant="body2" component="p">100% Money back Guarantee</Typography>
        </Box>

        <Typography variant="h5" sx={{ mt: 3, fontWeight: 'bold' }}>
          Zero Late Fee Platform
        </Typography>

        <Box sx={{ width: '80px', height: '4px', backgroundColor: 'red', mb: 1 }} />

        <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
          Many small businesses pay lakhs in penalty every year to the Government for late filing various statutory returns.
          Such penalty or late fee paid is not tax deductible and is a drain on profitability.
          At IndiaFilings, our mission is to provide the most affordable services to our customers and help them avoid all late fee.
          To achieve our mission - we have built enterprise grade technology to help you proactively know the upcoming compliance and avoid penalty.
          Checkout our compliance services below, talk to an Advisor and stop paying unwanted late fees.
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutSection;

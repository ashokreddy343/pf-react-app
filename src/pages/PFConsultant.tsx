import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  List,  ListItem,
  ListItemText
} from '@mui/material';
import FeatureCards from '../components/FeatureCards';
import AboutSection from '../components/AboutSection';

const services = [
  'Online Registration for PF code',
  'Submitting all necessary documents on timely basis like Nomination Form (F?2), Declaration Form.',
  'Preparing, checking and submitting challans on timely basis.',
  'Furnishing of particulars of change in ownership / management of the establishment',
  'Providing day to day consultancy on matters pertaining to EPF, pension scheme & EDLI scheme',
  'We shall process and submit P.F. Withdrawal forms and follow up for the same (For left employees).',
  'We undertake Transfer related Submission also (Online transfer)',
  'Assistance to employees of establishment in claiming Pension',
  'Assistance to employees in claiming / obtaining superannuation pension.',
  'Assistance to employees to check PF balance, submit online transfer forms, track claim status',
  'UAN Generation, Guidance in UAN Activation and Seeding of KYC',
  'Digital Signature Activation and Registration',
  'Online availability of Monthly Returns, Challans & Correspondence as per your need.',
  'Regular visit and correspondence with the PF department.',
  'Maintain cordial relation with concerned PF Officials',
  'Replying to Show Cause Notices issued under EPF Act',
  'Assistance at the time of inspections and enquiries conducted by the Inspector.',
  'Conducting seminars to induct employees about the benefits associated with PF',
  'Timely updation and proper Guidelines, if any changes in Act or rules.'
];

const PFConsultationPage: React.FC = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4
        }}
      >
        {/* Left Side - Service List */}
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            FREE PF CONSULTATION
          </Typography>
          <List dense>
            {services.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{ fontSize: '1rem' }}
                  primary={`${index + 1}. ${item}`}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Side - Form */}
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              GET A FREE CONSULTANCY
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField fullWidth label="Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Company Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Purpose" variant="outlined" margin="normal" />
              <TextField fullWidth label="Phone Number" variant="outlined" margin="normal" />
              <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
                Submit & Contact Support
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      <FeatureCards/>
      <AboutSection/>
    </Box>
  );
};

export default PFConsultationPage;

// src/pages/ServiceDetail.tsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const serviceCategories: Record<string, string[]> = {
  'PF Consultation': [
    'PF Consultant',
    'PF Registration',
    'PF Return',
    'PF 7A Case',
    'PF Withdrawal',
    'PF Death Claim',
    'PF Inspection',
  ],
  'ESIC Consultation': [
    'ESIC Consultant',
    'ESIC Registration',
    'ESIC Return',
    'ESIC Inspection',
  ],
  'Licencing Services': [
    'Factory Licence',
    'Fire Licence',
    'Food Licence',
    'Pollution Licence',
    'FFSAI State',
    'FFSAI Central',
    'Trade Licence',
    'GST Registration',
    'PSARA Licence',
    'Labour welfare fund reg',
    'Shop & Establishment',
    'Professional Tax',
    'Contract Labour',
    'Labour Licence',
    'DSC',
  ],
  'Goods & Service Tax (GST)': [
    'GST Return Filing',
    'GST LUT Filing',
    'GST Cancellation',
    'GST Annual Return',
    'GST Invoicing',
    'GST eInvoicing',
    'eWay Bill',
    'Input Tax Credit',
    'GST Software for Accountants',
  ],
  'Book Keeping': ['Book of Accounts', 'Accounts online'],
  'Income Tax Filing': [
    'ITR 4 UDIN ONLY',
    'ITR 4 PL & BA UDIN',
    'Personal Tax Filing',
    'Business Tax Filing',
    'TAX Notice',
    'TDS Filing',
    'ITR 1 Return',
    'ITR 2 Return',
    'ITR 3 Return',
    'ITR 4 Return',
    'ITR 5 Return',
    'ITR 6 Return',
    'ITR 7 Return',
    'Form 16',
  ],
  'Company Formation & ROC Compliance': [
    'Proprietorship Company',
    'Partnership Company',
    'One Person Company',
    'Limited Liability Partnership',
    'Private Limited Company',
    'Trust Registration',
    'Startup India Registration',
    'Digital Signature',
    'TDS Filing',
    'TAN Registration',
  ],
  'Payroll Outsourcing': [
    'Payroll Assist',
    'Monthly Payroll',
    'TDS Filing',
    'ESI Filing',
    'PF Filing',
    'ESI Card Generation',
    'UAN Card Generation',
    'Assistance regarding PF claim',
    'Assistance regarding Pension claim',
    'Assistance PF and ESI death claim',
    'LWF Filing',
    'Professional tax Filing',
    'LEDGERS HRMS',
  ],
};

const ServiceDetail: React.FC = () => {
  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Services
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
      >
        {Object.entries(serviceCategories).map(([category, services]) => (
          <Box
            key={category}
            width={{ xs: '100%', sm: '45%', md: '40%' }}
            minWidth="300px"
            maxWidth="500px"
          >
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2, color: '#083B66' }}>
                  {category}
                </Typography>
                <List dense>
                  {services.map((service, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ServiceDetail;

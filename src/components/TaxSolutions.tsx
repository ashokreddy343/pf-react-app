import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
} from '@mui/material';

const services = [
  {
    title: 'PF ESI Registration',
    img: '/images/pf-1.jpg',
    description:
      'Register Your Establishment with EPFO and ESIC (PF & ESI employer code for your establishment)',
  },
  {
    title: 'Income Tax',
    img: '/images/pf-2.jpg',
  },
  {
    title: 'GST',
    img: '/images/pf-3.jpg',
  },
  {
    title: 'Professional Tax',
    img: '/images/pf-4.jpg',
  },
  {
    title: 'PF Management',
    img: '/images/pf-1.jpg',
  },
  {
    title: 'ESI Management',
    img: '/images/pf-2.jpg',
  },
];

const TaxSolutionsFlex: React.FC = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: '#00aaff', fontWeight: 600 }}
        >
          Talentriya Consultant Services
        </Typography>
        <Typography
          variant="h4"
          align="center"
          fontWeight={600}
          gutterBottom
        >
          Tax Solution Packages
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
            mt: 4,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                width: 280,
                textAlign: 'center',
                flex: '1 1 auto',
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                image={service.img}
                alt={service.title}
                sx={{ height: 180, objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600}>
                  {service.title}
                </Typography>
                {service.description && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                  >
                    {service.description}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TaxSolutionsFlex;

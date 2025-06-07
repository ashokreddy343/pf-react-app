// src/pages/Location.tsx
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';

const locations = ['Hyderabad', 'Tirupathi', 'Vijayawada'];

const LocationNew: React.FC = () => {
  return (
    <Container sx={{ mt: 6, mb: 8 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: '#083B66', fontWeight: 'bold' }}
      >
        Our Locations
      </Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={4}
      >
        {locations.map((city, index) => (
          <Card
            key={index}
            sx={{
              width: 280,
              borderRadius: 3,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <RoomIcon sx={{ fontSize: 48, color: '#1976d2', mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {city}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default LocationNew;

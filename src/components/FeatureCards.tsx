import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const cardData = [
  {
    icon: '/images/icon1.png', // Replace with your icon path
    text: `PF consultant is a unique entity in the PF industry, actively committed to offering a fast and secure PF Registration Services. Take advantage of these best investment plans for your future. We help individuals to manage the salary tax-free to help both employer and employee.`
  },
  {
    icon: '/images/icon2.png',
    text: `The ESIC Act 1948 was introduced by the government to provide the best security and medical facilities for employees and their families. We assist registered employees and their families who are eligible to get medical benefits.`
  },
  {
    icon: '/images/icon3.png',
    text: `We help to submit the complete EPF Withdrawal process. As the Provident Fund withdrawal procedure requires members to submit various documents with respect to form 19 to the EPF. We take care of everything and you don’t have to worry about any procedures.`
  }
];

const FeatureCards: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', p: 4 }}>
      {cardData.map((card, index) => (
        <Paper
          key={index}
          elevation={5}
          sx={{
            width: 300,
            minHeight: 350,
            borderRadius: '30px 30px 10px 10px',
            padding: 3,
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #ffe4e1 0%, #ffffff 100%)',
            boxShadow: '5px 5px 10px rgba(0,0,0,0.2)'
          }}
        >
          <Box
            component="img"
            src={card.icon}
            alt={`icon-${index}`}
            sx={{ height: 60, mb: 2 }}
          />
          <Typography variant="body2" sx={{ fontSize: '14px', lineHeight: 1.6 }}>
            {card.text}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default FeatureCards;

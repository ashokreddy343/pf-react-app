import { Box, Typography, Container } from "@mui/material";
import TaxSolutionsFlex from "../components/TaxSolutions";

const Home = () => {
  return <div>
      {/* Top Section */}
      <Box
        sx={{
          backgroundColor: '#011d30',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Typography variant="subtitle1" sx={{ color: '#00aaff', letterSpacing: 2 }}>
          SPECIAL OFFER
        </Typography>
        <Typography variant="h4" fontWeight="bold" mt={2}>
          Solve your Tax Issues
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt={1}>
          Remarkable with Sanjeeva Reddy
        </Typography>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ backgroundColor: '#f0f0f0', py: 6 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 500,
              color: '#0056a3',
              '& span': {
                color: '#0a0a80',
                fontWeight: 'bold',
              },
            }}
          >
            Welcome to <span>Talentriya Consultant Services</span>
          </Typography>
        </Container>
      </Box>
      <TaxSolutionsFlex/>
    </div>
};

export default Home;

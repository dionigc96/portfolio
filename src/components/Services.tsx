import { Box, Paper, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Services = ({ dataAos }: { dataAos: any }) => {
  return (
    <section id="services" className="services">
      <Box textAlign="center" mb={4} mt={5} data-aos={dataAos.fadeUp}>
        <Paper
          elevation={1}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: 'var(--white-color)',
          }}
        >
          <PersonIcon sx={{ fontSize: 20, color: 'black', mr: 1 }} />
          <Typography variant="body2" sx={{ color: 'black' }}>
            My Services
          </Typography>
        </Paper>
      </Box>
    </section>
  );
};

export default Services;

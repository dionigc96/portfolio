import { Box, Paper, Typography, Container, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SectionHeader from '../Utils/SectionHeader';

const Services = ({ dataAos }: { dataAos: any }) => {
  return (
    <section id="services" className="services">
      <Container maxWidth="lg" data-aos={dataAos.fadeUp}>
        <SectionHeader
          icon={PersonIcon}
          title="My Services"
          subtitle="Crafting Digital Experiences"
        />
        <Paper
          elevation={3}
          sx={{
            padding: '2rem',
            borderRadius: '15px',
            backgroundColor: 'white',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'var(--grey-parraf)',
              textAlign: 'center',
              mb: 3,
              lineHeight: 1.8,
            }}
          >
            I specialize in designing and developing professional websites and applications tailored to your needs. 
            Whether it's building from scratch or leveraging platforms like WordPress, I ensure high-quality results. 
            Scroll down to get in touch and bring your ideas to life!
          </Typography>
          <Box textAlign="center">
            <Link href="#contact" underline="none">
              <ArrowDownwardIcon
                sx={{
                  fontSize: 50,
                  color: 'var(--primary-color)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(5px)' },
                }}
              />
            </Link>
          </Box>
        </Paper>
      </Container>
    </section>
  );
};

export default Services;

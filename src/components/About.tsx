import { Container, Typography, Paper, Box, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, // Ejecutar la animación solo una vez
    });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4} mt={20}>
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
              About Me
            </Typography>
          </Paper>
        </Box>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            color: 'var(--grey-parraf)',
            fontSize: '1.25rem',
          }}
        >
          Get to know more about my background and expertise
        </Typography>

        <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center', mt: 4 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
              <PersonIcon sx={{ fontSize: 50, color: 'var(--primary-color)' }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Background
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Computer Engineer with extensive experience in the technology sector, working with leading companies and financial institutions.
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
              <WorkIcon sx={{ fontSize: 50, color: 'var(--primary-color)' }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Experience
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Worked for prestigious organizations including Indra, BBVA, and Santander, developing both backend and frontend solutions.
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
              <InfoIcon sx={{ fontSize: 50, color: 'var(--primary-color)' }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Approach
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
              >
                Passionate about creating efficient and scalable solutions while maintaining a user-centric approach in all my projects.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </section>
  );
};

export default About;
import { Box } from '@mui/material';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const Contact = () => {
  return (
    <Box
      component="section"
      id="contact"
      className="contact"
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }
      }
    >
       <Box textAlign="center" mb={4} mt={5}>
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
              My Projects
            </Typography>
          </Paper>
        </Box>
      <SocialLinks />
      <ContactForm />
    </Box>
  );
};

export default Contact;

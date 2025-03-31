import { Box } from '@mui/material';
import SocialLinks from './SocialLinks';
import ContactForm from './ContactForm';


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
      <SocialLinks />
      <ContactForm />
    </Box>
  );
};

export default Contact;

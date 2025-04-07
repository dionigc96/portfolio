import { Box } from '@mui/material';
import SocialLinks from '../Utils/SocialLinks';
import ContactForm from './ContactForm';
import PersonIcon from '@mui/icons-material/Person';
import SectionHeader from '../Utils/SectionHeader';

const Contact = ({ dataAos }: { dataAos: any }) => {
  return (
    <Box
      component="section"
      id="contact"
      className="contact"
      data-aos={dataAos.fadeUp}
      sx={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '100%',
      }}
    >
      <SectionHeader
        icon={PersonIcon}
        title="My Projects"
        subtitle="Get to know more about my background and expertise"
      />
      <SocialLinks dataAos={dataAos.fadeRight} />
      <ContactForm dataAos={dataAos.fadeLeft} />
    </Box>
  );
};

export default Contact;

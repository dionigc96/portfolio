import { Container, Paper, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import SectionHeader from '../Utils/SectionHeader';
import InfoCard from './InfoCard';

const About = ({ dataAos }: { dataAos: any }) => {
  return (
    <section id="about" className="about" data-aos={dataAos.fadeUp}>
      <Container maxWidth="lg">
        <SectionHeader
          icon={PersonIcon}
          title="About Me"
          subtitle="Get to know more about my background and expertise"
        />
        <Paper elevation={3} sx={{ padding: '2rem', textAlign: 'center', mt: 4 }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <InfoCard
              icon={PersonIcon}
              title="Background"
              description="Computer Engineer with extensive experience in the technology sector, working with leading companies and financial institutions."
            />
            <InfoCard
              icon={WorkIcon}
              title="Experience"
              description="Worked for prestigious organizations including Indra, BBVA, and Santander, developing both backend and frontend solutions."
            />
            <InfoCard
              icon={InfoIcon}
              title="Approach"
              description="Passionate about creating efficient and scalable solutions while maintaining a user-centric approach in all my projects."
            />
          </Stack>
        </Paper>
      </Container>
    </section>
  );
};

export default About;
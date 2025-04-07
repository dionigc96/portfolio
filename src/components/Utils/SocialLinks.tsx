import { Box, Typography, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SocialIconButton from './SocialIconButton';

const SocialLinks = ({ dataAos }: { dataAos: any }) => {
  return (
    <Box
      data-aos={dataAos}
      sx={{
        textAlign: 'center',
        mb: 4,
        border: '1px solid',
        borderColor: 'grey.300',
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>Let's Connect</Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <SocialIconButton href="https://github.com" target="_blank">
          <GitHubIcon fontSize="large" />
        </SocialIconButton>
        <SocialIconButton href="https://linkedin.com" target="_blank">
          <LinkedInIcon fontSize="large" />
        </SocialIconButton>
        <SocialIconButton href="mailto:example@example.com">
          <EmailIcon fontSize="large" />
        </SocialIconButton>
      </Stack>
    </Box>
  );
};

export default SocialLinks;

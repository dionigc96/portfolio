import { Box, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialLinks = () => {
  return (
    <Box
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
        <IconButton href="https://github.com" target="_blank">
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href="mailto:example@example.com">
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default SocialLinks;

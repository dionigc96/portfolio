import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import SocialIconButton from '../Utils/SocialIconButton';

const LeftHeaderContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Typography className="left-header-content">Computer Engineer</Typography>
      <SocialIconButton href="https://github.com" target="_blank">
        <GitHubIcon />
      </SocialIconButton>
      <SocialIconButton href="https://linkedin.com" target="_blank">
        <LinkedInIcon />
      </SocialIconButton>
      <SocialIconButton href="/path/to/cv.pdf" target="_blank">
        <DescriptionIcon sx={{ marginRight: 0.5 }} />
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '0.875rem',
          }}
        >
          CV
        </Typography>
      </SocialIconButton>
    </Box>
  );
};

export default LeftHeaderContent;

import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LeftHeaderContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1, // Reduce espacio entre el texto y los iconos
      }}
    >
      <Typography
      className="left-header-content"
      >
        Computer Engineer
      </Typography>
      <IconButton
        href="https://github.com"
        target="_blank"
        sx={{
          color: 'var(--primary-color)',
          '&:hover': {
            color: 'var(--grey-parraf)',
          },
        }}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://linkedin.com"
        target="_blank"
        sx={{
          color: 'var(--primary-color)',
          '&:hover': {
            color: 'var(--grey-parraf)',
          },
        }}
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
};

export default LeftHeaderContent;

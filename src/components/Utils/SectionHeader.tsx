import { Box, Paper, Typography } from '@mui/material';

const SectionHeader = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: any;
  title: string;
  subtitle: string;
}) => (
  <>
    <Box textAlign="center" mb={4} mt={10}>
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
        <Icon sx={{ fontSize: 20, color: 'black', mr: 1 }} />
        <Typography variant="body2" sx={{ color: 'black' }}>
          {title}
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
      {subtitle}
    </Typography>
  </>
);

export default SectionHeader;

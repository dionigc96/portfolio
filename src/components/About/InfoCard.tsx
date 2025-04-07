import { Box, Typography } from '@mui/material';

const InfoCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Box sx={{ textAlign: 'center', maxWidth: 300 }}>
    <Icon sx={{ fontSize: 50, color: 'var(--primary-color)' }} />
    <Typography
      variant="h6"
      gutterBottom
      sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      sx={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      {description}
    </Typography>
  </Box>
);

export default InfoCard;

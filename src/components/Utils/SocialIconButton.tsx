import { IconButton } from '@mui/material';
import React from 'react';

const SocialIconButton = ({ href, target, children }: { href: string; target?: string; children: React.ReactNode }) => (
  <IconButton
    href={href}
    target={target}
    sx={{
      color: 'var(--primary-color)',
      '&:hover': {
        color: 'var(--grey-parraf)',
      },
    }}
  >
    {children}
  </IconButton>
);

export default SocialIconButton;

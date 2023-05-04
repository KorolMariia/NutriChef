import { memo } from 'react';
import { Link } from '@mui/material';

const FooterLink = memo(({ href, ariaLabel, icon }) => {
  return (
    <Link
      href={href}
      variant="body2"
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </Link>
  );
});

export default FooterLink;
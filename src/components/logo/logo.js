import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 87.4 41.5">
        <g fillRule="evenodd" stroke="none" strokeWidth="1">
            <path d="M81.4 6.1C77.5 2.2 71.5 0 66 0S55.4 2.2 51.5 6.1L40.3 17.4 29.2 28.7c-2.1 2.1-4.9 3.3-7.8 3.3s-5.7-1.2-7.8-3.3c-4.3-4.4-4.3-11.4 0-15.8 2.1-2.1 4.9-3.3 7.8-3.3 1.3 0 2.5.2 3.7.6L18 17.4l6.7 6.8L39.2 9.5l-3.4-3.4C32 2.2 26.8 0 21.3 0S9.9 2.2 6 6.1C2.1 10 0 15.2 0 20.8s2.1 10.8 6 14.7c3.9 3.9 9.8 6.1 15.3 6.1s10.6-2.2 14.5-6.1L47 24.1l11.2-11.3c2.1-2.1 4.9-3.3 7.8-3.3 3 0 5.7 1.2 7.8 3.3 4.3 4.4 4.3 11.4 0 15.8-2.1 2.1-4.9 3.3-7.8 3.3-1.3 0-2.5-.2-3.7-.6l7.1-7.1-6.7-6.8L48.2 32l3.4 3.4c4 4 9.3 6.1 14.5 6.1 5.3 0 11.3-2 15.3-6.1 8-8.1 8-21.2 0-29.3z" style={{fill: '#d7b161'}} />
            {/* Additional paths or shapes can follow here. */}
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;

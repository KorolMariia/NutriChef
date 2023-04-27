import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material';

const Loader = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
      direction="row"
    >
      <CircularProgress sx={{ color: theme.palette.secondary.main }} />
    </Stack>
  );
};

export default Loader;
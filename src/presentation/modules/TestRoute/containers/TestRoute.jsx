import { Box, Typography } from '@mui/material';
import { Icons } from '../../../assets';

const TestRoute = () => {
  return (
    <Box>
      <Typography>This is Test Route</Typography>
      <img src={Icons.viteLogo} />
      <img src={Icons.reactLogo} />
    </Box>
  );
};

export default TestRoute;

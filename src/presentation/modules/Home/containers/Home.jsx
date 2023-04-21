import { Box, Divider, Typography } from '@mui/material';
import { CounterA, CounterB } from '../components';
import { Icons } from '../../../assets';

const Home = () => {
  return (
    <Box>
      <Typography>This is home</Typography>
      <img src={Icons.viteLogo} />
      <img src={Icons.reactLogo} />
      <Divider />
      <CounterA />
      <Divider />
      <CounterB />
    </Box>
  );
};

export default Home;

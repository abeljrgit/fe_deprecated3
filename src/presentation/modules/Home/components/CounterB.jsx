import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import {
  onCounterBIncrement,
  onCounterBDecrement,
} from '../../../../domain/actions';

export const CounterB = () => {
  const countB = useSelector((state) => state.counterB);
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography>Count B</Typography>
      <Typography>Count is: {countB}</Typography>
      <Button
        onClick={() => {
          dispatch(onCounterBIncrement(2));
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch(onCounterBDecrement(3));
        }}
      >
        Decrement
      </Button>
    </Box>
  );
};

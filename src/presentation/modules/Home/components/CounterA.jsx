import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import {
  onCounterADecrement,
  onCounterAIncrement,
} from '../../../../domain/actions';

export const CounterA = () => {
  const countA = useSelector((state) => state.counterA);
  const dispatch = useDispatch();

  return (
    <Box>
      <Typography>Count A</Typography>
      <Typography>Count is: {countA}</Typography>
      <Button
        onClick={() => {
          dispatch(onCounterAIncrement(2));
        }}
      >
        Increment
      </Button>
      <Button
        onClick={() => {
          dispatch(onCounterADecrement(3));
        }}
      >
        Decrement
      </Button>
    </Box>
  );
};

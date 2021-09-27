import React from 'react';
import {Box} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const HalfRating = () => {

  return (
    <Box  display= 'flex' flexDirection= 'column' mt={0.5} >
      <Rating name="half-rating" defaultValue={0} precision={0.5} />
    </Box>
  );
}

export default HalfRating;
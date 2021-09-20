import React from 'react';
import Rating from '@mui/lab/Rating';
import useStyles from './ratingStyle';

const HalfRating = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating name="half-rating" defaultValue={0} precision={0.5} />
    </div>
  );
}

export default HalfRating;
import React from 'react';
import {Box, Grid} from '@material-ui/core';
import useStyles from './commentCardStyle';

const CommentCard = (props) => {

  const classes = useStyles();
  
  return(
    <Box display='flex' m='2%' display='flex' fullWidth p={1} borderRadius='10px' boxShadow={3}>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="row">
          <Grid container item xs={12} justifyContent='center'> 
            <Grid container item xs={11} justifyContent='center'>
              <Box mb={4} fontWeight={400} fontSize={22} textAlign={'center'}>Nume Client{props.date}</Box>
            </Grid>
            <Grid container item xs={1} justifyContent='center'>
              <Box fontSize={10} className={'Secondary-color'}>22/10/2021{props.date}</Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent='center' alignItems='center'> 
            <Grid container item xs={3} justifyContent='center'>
              <Box mb={4} fontWeight={400} fontSize={22} textAlign={'center'}>
                <img src={props.image} className={classes.profileImg}/>
              </Box>
            </Grid>
            <Grid container item xs={9} justifyContent='center'>
              <Box fontSize={10}>
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque metus turpis, venenatis elementum ex luctus non. Donec massa augue, porta eget arcu lacinia, ornare elementum nunc.
                </text>
              </Box>
            </Grid>
          </Grid>
      </Grid>
    </Box>
  );
};

export default CommentCard;
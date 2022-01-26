import React, { Fragment } from 'react';
import {Box, Grid, Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import useStyles from './chat-message-style';

const ChatMessage = (props) => {
  
  const classes=useStyles();

  return(
        <Grid container item sm={12} justifyContent={props.justify} style={{paddingTop:'5px', paddingBottom:'5px'}} >
        {props.justify === 'flex-start' ? (
            <Fragment>
                {window.innerWidth>800 ? (
                  <Grid container item sm={2} justifyContent='center'>
                    <Avatar src={props.profileImage} className={classes.profileImg}/> 
                  </Grid>
                ): null}
                <Grid container item xs={5} sm={5} justifyContent='flex-start' style={{minHeight: '60px'}} >
                  <Box border={1} borderRadius={'10px'} maxWidth={'100%'} fontSize={15} fontWeight={500} boxShadow={1} borderColor={'#00000040'} padding={'8px'} style={{overflowWrap: 'break-word'}}>
                    {props.message}
                  </Box>
                </Grid>
                <Grid container item sm={window.innerWidth>800 ? 7 : 12} justifyContent='flex-end'>
                  <Box fontWeight='400' fontSize='12px' fontStyle='italic' textAlign='right' className={'Secondary-color'}>{props.date}</Box>
                </Grid>
            </Fragment>
        ) : (
            <Fragment>
                <Grid container item xs ={5} sm={5} justifyContent='flex-end'>
                  <Box border={1}  borderRadius={'10px'} maxWidth={'100%'} fontSize={15}  fontWeight={500} boxShadow={1} borderColor={'#00000040'} padding={'8px'} style={{overflowWrap: 'break-word'}}>
                    {props.message}
                  </Box>
                </Grid>
                {window.innerWidth>800 ? (
                  <Grid container item sm={2} justifyContent='center'>
                      <Avatar src={props.profileImage} className={classes.profileImg}/>
                  </Grid>
                ): null}
                <Grid container item sm={window.innerWidth>800 ? 7 : 12} alignItems='flex-start' justifyContent='flex-start'>
                  <Box fontWeight='400' fontSize='12px' fontStyle='italic' textAlign='right' className={'Secondary-color'}>{props.date}</Box>
                </Grid>
            </Fragment>
        )}
        </Grid>
  );
};

export default ChatMessage;
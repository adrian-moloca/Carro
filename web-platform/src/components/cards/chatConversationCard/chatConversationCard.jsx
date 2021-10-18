import React from 'react';
import {Box, Grid, ButtonBase } from '@material-ui/core';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import DeleteModal from '../../modals/deleteModal/DeleteModal';
import useStyles from './chatConversationCardStyle';

const ChatConversationCard = (props) => {

  const classes = useStyles();
  
  return(
    <Box display='flex' width='1' mt='5%' fullWidth p={1} borderRadius='10px' boxShadow={3}>
        <Grid container xs={12}>
          <Grid container item xs={2} alignItems='center' justifyContent='center'>
            <img src={props.profileImage} className={classes.profileImg}/>
          </Grid>
          <Grid container item xs={8} justifyContent='center'>
            <ButtonBase disableRipple>
              <Grid container>
                <Grid container item xs={12} alignItems='flex-end' justifyContent='center'>
                  <Box fontWeight='700' fontSize='16px' textAlign='center'>{props.name}</Box>
                </Grid>
                <Grid container item xs={12} justifyContent='center'>
                  <Box fontWeight='200'  fontSize='18px' textAlign='center'>{props.message}</Box>
                </Grid>
              </Grid>
            </ButtonBase>
          </Grid>
          <Grid container item xs={2}>
            <Grid container item xs={12} alignItems='flex-start' justifyContent='flex-end'>
              <DeleteModal/>
            </Grid>
            <Grid container item xs={12} alignItems='flex-end' justifyContent='flex-end'>
              <Box fontWeight='400' fontSize='12px' fontStyle='italic' textAlign='right' className={'Secondary-color'}>{props.date}</Box>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
};

export default ChatConversationCard;
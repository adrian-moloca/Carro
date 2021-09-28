import React from 'react';
import {Box, Grid, Link } from '@material-ui/core';
import GreenCaroButton from '../../buttons/GreenCaroButton/GreenCaroButton';
import DeleteModal from '../../modals/deleteModal/DeleteModal';
import useStyles from './chatConversationCardStyle';

const ChatConversationCard = (props) => {

  const classes = useStyles();
  
  return(
    <Box display='flex' m='2%' fullWidth p={1} borderRadius='10px' boxShadow={3}>
      <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        direction="row">
          <Grid container item xs={12} justifyContent='center'> 
            <Grid container item xs={11} justifyContent='center'>
              <Box mb={1} fontWeight={400} fontSize={22} textAlign={'center'}>Alex</Box>
            </Grid>
            <Grid container item xs={1} justifyContent='flex-end'>
              <DeleteModal/>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent='center' alignItems='center'> 
            <Grid container item xs={5} justifyContent='flex-start'>
              <Box ml={4}>
                <img src={props.image} className={classes.profileImg}  alt={""}/>
              </Box>
            </Grid>
            <Grid container item xs={7} justifyContent='flex-start'>
              <Box>
                <GreenCaroButton>
                  <Link href="/conversations/chat" underline= 'none' color= 'inherit'>
                    Deschide
                  </Link>
                </GreenCaroButton>
              </Box>
            </Grid>
          </Grid>
            <Grid container justifyContent='flex-end'>
              <Box fontSize={14} className={'Secondary-color'}>
                <text>
                  12/06/2021
                </text>
              </Box>
            </Grid>
      </Grid>
    </Box>
  );
};

export default ChatConversationCard;
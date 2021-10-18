import React from "react";
import { Box, Grid, Container} from "@material-ui/core";
import ChatConversationCard from '../../components/cards/chatConversationCard/chatConversationCard';
import PaginationSBD from '../../components/pagination/pagination';
import CarroTextField from '../../components/textField/CarroTextField';
import profileImg from '../../assets/images/photoprofile1.png';
// import SearchIcon from '@material-ui/icons/Search';
// import useStyles from './conversationsStyle';

const Conversations = () =>{

  // const classes = useStyles();

  return(
    <Container className='Primary-container-style'>
      <Grid container justifyContent='center'>
        <Grid container item xs='12' justifyContent='center'S>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Chat</Box>
        </Grid>
        <Grid container item xs={8} >
          <CarroTextField variant="outlined" label="Cauta o conversatie" fullWidth/>
        </Grid>
        <Grid container item xs={8} justifyContent='center'>
            <ChatConversationCard profileImage={profileImg} name='Marius Popescu' message='Lorem Ipsium dolor sit amet.' date='15/10/2021 16:35'/>
        </Grid>
        <Grid container item xs={8}>
          <PaginationSBD/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Conversations;
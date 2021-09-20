import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ChatConversationCard from '../../components/cards/chatConversationCard/chatConversationCard';
import PaginationSBD from '../../components/pagination/pagination';
import CarroTextField from '../../components/textField/CarroTextField'
// import SearchIcon from '@mui/icons-material/Search';
import useStyles from './conversationsStyle';

const Conversations = () =>{

  const classes = useStyles();

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Conversations</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  fullWidth p={1} >
        <Box mx={1} my={6}>
          <Grid item xs={12} >
            <CarroTextField
              variant="outlined"
              label="Cauta o conversatie"
              fullWidth
            />
          </Grid>
        </Box>
        <ChatConversationCard/>
        <ChatConversationCard/>
        <Box mt={3}>
          <PaginationSBD/>
        </Box>
      </Box>
    </Container>
  );
};

export default Conversations;
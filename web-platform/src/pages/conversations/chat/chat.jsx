import React from "react";
import { Box, Grid, Container, Link } from "@material-ui/core";
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
// import useStyles from './chatStyle';

const Chat = () =>{

  // const classes = useStyles();

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Chat</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  fullWidth p={1} >
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Box mt={3}>
            <SecondaryButton variant="outlined" size="large">
              <Link href="/conversations" underline= 'none' color= 'inherit'>
                Inapoi
              </Link>
            </SecondaryButton>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default Chat;
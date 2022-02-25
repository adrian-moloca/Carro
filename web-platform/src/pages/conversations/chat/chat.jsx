import React, {Fragment, useEffect, useState} from "react";
import { Box, Grid, Container } from "@material-ui/core";
import CarroTextField from "../../../components/textField/CarroTextField";
import SeeProfileBtn from "../../../components/buttons/textOnlyButtons/seeProfileBtn/seeProfileBtn";
import { SendSharp } from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";
import SecondaryButton from '../../../components/buttons/secondaryButton/secondaryButton';
import { useHistory } from "react-router-dom";
import ChatMessage from "../../../components/chat-message/chat-message";
import { connect } from "react-redux";
import axios from "axios";
import data from "../../../utils/constants";
import { getChatMessages } from "../../../redux/actions/UserChatActions";
// import useStyles from './chatStyle';

const Chat = ({chatsData, userData, getChatMessages}) =>{

  const history = useHistory();
  // const classes = useStyles();
  const [message, setMessage] = useState('');

  useEffect(()=>{}, [chatsData])

  const sendMessage=(mymessage)=>{
    axios.post(data.baseUrl + '/' + chatsData.currentChat.chatId + '/messages', {
      message: mymessage
    }).then(()=>{setMessage(''); getChatMessages(chatsData.currentChat.chatId, userData.token)}).catch((error)=>alert('error sending message'))
  }

  return(
    <Container className='Primary-container-style'>
      <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Chat</Box>
      <Box m='2%' display='flex' flexDirection='column' justifyContent="center"  fullWidth p={1} >
        <Grid container justifyContent="center" alignItems="center">
          <Grid sm={6} container item justifyContent="center" style={{marginBottom:"15px"}}>
            <Box width={"100%"} border={2} borderColor={'#00b4d8'} borderRadius={"15px"} boxShadow={2} paddingBottom={"8px"}>
              <Grid  container justifyContent="center">
                <Grid sm={12} container item justifyContent="center">
                  <Box fontSize={25} height={45} width={'100%'} textAlign={'center'} paddingTop={'8px'}>{chatsData.currentChat.name.replace(',', '')}</Box>
                </Grid>
                <Grid sm={12} container item justifyContent="center" style={{height:'46vh', paddingBottom:'20px'}}>
                  <Box width={'100%'} height={'46vh'} overflow={'hidden scroll'} paddingY={'10px'}  style={{boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.16)'}}>
                    <Grid container justifyContent="center">
                      {chatsData.messages && chatsData.messages.length > 0 ? (
                        chatsData.messages.map((el)=>
                          <ChatMessage profileImage={el.userId === userData.id ? userData.profileImage : chatsData.currentChat.profileImage}
                                        message={el.message} justifyContent={el.userId === userData.id ? 'flex-end' : 'flex-start'}/>
                        )) : null}
                    </Grid>
                  </Box>
                </Grid>
                <Grid sm={11} container item justifyContent="center" style={{paddingTop:'14px'}}>
                  <CarroTextField  
                      label='Mesajul dumneavoastra'
                      InputProps={{
                        endAdornment: 
                          <InputAdornment position="end">
                            <Fragment>
                              <SeeProfileBtn onClick={()=>sendMessage(message)}>
                                <SendSharp/>
                              </SeeProfileBtn>
                            </Fragment>
                          </InputAdornment>}}
                      fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid sm={12} container item justifyContent="center">
            <SecondaryButton variant="outlined" size="large" onClick={()=>history.push('/conversations')}>
                Inapoi
            </SecondaryButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

const mapStateToProps=(state)=>({chatsData: state.chatsData, userData: state.userData})
const mapDispatchToProps = (dispatch) => ({getChatMessages: (chatId, token) => dispatch(getChatMessages(chatId, token))})
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
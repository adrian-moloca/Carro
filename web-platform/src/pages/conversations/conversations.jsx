import React, {useEffect, useState} from "react";
import { Box, Grid, Container} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ChatConversationCard from '../../components/cards/chatConversationCard/chatConversationCard';
import {Pagination} from '@material-ui/lab';
import CarroTextField from '../../components/textField/CarroTextField';
import usePagination from "../../components/pagination/use-pagination/use-pagination";
import { connect } from "react-redux";
import { getChatMessages } from "../../redux/actions/UserChatActions";
import { setCurrentUserChat } from "../../redux/types/UserChatTypes";
// import SearchIcon from '@material-ui/icons/Search';
// import useStyles from './conversationsStyle';


const Conversations = ({chatsData, userData, getChatMessages, setCurrentUserChat}) =>{

  const[chatsState, setChatsState] = useState(chatsData.chats);
  const conversations = usePagination(chatsState, 3)

  const history = useHistory();
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {setPage(value); conversations.jump(value)};
  // const classes = useStyles();

  useEffect(()=>{}, [chatsData])

  const deleteChat=(index)=>{
    const temp = [...chatsState];
    temp.splice(index, 1);
    setChatsState(temp);
  }

  const goToChat = (chatId, name, profileImage) =>{
    getChatMessages(chatId, userData.token);
    setCurrentUserChat(name, profileImage, chatId)
    history.push('/conversations/chat')
  }

  return(
    <Container className='Primary-container-style'>
      <Grid container justifyContent='center'>
        <Grid container item xs={12} justifyContent='center'>
          <Box mb={2} fontWeight={400} fontSize={21} textAlign={'center'}>Chat</Box>
        </Grid>
        <Grid container item xs={8} >
          <CarroTextField variant="outlined" label="Cauta o conversatie" fullWidth/>
        </Grid>
        {conversations.currentData().map((chat, index)=>
              <Grid container item xs={8} justifyContent='center'>
                  <ChatConversationCard profileImage={"data:image/png;base64," + chat.profileImage} name={chat.driverName === userData.name ? chat.packageUserName : chat.driverName}
                                        message={chat.packageName} date={chat.date} chatClicked={()=>goToChat(chat.id,chat.driverName === userData.name ? chat.packageUserName : chat.driverName, chat.profileImage)} deleteConversation={()=>deleteChat(index)}/>
              </Grid>
        )}
        <Grid container item xs={8}>
          <Box width='1' mt='5%' display='flex' justifyContent='center'>
            <Pagination 
              count={conversations.maxPage} 
              variant="outlined" 
              shape="rounded" 
              page={page} 
              onChange={handleChange}
              size='medium'

            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state =>({chatsData: state.chatsData, userData: state.userData})
const mapDispatchToProps = (dispatch) =>({getChatMessages: (chatId, token) => dispatch(getChatMessages(chatId, token)), setCurrentUserChat: (name, profileImage, chatId)=> dispatch(setCurrentUserChat(name, profileImage, chatId))})

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);
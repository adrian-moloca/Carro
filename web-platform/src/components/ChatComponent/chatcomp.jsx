import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@material-ui/core';
import { Message } from '@material-ui/icons';
import {connect} from 'react-redux';
import { getUserChats } from '../../redux/actions/UserChatActions';

 const ChatButtonVisibility = ({userData, chatsData, getUserChats}) => {

  const [hideBadge, setHideBadge] = useState(false)
  const [unreadMessages, setUnreadMessages] = useState(chatsData.chats && chatsData.chats.length > 0 ? chatsData.chats.filter(el => el.isRead === false) : []);

  useEffect(()=>{
    const unread = chatsData.chats && chatsData.chats.length > 0 ? chatsData.chats.filter(el => el.isRead === false) : [];
    setUnreadMessages(unread)
  }, [chatsData])
  
  useEffect(()=>{
    if(unreadMessages.length>0)
      setHideBadge(false)
    else
      setHideBadge(true)
  }, [unreadMessages])

  return (
    <Box display='flex' alignSelf='center' flexDirection='column' className={"Primary-color"}>
      <Box mr={1}>
        <Link to='/conversations' style={{textDecoration:'none'}}>
          <IconButton className={"Primary-color"} onClick={()=>getUserChats(userData.token)}>
            <Badge color="secondary" badgeContent={unreadMessages.length} invisible={hideBadge}>
              <Message/>
            </Badge>
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => ({
              chatsData: state.chatsData,
              userData : state.userData
            })
const mapDispatchToProps = (dispatch) =>({
            getUserChats: (token) => dispatch(getUserChats(token))
})
export default connect(mapStateToProps, mapDispatchToProps)(ChatButtonVisibility);
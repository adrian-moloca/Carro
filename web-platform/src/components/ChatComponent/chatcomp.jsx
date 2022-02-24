import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@material-ui/core';
import { Message } from '@material-ui/icons';
import {connect} from 'react-redux';

 const ChatButtonVisibility = ({notificationsData, userData}) => {

  const [hideBadge, setHideBadge] = useState(false)
  const [unreadNotifications, setUnreadNotifications] = useState(notificationsData.notifications && notificationsData.notifications.length > 0 ? notificationsData.notifications.filter(el => el.isRead === false) : []);

  useEffect(()=>{
    const unread = notificationsData.notifications && notificationsData.notifications.length > 0 ? notificationsData.notifications.filter(el => el.isRead === false) : [];
    setUnreadNotifications(unread)
  }, [notificationsData])
  
  useEffect(()=>{
    if(unreadNotifications.length>0)
      setHideBadge(false)
    else
      setHideBadge(true)
  }, [unreadNotifications])

  return (
    <Box display='flex' alignSelf='center' flexDirection='column' className={"Primary-color"}>
      <Box mr={1}>
        <Link to='/conversations' style={{textDecoration:'none'}}>
          <IconButton className={"Primary-color"}>
            <Badge color="secondary" badgeContent={unreadNotifications.length} invisible={hideBadge}>
              <Message/>
            </Badge>
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => ({
              notificationsData: state.notificationsData,
              userData : state.userData
            })
export default connect(mapStateToProps, null)(ChatButtonVisibility);
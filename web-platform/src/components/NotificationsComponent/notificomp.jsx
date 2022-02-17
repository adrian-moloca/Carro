import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {connect} from 'react-redux';

 const BadgeVisibility = ({notificationsData, userData}) => {

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
        <Link to='/notifications' style={{textDecoration:'none'}}>
          <IconButton className={"Primary-color"}>
            <Badge color="secondary" badgeContent={unreadNotifications.length} invisible={hideBadge}>
              <NotificationsNoneIcon/>
            </Badge>
          </IconButton>
        </Link>
        {/* <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> */}
      </Box>
    </Box>
  );
}

const mapStateToProps = state => ({
              notificationsData: state.notificationsData,
              userData : state.userData
            })
export default connect(mapStateToProps, null)(BadgeVisibility);
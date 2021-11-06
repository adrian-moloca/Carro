import React, {useState, useEffect, useLayoutEffect} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Box, IconButton } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function BadgeVisibility() {

  const [count, setCount] = useState(1);
  const [unreadNotifications, setUnreadNotifications] = useState(Boolean(localStorage.getItem('unreadNotifications')))

  useEffect(()=>{
      
    window.addEventListener('storage', ()=> setUnreadNotifications(Boolean(localStorage.getItem('unreadNotifications'))))
    return ()=> window.removeEventListener('storage', ()=> setUnreadNotifications(Boolean(localStorage.getItem('unreadNotifications'))))
  }, [])

  return (
    <Box display='flex' alignSelf='center' flexDirection='column' className={"Primary-color"}>
      <Box mr={1}>
        <Link to='/notifications' style={{textDecoration:'none'}}>
          <IconButton className={"Primary-color"} >
            <Badge color="secondary" badgeContent={count} invisible={!unreadNotifications}>
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

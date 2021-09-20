import React from 'react';
import { Button, Box } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import useStyles from './sendMessageBtnStyle';

const SendMessageBtn = () => {

  const classes = useStyles();

  return (
    <Button>
      <Box display='flex' alignItems="center" mt={2} lineHeight="143%" fontSize={12} className={'Primary-color'}>
        <MessageIcon/>
        <p className={classes.messageIconSpacing}>
          Trimite mesaj
        </p>
      </Box>
    </Button>
  );
};

export default SendMessageBtn;

import React from 'react';
import { Button, Box } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';

const SendMessageBtn = () => {

  return (
    <Button>
      <Box display='flex' alignItems="center" mt={2} lineHeight="143%" fontSize={12} className={'Primary-color'}>
        <MessageIcon/>
        <Box ml={1}>
          Trimite mesaj
        </Box>
      </Box>
    </Button>
  );
};

export default SendMessageBtn;

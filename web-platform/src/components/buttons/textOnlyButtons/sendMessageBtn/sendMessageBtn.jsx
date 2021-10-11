import React from 'react';
import { Button, Box } from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import { useTranslation } from "react-i18next";
const SendMessageBtn = () => {
  const { t } = useTranslation();
  return (
    <Button>
      <Box display='flex' alignItems="center" mt={2} lineHeight="143%" fontSize={12} className={'Primary-color'}>
        <MessageIcon/>
        <Box ml={1}>
          {t("SendMessage")}
        </Box>
      </Box>
    </Button>
  );
};

export default SendMessageBtn;

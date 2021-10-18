import React from 'react';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton'
import { Modal, IconButton, Box } from '@material-ui/core';
import {DeleteOutline} from '@material-ui/icons';
import useStyles from './DeleteModalStyle'
import { useTranslation } from "react-i18next";

const DeleteModal = (props) =>  {

  const { t } = useTranslation();
  const classes = useStyles();
  // state & handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { content, btn1Text, btn2Text } = props;

  return (
    <Box>
      <IconButton aria-label="delete" size='small' color="inherit" onClick={handleOpen}>
        <DeleteOutline className={'Pink-carro'}/>
      </IconButton>
      <Modal
        open={open}
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
          <Box fontSize={24} color="#3F3F3F" >{content}</Box>       
          <Box display="flex" mt={3}>
            <Box mr={2}>
              <SecondaryButton variant="outlined" onClick={handleClose}>{btn1Text}</SecondaryButton>
            </Box>
            <Box ml={2}>
              <SecondaryButton variant="contained">{btn2Text}</SecondaryButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteModal;
import React, {Fragment} from 'react';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton'
import { Modal, IconButton, Box, Fade } from '@material-ui/core';
import {DeleteOutline} from '@material-ui/icons';
import useStyles from './DeleteModalStyle'
import { useTranslation } from "react-i18next";

const DeleteModal = (props) =>  {

  const { t } = useTranslation();
  const classes = useStyles();
  // state & handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event) => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    handleClose();
  }
  const { content, btn1Text, btn2Text } = props;

  return (
    <Fragment>
      <IconButton aria-label="delete" size='small' onClick={handleOpen}>
        <DeleteOutline className={'Pink-carro'} fontSize={props.size}/>
      </IconButton>
      <Modal
        open={open}
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Fade in={open} timeout={600}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
            <Box fontSize={24} color="#3F3F3F" >{content}</Box>       
            <Box display="flex" mt={3}>
              <Box mr={2}>
                <SecondaryButton variant="outlined" onClick={handleClose}>{btn1Text}</SecondaryButton>
              </Box>
              <Box ml={2}>
                <SecondaryButton variant="contained" onClick={()=>{props.clickedBtn2(); handleClose();}}>{btn2Text}</SecondaryButton>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default DeleteModal;
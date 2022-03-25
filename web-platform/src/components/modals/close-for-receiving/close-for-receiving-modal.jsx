import React, {Fragment} from 'react';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton'
import { Modal, IconButton, Box, Fade } from '@material-ui/core';
import { Lock } from '@material-ui/icons';
import useStyles from './close-for-receiving-modal-style';
import { useTranslation } from "react-i18next";

const CloseForReceivingModal = (props) =>  {
  const classes = useStyles();
  // state & handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  const { content, btn1Text, btn2Text } = props;

  return (
    <Fragment>
      <IconButton aria-label="close for receiving" aria-roledescription='close for receiving' size='small' onClick={handleOpen}>
        <Lock className={'Pink-carro'} fontSize={props.size}/>
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

export default CloseForReceivingModal;
import React from 'react';
import SecondaryButton from '../../buttons/secondaryButton/secondaryButton'
import { Modal, IconButton, Box } from '@material-ui/core';
import {Delete} from '@material-ui/icons';
import useStyles from './DeleteModalStyle'

const DeleteModal = () =>  {

  const classes = useStyles();
  // state & handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <IconButton aria-label="delete" color="inherit" onClick={handleOpen}>
        <Delete className={'Pink-carro'}/>
      </IconButton>
      <Modal
        open={open}
        className={classes.modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
          <Box fontSize={24} color="#3F3F3F" >Doresti sa stergi?</Box>
          <Box display="flex" mt={3}>
            <Box mr={2}>
              <SecondaryButton variant="outlined" onClick={handleClose}>Anuleaza</SecondaryButton>
            </Box>
            <Box ml={2}>
              <SecondaryButton variant="contained">Stergere</SecondaryButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default DeleteModal;
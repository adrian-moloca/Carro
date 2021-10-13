import React from 'react';
import {FormControlLabel, Switch, Modal, Box} from '@material-ui/core';
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';
import useStyles from '../modals/deleteModal/DeleteModalStyle'
import DeleteModal from '../modals/deleteModal/DeleteModal';

const SwitchSBD = (props) => {

  const classes = useStyles();

  // switch
  const [state, setState] = React.useState({
    checkedA: true ,
    checkedB: false ,
   });
   const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked});
   };

  // modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { content, btn1Text, btn2Text } = props;

  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            onClick={handleOpen}
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"    
            color= "primary"
          />
        }
      /> 
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
}

export default SwitchSBD;
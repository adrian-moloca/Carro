import React, {useState} from 'react';
import {Switch, Modal, Box} from '@material-ui/core';
import SecondaryButton from '../buttons/secondaryButton/secondaryButton';
import GreenCaroButton from '../buttons/GreenCaroButton/GreenCaroButton';
import useStyles from '../modals/deleteModal/DeleteModalStyle'

const SwitchSBD = (props) => {

  const classes = useStyles();

  // switch
  const [toggle, setToggle] = useState(true)
  // modal off
  const [openOff, setOpenOff] = React.useState(false);
  const handleOpenOff = () => setOpenOff(true);
  const handleCloseOff = () => setOpenOff(false);
  // modal on
  const [openOn, setOpenOn] = React.useState(false);
  const handleOpenOn = () => setOpenOn(true);
  const handleCloseOn = () => setOpenOn(false);

  const { contentOff, btn1OffText, btn2OffText, contentOn, btn1OnText, btn2OnText } = props;

  const toggler = (event) => {
    toggle ? setToggle(handleOpenOff) : setToggle(handleOpenOn);
    setToggle({ ...toggle, [event.target.name]: event.target.checked});
  }

  return (
    <Box>
      <Switch
        checked={toggle}
        onChange={toggler}
        name="toggle"
        color= "primary"
      />
      {/* off */}
      <Modal
        open={openOff}
        className={classes.modal}s
        onClose={handleCloseOff}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
          <Box fontSize={24} color="#3F3F3F" >{contentOff}</Box>
          <Box display="flex" mt={3}>
            <Box mr={2}>
              <SecondaryButton variant="outlined" onClick={handleCloseOff}>{btn1OffText}</SecondaryButton>
            </Box>
            <Box ml={2}>
              <SecondaryButton  variant="contained" onClick={()=> {setToggle(false), setOpenOff(false)}}>{btn2OffText}</SecondaryButton>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* on */}
      <Modal
        open={openOn}
        className={classes.modal}
        onClose={handleCloseOn}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center"  className={classes.paper}>
          <Box fontSize={24} color="#3F3F3F" >{contentOn}</Box>
          <Box display="flex" mt={3}>
            <Box mr={2}>
              <SecondaryButton variant="outlined" onClick={handleCloseOn}>{btn1OnText}</SecondaryButton>
            </Box>
            <Box ml={2}>
              <GreenCaroButton variant="contained" onClick={()=> {setToggle(true), setOpenOn(false)}}>{btn2OnText}</GreenCaroButton>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default SwitchSBD;
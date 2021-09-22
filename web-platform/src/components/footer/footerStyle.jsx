import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  paper: {
    backgroundColor: '#000',
    margin: '0',
    color: '#fff',
    fontSize: '17px',
    textAlign:'center',
  },
  mediaButtonsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  footerLinksContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "20"
  },
  footerSeparationLine: {
    border: '1px solid #00B4D8;',
    margin: '15px 0',
    transform: 'rotate(-180deg);',
  },
  noMargin: {
    margin: '0'
  }
}));

export default useStyles;

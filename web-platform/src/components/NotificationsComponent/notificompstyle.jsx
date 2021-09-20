import { makeStyles } from '@mui/styles';
import '../../App.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'column',
    color: '#00B4D8',
  },
  spacing10px: {
    marginRight: 10,
  },
  notificationButtonColor: {
    color: '#00B4D8',
  }
}));

export default useStyles
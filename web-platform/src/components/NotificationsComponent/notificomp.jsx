import React from 'react';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './notificompstyle'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import '../../App.css'

export default function BadgeVisibility() {
  const classes = useStyles();
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <div className={classes.root}>
      <div className={classes.spacing10px}>
        <IconButton className={classes.notificationButtonColor} >
          <Badge color="secondary" badgeContent={count}>
            <NotificationsNoneIcon/>
          </Badge>
        </IconButton>
        {/* <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> */}
      </div>
    </div>
  );
}

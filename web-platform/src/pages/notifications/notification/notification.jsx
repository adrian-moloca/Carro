import React, {useState, useEffect} from "react";
import {Box, Collapse} from '@material-ui/core';
import NotificationsSummary from "./notification-summary/notifications-summary";
import NotificationDetails from "./notification-details/notification-details";
import useStyles from "./notification-style";
import { useTranslation } from "react-i18next";

const Notification = (props) =>{

    const classes = useStyles();
    const { t } = useTranslation();
    const[expanded, setExpanded] = useState(false)
    const[detailsBtn, setDetailsBtn] = useState(t("DriverCardDetailsButton"));
    const[read, setRead] = useState(props.read);
    const[markAsRead, setMarkAsRead] = useState('');
    const[markAsReadColor, setMarkAsReadColor] = useState('');

  useEffect(()=>{
    if(read)
    {
      setMarkAsRead('Marcheaza ca necitit');
      setMarkAsReadColor('Secondary-color');
    }
    else
    {
      setMarkAsRead('Marcheaza ca citit')
      setMarkAsReadColor('Primary-color');
    }
  }, []);

  const handleMarkAsRead= (event)=>{
    const r = read;
    setRead(!r);
    if(r)
    {
      setMarkAsRead('Marcheaza ca citit')
      setMarkAsReadColor('Primary-color');
    }
      else
    {
      setMarkAsRead('Marcheaza ca necitit');
      setMarkAsReadColor('Secondary-color');
    }
    event.stopPropagation()

  }

    const handleDetailsBtn = () =>{
        if(!expanded)
            setDetailsBtn(t("DriverCardLessDetailsButton"))
        else
            setDetailsBtn(t("DriverCardDetailsButton"))
        setExpanded(!expanded)
    }

    return(
      <Box mb={1.5} borderRadius='12px' boxShadow={3} paddingX='20px' paddingY='12px'>
          <NotificationsSummary
                  name={props.name}
                  actionText={props.action}
                  plecare={props.departure}
                  destinatie={props.destination}
                  tipTransport={props.transportType}
                  dataPlecare={props.departureDate}
                  pickUpAdress={props.departureAddress}
                  dropOffAdress={props.destinationAddress}
                  price={props.price}
                  read={props.read}
                  clickedDetails={handleDetailsBtn}
                  detailsBtnText={detailsBtn}
                  markAsReadBtnText={markAsRead}
                  markAsReadColor={markAsReadColor}
                  clickedMarkAsRead={handleMarkAsRead}
          />
          <Collapse in={expanded} timeout={600}>
            <NotificationDetails
                type={props.type}/>
          </Collapse>
        </Box>
    );

}

export default Notification;
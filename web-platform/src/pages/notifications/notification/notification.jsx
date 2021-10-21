import React, {useState, useEffect} from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box} from '@material-ui/core';
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
        <Box mb={1.5} width='1' borderRadius='10px' boxShadow={10}>
            <Accordion className={classes.AccordionBorderRadius} expanded={expanded} onChange={props.handleRead}>
                <AccordionSummary>
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
                </AccordionSummary>
                <AccordionDetails>
                    <NotificationDetails
                        type={props.type}/>
                </AccordionDetails>
            </Accordion>
        </Box>
    );

}

export default Notification;
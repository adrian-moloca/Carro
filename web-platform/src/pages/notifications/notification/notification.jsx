import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box} from '@material-ui/core';
import NotificationsSummary from "./notification-summary/notifications-summary";
import useStyles from "./notification-style";

const Notification = (props) =>{

    const classes = useStyles();

    function getNotificationContent(type){
        switch(type){
            case 'colet livrat':
                return(
                    <div>
                        colet livrat
                    </div>
                );
            case 'colet acceptat':
                return(
                    <div>
                        colet acceptat
                    </div>
                );
            case 'colet refuzat':
                return(
                    <div>
                        colet refuzat
                    </div>
                );
            case 'transport acceptat':
                return(
                    <div>
                        transport acceptat
                    </div>
                );
            case 'transport refuzat':
                return(
                    <div>
                        transport refuzat
                    </div>
                );
            case 'transport anulat':
                return(
                    <div>
                        transport anulat
                    </div>
                );
            default:
                return(
                    <div>
                        unkown type
                    </div>
                );
        }
    }

    return(
        <Box mb={1.5} width='1' borderRadius='10px' boxShadow={10}>
            <Accordion className={classes.AccordionBorderRadius}>
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
                    />
                </AccordionSummary>
                <AccordionDetails>
                    ...
                </AccordionDetails>
            </Accordion>
        </Box>
    );

}

export default Notification;
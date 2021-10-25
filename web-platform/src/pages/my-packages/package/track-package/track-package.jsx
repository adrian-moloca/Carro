import React, {useState, Fragment} from 'react';
import { TrackChanges } from '@material-ui/icons';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import BackdropTrackPackage from '../../../../components/backdrop/track-package/track-package-backdrop';

const TrackPackage = (props) =>{
    const[open, setOpen]=useState(false);

    const handleBtn =(event)=> {
        setOpen(!open)
        event.stopPropagation()
    };
    const handleCloseBd=(event)=>{
        if(typeof(event.target.className) === 'string' )
            if(event.target === document.getElementById('backdrop'))
                setOpen(false)
        event.stopPropagation()
    };
   
    const handleCloseBdByBtn=(event)=>{ 
        setOpen(false)
        event.stopPropagation()
    };


    return (
        <Fragment>
            <BackdropTrackPackage open={open} clicked={handleCloseBd} clickedClose={handleCloseBdByBtn} 
                                  departure={props.departure} destination={props.destination} departureDate={props.departureDate} 
                                  packageLocation={props.packageLocation}/>
            <IconButtonNoVerticalPadding onClick={handleBtn}>
                <TrackChanges className={'Primary-color'}  fontSize='small'/> 
            </IconButtonNoVerticalPadding >
        </Fragment>

    );
}

export default TrackPackage;
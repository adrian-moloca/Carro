import React, {useState} from 'react';
import { Fragment } from 'react';
import { Create } from '@material-ui/icons';
import BackdropEditRide from '../../../../components/backdrop/edit-ride/edit-ride-backdrop';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';


const EditRide = (props) =>{

    const[open, setOpen]=useState(false);

    const handleBtn =(event)=> {
        setOpen(!open)
        event.stopPropagation()
    };
    const handleCloseBd=(event)=>{
        if(event.target.className.includes('backdrop'))
            setOpen(false)
        event.stopPropagation()
    };
   
    const handleCloseBdByBtn=(event)=>{ 
        setOpen(false)
        event.stopPropagation()
    };


    return (
        <Fragment>
            <BackdropEditRide open={open} clicked={handleCloseBd} clickedClose={handleCloseBdByBtn} ride={props.ride}/>
            <IconButtonNoVerticalPadding onClick={handleBtn}>
                <Create className={'Primary-color'} fontSize='small'/> 
            </IconButtonNoVerticalPadding >
        </Fragment>

    );

}

export default EditRide;
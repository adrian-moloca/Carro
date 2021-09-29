import React, {useState} from 'react';
import { Fragment } from 'react';
import { EditOutlined } from '@material-ui/icons';
import BackdropEditDestinatary from '../../../../components/backdrop/edit-package/edit-destinatary-only/edit-destinatary-only';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';


const PartialEditPackage = (props) =>{

    const[open, setOpen]=useState(false);

    const handleBtn =(event)=> {
        setOpen(!open)
        event.stopPropagation()
    };
    const handleCloseBd=(event)=>{
        if(event.target === document.getElementById('backdrop'))
            setOpen(false)
        event.stopPropagation()
    };
   
    const handleCloseBdByBtn=(event)=>{ 
        setOpen(false)
        event.stopPropagation()
    };


    return (
            <IconButtonNoVerticalPadding onClick={handleBtn}>
                <BackdropEditDestinatary open={open} clicked={handleCloseBd} clickedClose={handleCloseBdByBtn} package={props.package}/>
                <EditOutlined className={'Primary-color'}/> 
            </IconButtonNoVerticalPadding >

    );

}

export default PartialEditPackage
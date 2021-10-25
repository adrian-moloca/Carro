import React, {useState} from 'react';
import { Fragment } from 'react';
import { Create } from '@material-ui/icons';
import BackdropEditPackage from '../../../../components/backdrop/edit-package/edit-package-backdrop';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';


const EditOpenPackage = (props) =>{

    const[open, setOpen]=useState(false);

    const handleBtn =(event)=> {
        setOpen(!open)
        event.stopPropagation()
    };
    const handleCloseBd=(event)=>{
        if(typeof(event.target.className) === 'string' )
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
            <BackdropEditPackage open={open} clicked={handleCloseBd} clickedClose={handleCloseBdByBtn} package={props.package}/>
            <IconButtonNoVerticalPadding onClick={handleBtn}>
                <Create className={'Primary-color'} fontSize='small'/> 
            </IconButtonNoVerticalPadding >
        </Fragment>

    );

}

export default EditOpenPackage
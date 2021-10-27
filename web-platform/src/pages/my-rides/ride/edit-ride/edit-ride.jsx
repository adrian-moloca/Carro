import React from 'react';
import EditRideModal from '../../../../components/modals/edit-ride/edit-ride-modal';



const EditRide = (props) =>{

    return (
            <EditRideModal ride={props.ride}/>
    );

}

export default EditRide;
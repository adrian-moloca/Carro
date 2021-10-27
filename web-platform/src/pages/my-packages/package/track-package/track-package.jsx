import React from 'react';
import TrackPackageModal from '../../../../components/modals/track-package/track-package-modal';

const TrackPackage = (props) =>{

    return (
            <TrackPackageModal departure={props.departure} destination={props.destination} departureDate={props.departureDate} 
                            packageLocation={props.packageLocation}/>

    );
}

export default TrackPackage;
import React from 'react';
import EditPackage from '../../../../components/modals/edit-package/edit-package';



const EditOpenPackage = (props) =>{

    function getPositionSecOcc(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }

    return (
            <EditPackage partialEdit={props.partialEdit} id={props.package.id} pickUpAddress={props.package.departureAddress} departureDate={props.package.departureDate} departure={props.package.departure}
                         destinataryAddress={props.package.packageReceiver.destinationAddress} destination={props.package.destination}
                         destinataryPhoneNumber={props.package.packageReceiver.phoneNumber} destinataryName={props.package.packageReceiver.receiverName}
                         packageSize={props.package.packageType} price={props.package.price} weight={props.package.weight} width={String(props.package.dimensions).substring(0, String(props.package.dimensions).indexOf('x'))}
                         length={String(props.package.dimensions).substring(String(props.package.dimensions).indexOf('x')+1, getPositionSecOcc(props.package.dimensions,'x', 2))}
                         height={String(props.package.dimensions).substring(getPositionSecOcc(props.package.dimensions,'x', 2)+1, String(props.package.dimensions).length)}
                         smallDescription={props.package.name} description={props.package.description} isFlammable={props.package.packageSpecialMention.isFlammable}
                         isFragile={props.package.packageSpecialMention.isFragile} isFoodGrade={props.package.packageSpecialMention.isFoodGrade} 
                         isHandleWithCare={props.package.packageSpecialMention.isHandleWithCare} isAnimal={props.package.packageSpecialMention.isAnimal}/>
    );

}

export default EditOpenPackage
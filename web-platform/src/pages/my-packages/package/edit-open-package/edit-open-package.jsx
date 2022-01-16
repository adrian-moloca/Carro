import React from 'react';
import EditPackage from '../../../../components/modals/edit-package/edit-package';



const EditOpenPackage = (props) =>{

    function getPositionSecOcc(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }

    return (
            <EditPackage partialEdit={props.partialEdit} id={props.package.id} pickUpAddress={props.package.packageSender.departureAddress} departureDate={props.package.departureDate} departure={props.package.packageSender.departure}
                         destinataryAddress={props.package.packageReceiver.destinationAddress} destination={props.package.packageReceiver.destination}
                         destinataryPhoneNumber={props.package.packageReceiver.phoneNumber} destinataryName={props.package.packageReceiver.receiverName}
                         packageSize={props.package.packageInfo.packageType} price={props.package.packageInfo.price} weight={props.package.packageInfo.weight} width={String(props.package.packageInfo.dimensions).substring(0, String(props.package.packageInfo.dimensions).indexOf('x'))}
                         length={String(props.package.packageInfo.dimensions).substring(String(props.package.packageInfo.dimensions).indexOf('x')+1, getPositionSecOcc(props.package.packageInfo.dimensions,'x', 2))}
                         height={String(props.package.packageInfo.dimensions).substring(getPositionSecOcc(props.package.packageInfo.dimensions,'x', 2)+1, String(props.package.packageInfo.dimensions).length)}
                         smallDescription={props.package.packageInfo.name} description={props.package.packageInfo.description} isFlammable={props.package.packageSpecialMention.isFlammable}
                         isFragile={props.package.packageSpecialMention.isFragile} isFoodGrade={props.package.packageSpecialMention.isFoodGrade} 
                         isHandleWithCare={props.package.packageSpecialMention.isHandleWithCare} isAnimal={props.package.packageSpecialMention.isAnimal}/>
    );

}

export default EditOpenPackage
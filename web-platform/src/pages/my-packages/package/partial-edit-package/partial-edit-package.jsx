import React from 'react';
import EditDestinatary from '../../../../components/modals/edit-package/edit-destinatary-only/edit-destinatary-only';



const PartialEditPackage = (props) =>{
    return  <EditDestinatary package={props.package}/>

}

export default PartialEditPackage
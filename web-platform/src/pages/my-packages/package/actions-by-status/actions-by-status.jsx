import React, {Fragment} from 'react';
import EditOpenPackage from '../edit-open-package/edit-open-package';
import TrackPackage from '../track-package/track-package';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { HighlightOff } from '@material-ui/icons';
import DeleteModal from '../../../../components/modals/deleteModal/DeleteModal';
import CloseItemModal from '../../../../components/modals/close-ride/close-item-modal';
import {useTranslation} from "react-i18next";

const ActionsByStatus = (props) =>{

  const {t} = useTranslation();

    switch(props.status){
        case 1:
            return(
              <Fragment>
                <EditOpenPackage package= {props.package}/>
                <CloseItemModal  content={t('ClosePackage')} btn1Text={t('Back')}  btn2Text={t('CloseButton')} clickedBtn2={props.closePackageClicked} size='small'/>
                <DeleteModal content={t('VerifyDeletePackage')} btn1Text={t('Back')} btn2Text={t('DeleteButton')} clickedBtn2={props.deletePackageClicked} size='small'/>
              </Fragment>
            );
          case 2:
              return(
                <Fragment>
                    <EditOpenPackage package= {props.package} partialEdit={true}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />
                </Fragment>
              );
          case 3:
              return(
                <Fragment>
                    <EditOpenPackage package= {props.package} partialEdit={true}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />  
                </Fragment>
              );
          case 4:
            return(
                <Fragment>
                     
                </Fragment>
          );
          case 5:
            return(
                <Fragment>
                     
                </Fragment>
              );
          default:
              return('Unkown status');
    }
}

export default ActionsByStatus;
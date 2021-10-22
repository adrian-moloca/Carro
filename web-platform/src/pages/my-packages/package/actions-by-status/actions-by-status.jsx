import React, {Fragment} from 'react';
import EditOpenPackage from '../edit-open-package/edit-open-package';
import TrackPackage from '../track-package/track-package';
import PartialEditPackage from '../partial-edit-package/partial-edit-package';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { Delete, HighlightOff } from '@material-ui/icons';
import {useTranslation} from "react-i18next";

const ActionsByStatus = (props) =>{

  const {t} = useTranslation();

    switch(props.status){
        case t('Open'):
            return(
              <Fragment>
                <EditOpenPackage package= {props.package}/>
                <IconButtonNoVerticalPadding onClick={props.closePackageClicked}>
                      <HighlightOff className={'Pink-carro'} fontSize='small'/>
                </IconButtonNoVerticalPadding>
                <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                      <Delete className={'Pink-carro'} fontSize='small'/>
                </IconButtonNoVerticalPadding>
              </Fragment>
            );
          case t('Taken'):
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />
                </Fragment>
              );
          case t('InTransit'):
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />  
                </Fragment>
              );
          case t('Closed'):
            return(
                <Fragment>
                    
                </Fragment>
              );
          case t('Delivered'):
            return(
                <Fragment>
                    
                </Fragment>
          );
          default:
              return('Unkown status');
    }
}

export default ActionsByStatus;
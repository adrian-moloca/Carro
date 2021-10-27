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
        case 1:
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
          case 2:
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />
                </Fragment>
              );
          case 3:
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}
                    />  
                </Fragment>
              );
          case 5:
            return(
                <Fragment>
                    
                </Fragment>
              );
          case 4:
            return(
                <Fragment>
                    
                </Fragment>
          );
          default:
              return('Unkown status');
    }
}

export default ActionsByStatus;
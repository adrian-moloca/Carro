import React, {Fragment} from 'react';
import EditOpenPackage from '../edit-open-package/edit-open-package';
import TrackPackage from '../track-package/track-package';
import PartialEditPackage from '../partial-edit-package/partial-edit-package';
import IconButtonNoVerticalPadding from '../../../../components/buttons/icon-button/icon-button-no-vertical-padding/icon-button-no-vertical-padding';
import { Delete } from '@material-ui/icons';

const ActionsByStatus = ({status, props}) =>{

    switch(status){
        case 'Deschis':
            return(
              <Fragment>
                <EditOpenPackage package= {props.package}/>
                <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                      <Delete className={'Pink-carro'}/>
                </IconButtonNoVerticalPadding>
              </Fragment>
            );
          case 'Luat':
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}/>
                    <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                        <Delete className={'Pink-carro'}/>
                    </IconButtonNoVerticalPadding>
                </Fragment>
              );
          case 'In livrare':
              return(
                <Fragment>
                    <PartialEditPackage package= {props.package}/>
                    <TrackPackage departure={props.departure} destination={props.destination} 
                                  departureDate={props.departureDate} packageLocation={props.packageLocation}/>  
                    <IconButtonNoVerticalPadding onClick={props.deletePackageClicked}>
                        <Delete className={'Pink-carro'}/>
                    </IconButtonNoVerticalPadding>
                </Fragment>
              );
          default:
              return('Unkown status');
    }
}

export default ActionsByStatus;
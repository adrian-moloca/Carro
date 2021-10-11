import React from 'react';
import DeleteModal from '../modals/deleteModal/DeleteModal';
import {FormControlLabel, Switch} from '@material-ui/core';

const SwitchSBD = (props) => {

  const [stateCheckedPremimum, setStateCheckedPremimum] = React.useState({
    checkedPremiumA: true,
    checkedPremiumB: false,
  });
  const handleChangePremium = (event) => {
    setStateCheckedPremimum({ ...stateCheckedPremimum, [event.target.namePremium]: event.target.checkedPremium });
  };

  const [stateCheckedValidate, setStateCheckedValidate] = React.useState({
    checkedValidateA: true,
    checkedValidateB: false,
  });
  const handleChangeValidate = (event) => {
    setStateCheckedValidate({ ...stateCheckedValidate, [event.target.nameValidate]: event.target.checkedValidate });
  };

  return (
      <FormControlLabel
        control={
          <Switch
            checkedPremium={stateCheckedPremimum.checkedPremiumB}
            onChangePremium={handleChangePremium}
            checkedValidate={stateCheckedValidate.checkedValidateB}
            onChangeValidate={handleChangeValidate}
            namePremium="checkedPremiumB"
            nameValidate="checkedValidateB"
            color="primary"
          />
        }
      />

  );
}

export default SwitchSBD;
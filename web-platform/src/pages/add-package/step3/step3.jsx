import React, {Fragment, useState} from "react";
import { Box, Grid} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Package from './package';
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import SecondaryButton from "../../../components/buttons/secondaryButton/secondaryButton";
import { useTranslation } from 'react-i18next';

function renderPackages () {
    return (<Package/>);
};

const StepThree = (props) =>{
    const { t } = useTranslation();
    const[numberOfPackages, setNumberOfPackages] = useState(1);

    const[packages, setPackages] = useState([1,]);

    const errorMessage =()=> {
        return(
            <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>
               {t('ErrorMessage')}
            </Box>
        );
    }

    const increaseNumberOfpackages = () =>{
        const prevNumber = numberOfPackages;
        setNumberOfPackages(prevNumber+1);
        const temp = packages; 
        temp.push(prevNumber+1);
        setPackages(temp);
    }

    const deletePackage = (index) =>{
        const temp = packages.map((pack, i)=> {
            if(i>index)
                return pack-1;
            else
                return pack
        });
        temp.splice(index, 1);
        setNumberOfPackages(temp.length);
        setPackages(temp);
    }


    return(
        <Box display='flex' flexDirection='column' justifyContent='center'>
          {numberOfPackages===packages.length ? (
              packages.map((pack, index)=>
                  <Box key={index} mt='5%' display='flex' flexDirection ='column' alignItems='center' fontSize={18} fontWeight={400}>
                      {pack !==1 ? ( 
                      <Box display='inline-flex' flexDirection='row' justifyContent='space-between' mb={3} width='80%'>
                            {t('AdditionalPackage')}
                          <Box display='flex' width='15%' justifyContent='flex-end'>
                              <SecondaryButton onClick={()=>deletePackage(index)} size='small' variant='outlined' fullWidth>{t('DeleteButton')}</SecondaryButton>
                            </Box>
                      </Box> ) : null}  
                    {renderPackages()}
                  </Box>
                  )) : (<Fragment>
                            {errorMessage()}
                        </Fragment>)}
          <Grid container justifyContent='flex-end'>
               <Box mt={3}>
                   <PrimaryButton size='small' variant='outlined' onClick={increaseNumberOfpackages}>{t('AddPackageButton')}</PrimaryButton>
                </Box>
          </Grid>
      </Box>
    );
};

export default StepThree;
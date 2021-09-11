import React, {Fragment, useState} from "react";
import { Box, Grid, Button} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Package from './package';
import SecondaryButton from "../../../components/buttons/secondaryButton/secondaryButton";

function renderPackages () {
    return (<Package/>);
};

const StepThree = (props) =>{

    const[numberOfPackages, setNumberOfPackages] = useState(1);

    const[packages, setPackages] = useState([1,]);

    const errorMessage =()=> {
        return(
            <Box display='flex' justifyContent='center' fontSize={22} fontWeight={400}>
                A aparut o problema! Va rugam sa reincarcati pagina.
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
        console.log(temp);
    }


    return(
        <Box display='flex' flexDirection='column' justifyContent='center'>
          {numberOfPackages===packages.length ? (
              packages.map((pack, index)=>
                  <Box mt='5%' display='flex' flexDirection ='column' ustifyContent='center' fontSize={18} fontWeight={400}>
                      {pack !==1 ? ( 
                      <Box display='inline-flex' flexDirection='row' justifyContent='center' mb={3}>
                            Pachet suplimentar
                          <Box display='flex' width='100%' justifyContent='flex-end'><SecondaryButton onClick={()=>deletePackage(index)} size='small' variant='outlined'>STERGE</SecondaryButton></Box>
                      </Box> ) : null}  
                    {renderPackages()}
                  </Box>
                  )) : (<Fragment>
                            {errorMessage()}
                        </Fragment>)}
          <Grid container xs={12} justifyContent='flex-end'>
               <Grid item spacing={10}><Button startIcon = {<Add/>} variant='default' className='Primary-color' onClick={increaseNumberOfpackages}>Add package</Button></Grid>
          </Grid>
      </Box>
    );
};

export default StepThree;
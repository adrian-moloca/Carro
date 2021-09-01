import React from 'react'
import { Button } from '@material-ui/core'
import classes from '../../../App.css'



export default primaryButton = () => {
    return (

        <Button variant = 'contained' className = {classes.primary-button}>
            {props.children}
        </Button>

    
    
    )
}
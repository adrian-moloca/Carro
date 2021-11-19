import React from 'react';

export default function passwordValidator(password){
    const passwordFormat =  /^(?=.*\d)(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{8,20}$/
    if(passwordFormat.test(password) || String(password).length==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
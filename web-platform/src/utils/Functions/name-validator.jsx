import React from 'react';

export default function nameValidator(name){
    const nameFormat = /^[a-zA-Z]+$/
    if(nameFormat.test(name) || String(name).length==0)
    {
        return false;
    }
    else
    {   
        return true;
    }
}
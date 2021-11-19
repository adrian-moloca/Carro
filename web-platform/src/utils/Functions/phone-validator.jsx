import React from 'react';

export default function phoneValidator(phone){
    const phoneFormat =  /^[0-9].{9}$/
    if(phoneFormat.test(phone) || String(phone).length==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
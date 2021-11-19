import React from 'react';

export default function mailValidator(mail){
    const mailFormat = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if(mailFormat.test(mail) || String(mail).length==0)
    {
        return false;
    }
    else
    {
        return true;
    }
}
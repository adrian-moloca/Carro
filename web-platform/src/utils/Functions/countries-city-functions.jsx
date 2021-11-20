import React from 'react';
import { Country, City }  from 'country-state-city';

export function getCountries(){
    const countries = [];
    Country.getAllCountries().map((country)=>(countries.push(country.name)));
    return countries;
}

export function getCountryIsoCode(selCountry){
    let iso = '';
    Country.getAllCountries().map((country)=>{
        if(country.name==selCountry)
            iso = country.isoCode;
    })
    return iso;
}
export function getCities(country){
    const cities = [];
    const countryIso = getCountryIsoCode(country);
    City.getCitiesOfCountry(countryIso).map((city)=>(cities.push(city.name)));
    return cities;
}



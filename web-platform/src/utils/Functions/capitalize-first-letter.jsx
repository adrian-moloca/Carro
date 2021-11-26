export function capitalizeFirstLetter(myString){
    const myStringLowerCase = String(myString).toLowerCase();
    return (String(myStringLowerCase).charAt(0).toUpperCase() + String(myStringLowerCase).slice(1))
}
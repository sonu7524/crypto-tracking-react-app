export const convertNumbers = (num) => {

    const number = num.toLocaleString();
    const numberArray = number.split(",");
    //hunderds
    if(numberArray.length === 1) return numberArray[0];
    //thousands
    else if(numberArray.length === 2) return numberArray[0] + "." + numberArray[1].slice(0, 2)+"K";
    //millions
    else if(numberArray.length === 3) return numberArray[0] + "." + numberArray[1].slice(0, 2)+"M";
    //billions
    else if(numberArray.length === 4) return numberArray[0] + "." + numberArray[1].slice(0, 2)+"B";
    //trillions
    else if(numberArray.length === 5) return numberArray[0] + "." + numberArray[1].slice(0, 2)+"T";
};
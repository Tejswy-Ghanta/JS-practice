function calcBMI(h,w){
    return w/(h**2)
}

let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;
let msg='';

let marksBMI = calcBMI(markHeight,markWeight);
let johnsBMI = calcBMI(johnHeight,johnWeight);

if(marksBMI > johnsBMI){
    msg = `Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI} `;
}
else{
    msg = `John's BMI ${johnsBMI} is equal to or higher than Mark's BMI ${marksBMI} `;
}

console.log(msg);
const mark = {
    name: 'Mark Miller',
    w : 78,
    h : 1.69
}

const John = {
    name:'John Smith',
    w:92,
    h:1.95
}

function calcBMI(o){
    return o.w/(o.h**2);
}

let marksBMI = calcBMI(mark);
let johnsBMI = calcBMI(John);

if(marksBMI > johnsBMI){
    msg = `Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI} `;
}
else{
    msg = `John's BMI ${johnsBMI} is equal to or higher than Mark's BMI ${marksBMI} `;
}

console.log(msg);
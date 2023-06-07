function calcBMI(h,w){
    return w/(h**2)
}

let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;

if(calcBMI(markHeight,markWeight) > calcBMI(johnHeight,johnWeight)){
    console.log('Mark has higher BMI than John');
}
else{
    console.log('John has higher BMI than Mark');
}


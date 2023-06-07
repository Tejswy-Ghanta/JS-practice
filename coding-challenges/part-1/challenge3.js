function calcAvg(l){
    let total=0;
    for(var i=0;i<l.length;i++){
        total = total+l[i];
    }

    return total/3;
}

let dolphins = [97, 112,101];
let koalas = [109, 95,106];

let dolphins_avg = calcAvg(dolphins);
let koalas_avg = calcAvg(koalas);
console.log(dolphins_avg,koalas_avg);

if(dolphins_avg > koalas_avg & dolphins_avg>100){
    console.log('Dolphins WINN!');
}
else if(koalas_avg > dolphins_avg & koalas_avg>100){
    console.log('Koalas WINN!');
}
else if(dolphins_avg < 100 & koalas_avg<100){
    console.log('No one WIN!');
}
else{
    console.log("It's a draw between Koalas and Dolphins");
}




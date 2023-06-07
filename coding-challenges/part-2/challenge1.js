let calcAvg = (s1,s2,s3) => (s1+s2+s3)/3;

let ds1=85,ds2=54,ds3=41;
let ks1=23,ks2=34,ks3=27;

let dAvg = calcAvg(ds1,ds2,ds3);
let kAvg = calcAvg(ks1,ks2,ks3);

function checkWinner(dAvg,kAvg){
    let msg;
    if(dAvg >= kAvg*2){
        msg = `Dolphins win (${dAvg} vs ${kAvg})`;
    }
    else if(kAvg >= dAvg*2){
        msg = `Koalas win (${kAvg} vs ${dAvg})`;
    }
    else{
        msg = `${kAvg} vs ${dAvg}`;
    }

    return msg;
}

console.log(checkWinner(dAvg,kAvg));
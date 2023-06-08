function calcTip(bill){
    return (bill>=50 && bill<=300) ? (bill*0.15) : (bill*0.2);
}

let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];

let totals = [];

for(var i=0;i<bills.length;i++){
    tips[i]=calcTip(bills[i]);
    totals[i]=bills[i]+tips[i];
}

// let msg = `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;

console.log(totals);

//bonus
let tot=0;
for(var i=0;i<bills.length;i++){
    tot = tot+bills[i];
}

console.log('Average total -',tot/bills.length);
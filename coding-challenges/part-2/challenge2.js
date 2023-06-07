function calcTip(bill){
    return (bill>=50 && bill<=300) ? (bill*0.15) : (bill*0.2);
}

let bills=[125,555,43];

let tips = bills.map(calcTip);
console.log(tips);

let totals = bills.map((n,i,t)=>{return bills[i]+tips[i]});

// let msg = `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;

console.log(totals);
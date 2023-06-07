let bill=430;
let tip = 0.0;
tip = (bill>=50 && bill<=300) ? (bill*0.15) : (bill*0.2);

let total = bill + tip;

let msg = `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`;

console.log(msg);
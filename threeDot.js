const age=[12,14,15,16];
const age2=[15,16,18];
const age3=[32,29,28];

const allAges2=age.concat(age2).concat(age3);
const allage=[...age,...age2,...age3];
console.log(allage);
const total=[360,561,361];
const maximun=Math.max(...total);
console.log(maximun);
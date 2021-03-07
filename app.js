// днк AGTC
// днк AGUC

// G -> C
// C -> G
// T -> A
// A -> U


const DNK = 'AATGAAC';

function getRNKFromDNK(dnk) {
 

  const rnk = dnk.split('');

 

  for (let index in rnk) {
    if (rnk[index] === 'A') {
      rnk[index] = 'U';
    } else if (rnk[index] === 'G') {
      rnk[index] = 'C'
    } else if (rnk[index] === 'T') {
      rnk[index] = 'A'
    } else if (rnk[index] === 'C') {
      rnk[index] = 'G'
    }
  }

  return rnk.join('');
}

const RNK = getRNKFromDNK(DNK);


console.log('DNK :>> ', DNK);
console.log('RNK :>> ', RNK);

console.log('result :>> ', "UUACUUG");

import './index.css';

import numeral from 'numeral';

const myBalance = numeral(100000).format('$0,000');
console.log(`I would have ${myBalance} balance in my account!`);

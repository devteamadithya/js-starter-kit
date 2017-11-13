//we are ignoring all console warnings to file level to eslint.
/* eslint-disable no-console*/
import './index.css';

import numeral from 'numeral';

const myBalance = numeral(100000).format('$0,000');

console.log(`I would have ${myBalance} balance in my account!`);

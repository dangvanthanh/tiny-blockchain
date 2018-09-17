const Blockchain = require('./blockchain');
const Transaction = require('./transaction');

let tinyCoin = new Blockchain();

tinyCoin.createTransaction(new Transaction('hue', 'saigon', 100));
tinyCoin.createTransaction(new Transaction('saigon', 'hue', 50));

console.log('\nStarting the miner...');
tinyCoin.minePendingTransactions('address');

console.log('\nBalance is', tinyCoin.getBalanceOfAddress('address'));

console.log('\n Starting the miner again...');
tinyCoin.minePendingTransactions('address');

console.log('\nBalance is', tinyCoin.getBalanceOfAddress('address'));

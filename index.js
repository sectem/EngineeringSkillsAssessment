const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({}));
console.log(deterministicPartitionKey({data:'A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.A quick brown fox jumps over a lazy dog.'}));
console.log(deterministicPartitionKey({data:'A quick brown fox jumps over a lazy dog.'}));
console.log(deterministicPartitionKey('A quick brown fox jumps over a lazy dog.'));
console.log(deterministicPartitionKey(null));
console.log(deterministicPartitionKey({partitionKey:'2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22'}));
console.log(deterministicPartitionKey({partitionKey:null}));
console.log(deterministicPartitionKey({data:'I am powerful data', partitionKey:'2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22'}));


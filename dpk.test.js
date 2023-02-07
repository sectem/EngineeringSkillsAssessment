const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when given null as input", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal 'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862' when given empty object input", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the literal length of 128 with any object provided", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toHaveLength(128)
  });

  it("Returns the specific literal if partitionKey is provided", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:'2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22'});
    expect(trivialKey).toEqual('2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22')
  });

  it("Returns the specific literal if partitionKey is provided with other data as well", () => {
    const trivialKey = deterministicPartitionKey({candidate:'i can be candidate',partitionKey:'2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22'});
    expect(trivialKey).toEqual('2664f2c750b7fe3883ccff42479970520e203fb5e9b122d7a8fe390eb5dceb7ad39148d4572a4adf0915cea69bf5e0e4e5d3a0b5cf280eab342e13fc0d0c4e22')
  });

  it("Returns the null if partitionKey is provided with null value", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:null});
    expect(trivialKey).toEqual('null')
  });

  it("Returns the literal different for different entries", () => {
    const trivialKeyOld = deterministicPartitionKey("a");
    const trivialKey = deterministicPartitionKey("b");
    expect(trivialKeyOld===trivialKey).toBeFalsy()
  });

});

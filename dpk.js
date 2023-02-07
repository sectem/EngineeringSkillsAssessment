const crypto = require("crypto");

exports.deterministicPartitionKey = (object) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (!!object) { // to makesure there are values in object
    if (object.hasOwnProperty('partitionKey')) { // to verify there is a named partition key inside object
      candidate = object.partitionKey;
    } else {
      const data = JSON.stringify(object);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
  /***
   Previously variable name 'event' is creating confusion because at first impression it was looking like its like a
   enentHandler. So renamed the variable name to 'object' clear out that confusion.

   On line 8: I have addedd !! to make sure the value is there inside the object because of empty object the condition was
   processing below code

   I removed extra "if (candidate)" condition because candidate was undefined at this point and if it was assigned value
   before no need to check it because it will always be undefined



   ***/
};

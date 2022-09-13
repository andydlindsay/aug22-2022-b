"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bytes convert it to relevant size in B/KB/MB/GB/TB.
Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/

const filesize = function(bytes) {
  let copy = bytes;

  // create an array of "sizes"
  const sizes = ['B', 'kB', 'MB', 'GB'];

  // iterate through the sizes
  for (const size of sizes) {
    // if bytes is less than 1000, 
    if (copy < 1000) {
      // if yes, we have found the size; return
      const output = `${copy}${size}`; // "1.5MB"
      return output;
    }

    // if no, divide bytes by 1000
    // bytes = bytes / 1000;
    copy /= 1000;
  }

  // it must be TB; return the bytes + "TB"
  return `${copy}TB`;
};

// Don't change below:
module.exports = { filesize };

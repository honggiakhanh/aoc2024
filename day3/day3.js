const fs = require("fs");

let data = fs.readFileSync("day3input.txt", "utf8");

let total = 0;

for (const match of data.matchAll(/(mul)\((\d{1,3})\,(\d{1,3})\)/gm)) {
  total += match[2] * match[3];
}

console.log(total);

let total2 = 0;

data += "do()";

data = data.replace(/don't\(\).+?do\(\)/gs, "");

for (const match of data.matchAll(/(mul)\((\d{1,3})\,(\d{1,3})\)/gm)) {
  total2 += match[2] * match[3];
}

console.log(total2);

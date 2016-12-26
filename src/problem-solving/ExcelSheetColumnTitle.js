const printCharacter = n => String.fromCharCode(n);

const normalize = (n) => {
  const r1Low = 1;
  const r2Low = 65;
  return r2Low + (n - r1Low);
};

export default function ExcelSheetColumnTitle (n) {
  const output = [];
  const cycleNumber = 26;
  while (n > 0) {
    const remainder = n % cycleNumber;
    output.push(remainder || cycleNumber);
    n = remainder ? (n / cycleNumber >> 0) : (n / cycleNumber >> 0) - 1;
  }
  return output.map(o => printCharacter(normalize(o))).reverse().join('');
}


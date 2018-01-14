// https://www.hackerrank.com/challenges/gridland-metro/problem
// this deals with the problem of merging overlapping intervals

const BigNumber = require('bignumber.js');

export default function GridlandMetro (n, m, k, tracks) {
  // aggregate all the train tracks by row
  const rows = tracks.reduce((acc, t) => {
    const row = t[0];
    const bounds = t.slice(1);
    acc[row] = acc[row] || [];
    acc[row].push(bounds);
    return acc;
  }, {});
  // rows is a hash of all cells
  const final = Object.keys(rows).reduce(
    (acc, rowId) => {
      if (rows[rowId].length === 1) {
        acc.count = acc.count
          .plus(new BigNumber(rows[rowId][0][1]))
          .minus(new BigNumber(rows[rowId][0][0]))
          .plus(1);
        return acc;
      }
      // else combine and then add
      const sorted = rows[rowId].sort((a, b) => a[0] - b[0]);
      const mergedIntervals = sorted.reduce(
        (ac, i, index) => {
          if (index === 0) {
            ac.last = i;
            ac.merged.push(i);
            return ac;
          }
          // no overlapping
          if (ac.last[1] < i[0]) {
            ac.last = i;
            ac.merged.push(i);
            return ac;
          }
          // overlapping, check only ends now
          if (i[1] >= ac.last[1]) {
            ac.last = [ac.last[0], i[1]];
            ac.merged[ac.merged.length - 1] = [ac.last[0], i[1]];
            return ac;
          }
          return ac;
        },
        { last: null, merged: [] },
      );
      if (mergedIntervals && mergedIntervals.merged) {
        acc.count = acc.count.plus(
          mergedIntervals.merged.reduce((t, i) => {
            t = t.plus(i[1] - i[0] + 1);
            return t;
          }, new BigNumber(0)),
        );
      }
      return acc;
    },
    { count: new BigNumber(0) },
  );
  const row = new BigNumber(n);
  const col = new BigNumber(m);
  const totalCells = row.times(col);
  const remaining = totalCells.minus(final.count);
  return remaining.toString();
}

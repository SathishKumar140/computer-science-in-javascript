export default function CoinChange (coinSet = [], m, amount) {
  if (amount < 0 || m <= 0) return 0;
  if (amount === 0) return 1;
  return CoinChange(coinSet, m - 1, amount) + CoinChange(coinSet, m, amount - coinSet[m - 1]);
}

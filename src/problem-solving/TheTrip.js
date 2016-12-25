export default function Trip (tripDetails) {
  return tripDetails.map((trip) => {
    const totalExpenditure = trip.expenses
      .reduce((prev, curr) => prev + curr, 0);
    const average = totalExpenditure / trip.people;
    const delta = trip.expenses.map(e => e - average);
    const positiveDifferences = delta
      .filter(d => d > 0)
      .reduce((prev, curr) => prev + curr, 0);

    return positiveDifferences;
  });
}


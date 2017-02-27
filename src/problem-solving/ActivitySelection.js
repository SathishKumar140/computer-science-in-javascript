// n -> number of activies
// startArray -> start time of each activity
// endArray -> end time of each activity

export default function ActivitySelection (startArray = [], endArray = []) {
  const activities = startArray.reduce((prev, curr, i) => (
    [...prev, { start: curr, end: endArray[i], index: i }]
  ), []);

  const sortedActivities = activities.slice().sort((a, b) => a.end - b.end);

  let lastActivitySelectedIndex = 0; // to keep track of which activity was last selected

  return [
    sortedActivities[0],
    ...sortedActivities.filter((a, i) => {
      // first element is already added,
      // so it'll return false when i === 0
      if (i && (a.start >= sortedActivities[lastActivitySelectedIndex].end)) {
        lastActivitySelectedIndex = i;
        return true;
      }
      return false;
    }),
  ].map(a => a.index);
}

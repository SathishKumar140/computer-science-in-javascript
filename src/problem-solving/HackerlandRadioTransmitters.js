// https://www.hackerrank.com/challenges/hackerland-radio-transmitters/problem

export default function HackerlandRadioTransmitters (houseArr = [], range) {
  const houses = houseArr.sort((a, b) => a - b);
  const totalHouses = houses.length;
  let i = 0;
  let transmitters = 0;
  let loc = 0;
  while (i < totalHouses) {
    transmitters++;
    loc = houses[i] + range; // keep it furthest away to the right

    // find the house to the right in the above range
    while (i < totalHouses && loc >= houses[i]) i++;

    // place the transmitter
    i--;

    // update location to the right again
    loc = houses[i] + range;

    // find the house in the above range
    while (i < totalHouses && loc >= houses[i]) i++;
  }

  return transmitters;
}

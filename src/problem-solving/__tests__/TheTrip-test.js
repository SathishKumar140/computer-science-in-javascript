import expect from 'expect';

import Trip from '../TheTrip';

describe('Trip', () => {
  it('works', () => {
    const tripDetails = [
      {
        people: 3,
        expenses: [10, 20, 30],
      },
      {
        people: 4,
        expenses: [15, 15, 3, 3],
      },
    ];
    const output = Trip(tripDetails);
    expect(output).toEqual([10, 12]);
  });
  it('works again', () => {
    const tripDetails = [
      {
        people: 3,
        expenses: [10, 20, 30],
      },
      {
        people: 4,
        expenses: [15, 15, 3, 3],
      },
      {
        people: 5,
        expenses: [0, 0, 0, 0, 0],
      },
      {
        people: 3,
        expenses: [10000, 9968, 0],
      },
    ];
    const output = Trip(tripDetails);
    expect(output).toEqual([
      10, 12, 0, 6656,
    ]);
  });
  it('works yet again', () => {
    const tripDetails = [
      {
        people: 3,
        expenses: [10, 20, 30],
      },
      {
        people: 4,
        expenses: [15, 15, 3, 3],
      },
      {
        people: 5,
        expenses: [5622, 4400, 3998, 102, 100000],
      },
    ];
    const output = Trip(tripDetails);
    expect(output).toEqual([
      10, 12, 77175.6,
    ]);
  });
});


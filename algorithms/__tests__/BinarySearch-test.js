import expect from 'expect';
import BinarySearch from '../BinarySearch';

describe('Binary Search', () => {

	it('returns -1 if not found in sorted even array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 9)).toEqual(-1);
	});

	it('returns fine if item is first element in array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 0)).toEqual(0);
	});

	it('returns fine if item is mid element in even array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 8)).toEqual(4);
	});

	it('returns fine if item is mid element in odd array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14], 6)).toEqual(3);
	});

	it('returns fine if item is last element in array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16)).toEqual(8);
	});

  it('searches fine for even numbers', () => {
		expect(BinarySearch([1, 3, 5, 6], 6)).toEqual(3);
	});

	it('searches fine for odd numbers', () => {
		expect(BinarySearch([1, 3, 5, 6, 10, 11, 13], 11)).toEqual(5);
	});

	it('returns -1 if not found in sorted odd array', () => {
		expect(BinarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9)).toEqual(-1);
	});
});

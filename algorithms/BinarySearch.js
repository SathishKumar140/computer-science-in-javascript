export default function BinarySearch (arr = [], item) {
	if (item === undefined || item === null) throw new Error('Binary search called without an element to find');

	let lowerBound = 0;
	let higherBound = arr.length - 1;

	while (lowerBound <= higherBound) {
		const mid = Math.floor((lowerBound + higherBound)/2);
		
		// match found
		if (arr[mid] === item) return mid;

		// too small, discard the array before lowerBound
		if (arr[mid] < item) lowerBound = mid + 1;

		// too big, discard the array above mid
		if (arr[mid] > item) higherBound = mid - 1;
	}

	return -1;
}
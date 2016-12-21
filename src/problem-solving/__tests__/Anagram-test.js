import expect from 'expect';

import Anagram from '../Anagram';

describe('Anagram', () => {
  it('tells whether two strings are anagrams alright', () => {
    expect(Anagram('man', 'name')).toEqual(false);
    expect(Anagram('man', 'nam')).toEqual(true);
    expect(Anagram('111aaae', 'a1a1a1e')).toEqual(true);
    expect(Anagram('2222', '222s')).toEqual(false);
  });
});

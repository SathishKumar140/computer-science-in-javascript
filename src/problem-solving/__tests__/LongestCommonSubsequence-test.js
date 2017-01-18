import expect from 'expect';

import LongestCommonSubsequence from '../LongestCommonSubsequence';

describe('LongestCommonSubsequence', () => {
  it('finds longest common subsequence', () => {
    expect(LongestCommonSubsequence('ABCDGH', 'AEDFHR', 6, 6)).toEqual(3);
  });

  it('finds longest common subsequence again', () => {
    expect(LongestCommonSubsequence('AGGTAB', 'GXTXAYB', 6, 7)).toEqual(4);
  });
});

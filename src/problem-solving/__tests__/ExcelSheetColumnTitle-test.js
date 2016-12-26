import expect from 'expect';

import solution from '../ExcelSheetColumnTitle';

describe('ExcelSheetColumnTitle', () => {
  it('1 -> A', () => {
    expect(solution(1)).toEqual('A');
  });
  it('2 -> B', () => {
    expect(solution(2)).toEqual('B');
  });
  it('25 -> Y', () => {
    expect(solution(26)).toEqual('Z');
  });
  it('26 -> Z', () => {
    expect(solution(26)).toEqual('Z');
  });
  it('27 -> AA', () => {
    expect(solution(27)).toEqual('AA');
  });
  it('28 -> AB', () => {
    expect(solution(28)).toEqual('AB');
  });
  it('51 -> AY', () => {
    expect(solution(51)).toEqual('AY');
  });
  it('52 -> AZ', () => {
    expect(solution(52)).toEqual('AZ');
  });
  it('53 -> BA', () => {
    expect(solution(53)).toEqual('BA');
  });
  it('80 -> CB', () => {
    expect(solution(80)).toEqual('CB');
  });
  it('676 -> YZ', () => {
    expect(solution(676)).toEqual('YZ');
  });
  it('702 -> ZZ', () => {
    expect(solution(702)).toEqual('ZZ');
  });
  it('705 -> AAC', () => {
    expect(solution(705)).toEqual('AAC');
  });
});

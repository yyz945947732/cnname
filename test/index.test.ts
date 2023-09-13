import cnname from '../src';

describe('cname', () => {
  it('cname() should return string', () => {
    expect(typeof cnname()).toEqual('string');
  });
  it('cname(5) should return array with five string', () => {
    expect(cnname(5).length).toEqual(5);
  });
  it('cname("张") should return string', () => {
    expect(typeof cnname('张')).toEqual('string');
    expect(cnname('张').startsWith('张')).toBeTruthy();
  });
  it('cname("张", 5) should return array with five string', () => {
    expect(cnname('张', 5).length).toEqual(5);
    expect(cnname('张', 5).every((name) => name.startsWith('张'))).toBeTruthy();
  });
});

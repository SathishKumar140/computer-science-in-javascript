import expect from 'expect';

import Pool from '../Pool';

let PoolableClass;
describe('PoolClass', () => {
  beforeEach(() => {
    PoolableClass = () => {};
    PoolableClass.prototype.destructor = () => {};
    Pool(PoolableClass);
  });

  it('should initialize a pool correctly', () => {
    expect(PoolableClass.__instancePool).toExist();
  });

  it('should return a new instance when the pool is empty', () => {
    const instance = PoolableClass.getInstance();
    expect(instance instanceof PoolableClass).toBe(true);
  });

  it('should return the instance back into the pool when it gets released',
    () => {
      const instance = PoolableClass.getInstance();
      PoolableClass.release(instance);
      expect(PoolableClass.__instancePool.length).toBe(1);
      expect(PoolableClass.__instancePool[0]).toBe(instance);
    },
  );

  it('should return an old instance if available in the pool', () => {
    const instance = PoolableClass.getInstance();
    PoolableClass.release(instance);
    const instance2 = PoolableClass.getInstance();
    expect(instance).toBe(instance2);
  });

  it('should call the destructor when instance gets released', () => {
    const log = [];
    const PoolableClassWithDestructor = () => {};
    PoolableClassWithDestructor.prototype.destructor = () => {
      log.push('released');
    };
    Pool(PoolableClassWithDestructor);
    const instance = PoolableClassWithDestructor.getInstance();
    PoolableClassWithDestructor.release(instance);
    expect(log).toEqual(['released']);
  });

  it('should accept poolers with different arguments', () => {
    const log = [];
    const PoolableClassWithMultiArguments = (a, b) => {
      log.push(a, b);
    };
    PoolableClassWithMultiArguments.prototype.destructor = () => {};
    Pool(PoolableClassWithMultiArguments);
    PoolableClassWithMultiArguments.getInstance('a', 'b', 'c');
    expect(log).toEqual(['a', 'b']);
  });

  it('should call a new constructor with arguments', () => {
    const log = [];
    const PoolableClassWithOneArgument = (a) => {
      log.push(a);
    };
    PoolableClassWithOneArgument.prototype.destructor = () => {};
    Pool(PoolableClassWithOneArgument);
    PoolableClassWithOneArgument.getInstance('new');
    expect(log).toEqual(['new']);
  });

  it('should call an old constructor with arguments', () => {
    const log = [];
    const PoolableClassWithOneArgument = (a) => {
      log.push(a);
    };
    PoolableClassWithOneArgument.prototype.destructor = () => {};
    Pool(PoolableClassWithOneArgument);
    const instance = PoolableClassWithOneArgument.getInstance('new');
    PoolableClassWithOneArgument.release(instance);
    PoolableClassWithOneArgument.getInstance('old');
    expect(log).toEqual(['new', 'old']);
  });
});

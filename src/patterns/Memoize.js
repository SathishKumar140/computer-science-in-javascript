// args will be a proper array, spread operator FTW!
const Memoize = fn => (...args) => {
  const input = args.join('');

  if (!fn.memoize) fn.memoize = {};

  const result = (input in fn.memoize)
    ? fn.memoize[input] : fn.memoize[input] = fn.apply(this, args);

  return result;
};

export default Memoize;

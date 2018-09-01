/**
 * @param {string} s
 * @return {boolean}
 */

const createStack = () => {
  const stack = [];
  return {
    push (i) {
      stack.push(i);
    },
    pop () {
      stack.pop();
    },
    peek () {
      return stack[stack.length - 1];
    },
    isEmpty () {
      return !stack.length;
    },
  };
};

const isOpen = bracket => ['(', '{', '['].indexOf(bracket) > -1;
const isMatching = (b1, b2) =>
  (b1 === '(' && b2 === ')') || (b1 === '{' && b2 === '}') || (b1 === '[' && b2 === ']');

const isValid = function (s) {
  const stack = createStack();
  const brackets = s.split('');
  let valid = true;
  brackets.forEach((b) => {
    if (isOpen(b)) {
      stack.push(b);
      return;
    }
    // close bracket
    if (isMatching(stack.peek(), b)) {
      stack.pop();
      return;
    }
    valid = false;
  });

  return stack.isEmpty() && valid;
};

export default isValid;

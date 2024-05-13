// Object.defineProperty(window, "_", {
//   value: "EMPTY_SPACE",
//   writable: false,
//   configurable: false,
//   enumerable: false,
// });

const partial2 = function () {
  const originalPartialArgs = arguments;
  const func = originalPartialArgs[0];
  if (typeof func !== "function") {
    throw new Error("First argument must be a function");
  }
  return function () {
    const partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
    const restArgs = Array.prototype.slice.call(arguments);
    console.log(partialArgs, restArgs);

    return func.apply(this, partialArgs.concat(restArgs));
  };
};

const add = function () {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
};

const addPartial = partial2(add, 1, 2, 4, 5, 8, 9);
console.log(addPartial(3, 6, 7, 10));

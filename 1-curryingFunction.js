// sum(1)(2)

const sum2 = (a) => {
  return (b) => {
    return a + b;
  };
};

console.log(sum2(1)(2));

// or sum(1)(2)(3)

const sum3 = (a) => {
  let result = a;

  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(sum3(1)(2)(3));

// sum(1)(2)(3)() or sum(1)(2)()

const sumVarNum = (inputNum) => {
  let result = 0;

  function addition(input) {
    console.log(input);
    if (input === undefined) {
      return result;
    } else {
      result = result + input;
      return addition;
    }
  }
  return addition(inputNum);
};

console.log(sumVarNum(2)(3)());

console.log(sumVarNum(1)(2)(3)());


// sum(1)(2)(3)  or sum(1)(2)

const sumNumVarWithoutTermintation = () => {
  let result = 0;

  function addition(input) {
    result = result + input;
    return addition;
  }

  addition.toString = addition.valueOf = () => {
    return result;
  };

  return addition;
};

console.log(+sumNumVarWithoutTermintation(2)(3));
console.log(Number(sumNumVarWithoutTermintation(1)(2)(3)));
console.log(2 > sumNumVarWithoutTermintation(2)(3));
console.log(sumNumVarWithoutTermintation(2)(3) > 2);


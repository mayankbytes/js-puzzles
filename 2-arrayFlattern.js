// Array.Flatten pollifill

const flattenArray = (input) => {
  const output = [];

  const inner = (input) => {
    input
    input.forEach((i) => {
      if (Array.isArray(i)) {
         inner(i)
      }else{
        output.push(i)
      }
    });
  };

  inner(input)
  return output
};



console.log(flattenArray([1,[2,3, [4,5, [6]]]]))

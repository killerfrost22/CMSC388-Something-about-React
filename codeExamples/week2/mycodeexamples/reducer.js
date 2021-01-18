const array1 = [1, 2, 3, 4, null];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce((acc,curr) => {
    if(curr == null){
            return acc + 100;
    }else{
           return acc + curr;
    }
    },0));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
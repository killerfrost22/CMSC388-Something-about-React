function addNums(...args) {
  let values = [...args]
  return values.reduce((accum, val) => accum + val )
}

let subtract = (num1, num2) => num1 - num2

export default addNums
export {subtract}
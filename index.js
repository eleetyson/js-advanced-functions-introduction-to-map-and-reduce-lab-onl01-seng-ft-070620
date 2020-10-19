// takes an array and return a new array with all elements made negative
function mapToNegativize(arr) {
  const newArr = []
  for (const element of arr) {
    newArr.push(element * -1)
  }
  return newArr
}

// simply returns the array passed in as an argument
function mapToNoChange(arr) {return arr}

// takes an array and returns a new array with all elements doubled
function mapToDouble(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr
}

// takes an array and returns a new array with all elements squared
function mapToSquare(arr) {
  const newArr = []
  for (const element of arr) {
    newArr.push(element**2)
  }
  return newArr
}

// returns a running total when not given a starting value
function reduceToTotal(arr, start=0) {
  let accumulator = start
  for (const element of arr) {
    accumulator += element
  }
  return accumulator
}

// returns true if all array elements are truthy, false if not
function reduceToAllTrue(arr) {
  for (const element of arr) {
    if (!!element == false) {
      return false
    }
  }
  return true
}

// returns true if any array elements are truthy
function reduceToAnyTrue(arr) {
  for (const element of arr) {
    if (!!element == true) {
      return true
    }
  }
  return false
}

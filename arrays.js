var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  // array.unshift(element)
  return [element].concat(array)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

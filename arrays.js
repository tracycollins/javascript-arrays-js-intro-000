var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  // array.unshift(element)
  return [element].concat(array)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  // array.unshift(element)
  return array.concat([element])
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

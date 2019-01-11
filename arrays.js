var chocolateBars = ['snickers',
    'hundred grand',
    'kitkat',
    'skittles'
  ]

function addElementToBeginningOfArray(array, element) {
  var done = [element, ...array];
  return done;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var done = array.unshift(element);
  return done
}

function addElementToEndOfArray(array, element) {
  var done = [...array, element];
  return done
}

funtion destructivelyAddElementToEndOfArray(array, element) {
  var done = array.push(element);
  return done
}

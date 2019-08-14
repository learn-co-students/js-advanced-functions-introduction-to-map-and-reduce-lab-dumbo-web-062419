// Your code here
function mapToNegativize(sourceArray){
  let result = [];
  for (var i = 0; i < sourceArray.length; i++) {
    result.push(-sourceArray[i]);
  }
  return result;
}

function mapToNoChange(sourceArray){
  let result = [];
  for (var i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i]);
  }
  return result;
}

function mapToDouble(sourceArray){
  let result = [];
  for (var i = 0; i < sourceArray.length; i++) {
    result.push(2*sourceArray[i]);
  }
  return result;
}

function mapToSquare(sourceArray){
  let result = [];
  for (var i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i]**2);
  }
  return result;
}


function reduceToTotal(sourceArray, startingPoint=0){
  let total = startingPoint;
  for (var i = 0; i < sourceArray.length; i++) {
    total += sourceArray[i]
  }
  return total;
}

function reduceToAllTrue(sourceArray){
  let result = true;
  for (var i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] == false){
      result = false;
    }
  }
   return result;
}

function reduceToAnyTrue(sourceArray){
  let result = false;
  for (var i = 0; i < sourceArray.length; i++) {
    if(sourceArray[i] == true){
      result = true;
    }
  }
  return result;
}

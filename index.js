// Your code here
const mapToNegativize = (sourceArray)=> {
  return sourceArray.map(element => element * -1)
}

const mapToNoChange = (sourceArray)=> {
  return sourceArray.map(element => element)
}

const mapToDouble = (sourceArray)=> {
  return sourceArray.map(element => element * 2)
}

const mapToSquare = (sourceArray)=> {
  return sourceArray.map(element => element * element)
}

const reduceToTotal = (sourceArray, startingPoint=0) => {
  let total = startingPoint;
  for(let i=0;i < sourceArray.length; i++){
    total = total + sourceArray[i]
  }
  return total;
}

const reduceToAllTrue = (sourceArray) => {
  for(let i=0; i < sourceArray.length; i++){
    if (!sourceArray[i]) return false
  }
  return true
}

const reduceToAnyTrue = (sourceArray) => {
  for(let i = 0; i < sourceArray.length; i++){
    if(sourceArray[i]) return true
  }
  return false
}

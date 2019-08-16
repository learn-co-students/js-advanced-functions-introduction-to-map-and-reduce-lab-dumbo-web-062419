// Your code here
console.log("Locked and loaded");

/////////////////////// Map functions

function mapToNegativize(sourceArray){
  const newArray = []

  sourceArray.forEach(n => {
    n *= -1
    newArray.push(n)
  })

  return newArray
}

function mapToNoChange(sourceArray){
  const newArray = []

  sourceArray.forEach(v => {
    newArray.push(v)
  })

  return newArray
}

function mapToDouble(sourceArray){
  const newArray = []

  sourceArray.forEach(v => {
    v *= 2
    newArray.push(v)
  })

  return newArray
}

function mapToSquare(sourceArray){
  const newArray = []

  sourceArray.forEach(v => {
    v = v * v
    newArray.push(v)
  })

  return newArray
}

//////////////////////// Reduce functions
function reduceToTotal(sourceArray, startingPoint=0){
  let ans = startingPoint

  sourceArray.forEach(v => {
    ans += v
  })

  return ans
}

function reduceToAllTrue(sourceArray){
  let ans = true

  sourceArray.forEach(v => {
    if (v === false){
      ans = false
    }
  })

  return ans
}

function reduceToAnyTrue(sourceArray){
  let ans = false

  sourceArray.forEach(v => {
    if (v){
      ans = true
    }
  })

  return ans
}

function setData(value) {
  if (typeof value === 'object') {
    console.log(JSON.stringify(value), " is an object.");
  } else {
    console.log(value, "is not an object.");
  }
}

setData([1]);
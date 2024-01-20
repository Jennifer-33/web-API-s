// Sealing - pevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1'
  width: 10,
  height: 10,
};

Object.freeze(circleObj);

descriptors = Object.getOwnPropertyDescriptor(rectObj)

circleObj.color = 'blue';

console.log(rectObj);
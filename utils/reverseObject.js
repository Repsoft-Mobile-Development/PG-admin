const reverseObj = (obj) => {
  let newObj = {};

  Object.keys(obj)
    .sort()
    .reverse()
    .forEach((key) => {
      console.log(key);
      newObj[key] = obj[key];
    });

  console.log(newObj);
  return newObj;
};

export default reverseObj;


const linearSearch = (array, target) => {
  // console.log(array, target)
    for (let i = 0; i < array.length; i++) {
      if (array[i].title === target) {
        // console.log(array[i].title)
        return array[i];
      }
        // console.log(array[i], target)
    }
    // return -1;
    return -1;
  };
  
export default linearSearch
  
function getObjectFromLocalStorage(key) {
    let jsonString = localStorage.getItem(key);
    if (!jsonString) {
      return null;
    }
    let object = JSON.parse(jsonString);
    return object;
  }
  let myObject = getObjectFromLocalStorage("myKey");
console.log(myObject); 

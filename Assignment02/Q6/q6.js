function saveObjectToLocalStorage(key, object) {
    let jsonString = JSON.stringify(object);
    localStorage.setItem(key, jsonString);
  }
  let myObject = { name: "Atrooba", age: 19, city: "Pakistan" };
saveObjectToLocalStorage("myKey", myObject);
console.log(myObject);



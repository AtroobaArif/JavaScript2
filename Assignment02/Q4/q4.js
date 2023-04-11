function addListItem(textContent) {
    let newListItem = document.createElement("list");
    newListItem.textContent = textContent;
    let unorderedList = document.getElementById("myList"); 
    unorderedList.appendChild(newListItem);
  }
  addListItem("This is a new list item.");

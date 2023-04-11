function addPara(textContent) {
    let newPara = document.createElement('Atrooba');
    newPara.textContent = textContent;
    document.body.appendChild(newPara);
  }
  addPara("This is a new paragraph.");


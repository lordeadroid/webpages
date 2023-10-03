const getPage = () => document.querySelector(".page");

const getBoxDivs = () => {
  const classNames = ["box", "content", "add", "remove"];

  const divs = classNames.map((className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  });

  return divs;
};

const makeContainer = () => {
  const [box, content, add, remove] = getBoxDivs();

  add.innerText = "add";
  remove.innerText = "remove";
  content.appendChild(add);
  content.appendChild(remove);
  box.appendChild(content);

  return box;
};

const createBox = () => {
  const page = getPage();
  const box = makeContainer();
  page.appendChild(box);
};

const getBox = () => document.querySelector(".box");

const deleteBox = () => {
  const page = getPage();
  const box = getBox();
  page.removeChild(box);
};

const main = () => {
  const addBox = document.querySelector(".add");
  const removeBox = document.querySelector(".remove");

  addBox.onclick = createBox;
  removeBox.onclick = deleteBox;
};

window.onload = main;

const main = () => {
  const page = document.querySelector(".page");
  page.onclick = () => {
    console.log("hello");
  };
};

window.onload = main;

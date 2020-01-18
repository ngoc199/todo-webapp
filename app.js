const insertButton = document.querySelector(".btn-insert");
const insertBar = document.querySelector(".insert-bar input");
const workList = document.querySelector(".works");
let works = Array.from(document.getElementsByClassName("work"));

insertBar.addEventListener("keyup", ev => {
  if (ev.keyCode === 13) {
    ev.preventDefault();
    insertButton.click();
  }
});

insertButton.addEventListener("click", () => {
  let todo = document.createElement("li");
  todo.classList.add("work");
  todo.textContent = insertBar.value;
  insertBar.value = "";
  workList.append(todo);
});

workList.addEventListener(
  "click",
  function(ev) {
    console.log("clicked");
    console.log(ev.target.tagName === "LI");
    if (ev.target.tagName === "LI") {
      console.log("changed");
      ev.target.classList.toggle("checked");
    }
  },
  false
);

workList.addEventListener("dblclick", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.style.display = "none";
  }
});

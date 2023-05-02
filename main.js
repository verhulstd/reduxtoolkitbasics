import "./style.scss";

import store from "./data";

function renderTodos() {
  const { todos } = store.getState();
  console.log(todos);
  document.querySelector("ul").innerHTML = todos
    .map(
      ({ name, id, checked }) => `
            <li data-id="${id}" class="${checked ? "checked" : ""}">
                <span>${name}</span>
                <a href="#" class="remove">x</a>
                <a class="check" href="#">☑</a>
            </li>
        `
    )
    .join("");
}

renderTodos();
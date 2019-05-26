import { Main } from "./components/main.js";
import { Sidebar } from "./components/sidebar.js";
import { getPage } from "./routes.js";

// create elements
const root = document.querySelector(".root");
const sidebar = new Sidebar();
const main = new Main();
const content = document.createElement("div");

// function which updates all components with current route
const pageChanged = () => {
  const page = getPage();
  main.setAttribute("page", page);
  sidebar.setAttribute("page", page);
};

// add elements to DOM
content.classList.add("content");
content.appendChild(main);
root.appendChild(sidebar);
root.appendChild(content);

// observe route changes
window.addEventListener("hashchange", pageChanged);

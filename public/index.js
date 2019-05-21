import { Main } from "./components/main.js";
import { Sidebar } from "./components/sidebar.js";

// create elements
const root = document.querySelector(".root");
const sidebar = new Sidebar();
const main = new Main();
const content = document.createElement("div");

// function which updates all components with current route
const activateRoute = () => {
  const route = window.location.hash.substr(1) || "home";
  main.setAttribute("route", route);
  sidebar.setAttribute("route", route);
};

activateRoute();

// add elements to DOM
content.classList.add("content");
content.appendChild(main);
root.appendChild(sidebar);
root.appendChild(content);

// observe route changes
window.addEventListener("hashchange", activateRoute);

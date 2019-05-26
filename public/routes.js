export const routes = [
  { path: "/home", label: "Home" },
  { path: "/news", label: "News" },
  { path: "/contacts", label: "Contacts" },
  { path: "/about", label: "About" }
];

export const getPage = () => {
  const fullRoute = window.location.hash.substr(1) || "/home";
  return fullRoute.match(/^([\/a-zA-Z]+)/)[0].replace(/\/$/, "");
}

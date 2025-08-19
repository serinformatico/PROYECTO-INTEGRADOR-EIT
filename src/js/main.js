const path = window.location.pathname;

if (path.includes("index")) {
  import("./slider.js");
}
if (path.includes("products")) {
  import("./products.js");
  import("./search.js");
}


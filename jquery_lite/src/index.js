const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg) {
  if (typeof arg === "string") {
    let nodes = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodes));
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  } else {
    return undefined;
  }
};
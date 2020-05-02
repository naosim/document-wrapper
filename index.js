export function q(selector) {
  return document.querySelector(selector) 
}

export function qa(selector) {
  var list = document.querySelectorAll(selector);
  if(!list) {
    return list;
  }
  list.filter = Array.prototype.filter;
  list.map = Array.prototype.map;
  list.reduce = Array.prototype.reduce;
  return list;
}
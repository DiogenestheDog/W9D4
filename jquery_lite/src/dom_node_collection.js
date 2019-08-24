class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }
  
  html(str) {
    if (str) { this.arr.forEach(el => {
      el.innerHTML = str;
    }); 
 }
    else { return this.arr[0].innerHTML; }
  }

  empty() {
    this.arr.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(arg) {
    if (arg instanceof String) {
      this.arr.forEach ( el => {
        el.innerHTML = el.innerHTML.concat(arg);
      });
    } else if (arg instanceof DOMNodeCollection) {
      this.arr.forEach( el => {
        el.innerHTML = el.innerHTML + arg.arr.reduce( (acc, el) => {
          return acc + el.outerHTML;
        }, "");
      });
    }
  }

  attr(...args) {
    if (args.length === 1) {
      const arg = args[0];
      if (arg instanceof String) {
        return this[0][args[0]]; 
      } else if (typeof arg === "object" && !Array.isArray(arg)) {
        this.arr.forEach( (el) => {
          for(let key in arg) {
            el[key] = arg[key];
          }
        });
      }
    } else if (args.length === 2) {
      this.arr[0][args[0]] = args[1];
    }
    else return null;
  }

  addClass(...classes) {
    this.arr.forEach( el => {
      classes.forEach( classy => {
          el.className += ` ${classy}`;
      });
    });
  }

}
module.exports = DOMNodeCollection;
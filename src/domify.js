/****
Author: Moralist Festus
Github: https://github.com/moralistfestus/domify.js
About: Lightweight Javascript library for DOM Manipulation and faster development
License: MIT Licensed
Contributing: It's open source and contributions allowed
****/

"use strict"
console.info("%cDomify is a simple lightweight Javascript library for DOM Manipulation, and faster development.", "color:green; background-color:white");
console.info("%cYou are running Domify in development mode.\nMake sure to turn on production mode when deploying for production.\nread the doc: https://github.com/moralistfestus/domify.js", "color:blue; background-color:white");
       
function dom(selector) {

  const self = {
    element: document.querySelector(selector),
    // event listener
    html: ()=> self.element,
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
     },
    hide: ()=> {
      self.element.style.display = 'none'
     },
    show: ()=> {
      self.element.style.display = 'block'
     },
    output: (value)=> {
      self.element.innerHTML = `${value}`
     },
    color: (col)=> {
      self.element.style.color = `${col}`
     },
    bgcolor: (bgcol)=> {
      self.element.style.background = `${bgcol}`
     },
    prevent() {
      self.element.onsubmit = e => e.preventDefault()
     },
     addClass: (list) => {
       self.element.classList.add(list)
     },
     removeClass: (remove) => {
       self.element.classList.remove(remove)
     }, 
    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    }
    
  }

  return self
}

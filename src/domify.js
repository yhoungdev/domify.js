/****
Author: Moralist Festus
Github: https://github.com/moralistfestus/domify.js
About: Lightweight Javascript library for DOM Manipulation and faster development
License: MIT Licensed
Contributing: It's open source and contributions allowed
****/

'use strict'
console.info("Domify is a simple lightweight Javascript library for DOM Manipulation, and faster development.");
console.info("You are running Domify in development mode.\nMake sure to turn on production mode when deploying for production.\nread the doc: https://github.com/moralistfestus/domify.js");
       
function dom(selector) {

  const self = {
    element: document.querySelector(selector),
    // event listener
    html: ()=> self.element,
    // event handler 
    on: (event, callback) => {
      self.element.addEventListener(event, callback)
     },
     // hide element
    hide: ()=> {
      self.element.style.display = 'none'
     },
     // show element
    show: ()=> {
      self.element.style.display = 'block'
     },
     // print to attr
    output: (value)=> {
      self.element.innerHTML = `${value}`
     },
     // color
    color: (col)=> {
      self.element.style.color = `${col}`
     },
     // background color 
    bgcolor: (bgcol)=> {
      self.element.style.background = `${bgcol}`
     },
     // prevent form action
    prevent() {
      self.element.onsubmit = e => e.preventDefault()
     },
     // add class
     addClass: (list) => {
       self.element.classList.add(list)
     },
     // remove class 
     removeClass: (remove) => {
       self.element.classList.remove(remove)
     },
     // toggle 
     toggleClass: (_toggle) => {
       self.element.classList.toggle(_toggle)
     },
     // clipboard
     copy: ()=> {
       self.element.select()
       document.execCommand('copy')
     }, 
     // Web camera
     // getUserMedia() webcam permission
     camera: ()=> {
		if (navigator.mediaDevices.getUserMedia) {
		  navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
		    video = self.element
		    video.srcObject = stream
		  }).catch(err => console.error('Something went wrong'))
		  } else {
		  console.error('Unsupported browser for web camera eligibility')
		 }
	  },
	   // class attribute
      attr: (name, value) => {
        if(value == null)
          return self.element.getAttribute(name)
        else
          self.element.setAttribute(name, value)
      }
    
   }

  return self
}

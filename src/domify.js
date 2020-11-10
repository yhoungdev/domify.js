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
console.warn('domify.js is now connected you are good to go');




       

function dom(selector) {

  const self = {
    element: document.querySelector(selector),
    html: ()=> self.element,

    write:(va)=>self.element.textContent=`${va}`,
    // event listener

    // event handler 

    on: (event, callback) => {
      self.element.addEventListener(event, callback)
     },
     // hide element
    hide: ()=> {
      self.element.style.display = 'none'
     },

     show: ()=> {
      self.element.style.display = 'block'
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

    attr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
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

//timer
const timer=seli =>{
  const start={
    tag:document.querySelector(seli),
     time:()=>{
         setInterval(()=>{
          const dt=new Date();
          const timm=dt.toLocaleTimeString()
          start.tag.innerHTML=`${timm}`
         },1000)
     }

  }

  return start;
  
}

// was very busy just added timer function 
//gonna add more


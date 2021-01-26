const setClrButton = document.querySelector('#set-color')
const brush = document.querySelector('.brush')
const inputClr = document.querySelector('#color-field')


setClrButton.addEventListener('click',function(e) {
   e.preventDefault()
   brush.style.backgroundColor = `${inputClr.value}`
} )

setClrButton.addEventListener('click', inputClr)

setClrButton.addEventListener( 'keypress', function(e) {
   var key = e.which || e.keyCode;
   if (key === 13) {
       brush.style.backgroundcolor = `${inputClr.value}`
   }
} )

for (i = 0; i < 8000; i++) {
   let appendDiv = document.createElement('div')
   appendDiv.setAttribute('class','square')
   appendDiv.className = 'square'
   document.body.appendChild(appendDiv)

   appendDiv.addEventListener('mouseover', function(event){
       event.preventDefault()
       appendDiv.style.backgroundColor= inputClr.value
   } )
}

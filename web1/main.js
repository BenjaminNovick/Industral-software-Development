// JavaScript source code
const r = document.createElement('button')
const l = document.createElement('button')
r.innerText = 'right'

r.id = 'mainButton'

// Attach the "click" event to your button
r.addEventListener('click', () => {
    // When there is a "click"
    // it shows an alert in the browser
    if (Math.random() > 0.5) {
        alert("winner");
    } else { alert("wrong" ) }
})

document.body.appendChild(r)
// Set the button text to 'Can you click me?'
l.innerText = 'left'

l.id = 'mainButton'

// Attach the "click" event to your button
l.addEventListener('click', () => {
    // When there is a "click"
    // it shows an alert in the browser  // it shows an alert in the browser
    if (Math.random() > 0.5) {
        alert("winner");
    } else { alert("wrong") }  
})

document.body.appendChild(l)
let btnChange1 = document.getElementById('btnChange1')
let btnChange2 = document.getElementById('btnChange2')
let btnChange3 = document.getElementById('btnChange3')
let btnChange4 = document.getElementById('btnChange4')
let btnChange5 = document.getElementById('btnChange5')
let btnChange6 = document.getElementById('btnChange6')
let btnChange7 = document.getElementById('btnChange7')
let btnChange8 = document.getElementById('btnChange8')
let btnChange9 = document.getElementById('btnChange9')
let btnChange10 = document.getElementById('btnChange10')

let change1 = document.getElementById('change1')
let change2 = document.getElementById('change2')
let change3 = document.getElementById('change3')
let change4 = document.getElementById('change4')
let change5 = document.getElementById('change5')
let change6 = document.getElementById('change6')
let change7 = document.getElementById('change7')
let change8 = document.getElementById('change8')
let change9 = document.getElementById('change9')
let change10 = document.getElementById('change10')

btnChange1.addEventListener('click', function(event) {
    change1.innerText = 'Changed Text'
})

btnChange2.addEventListener('click', function(event) {
    change2.innerText = 'Changed Color'
    change2.className = 'new-color'
})

btnChange3.addEventListener('click', function(event) {
    change3.innerText = 'Changed Font Size'
    change3.className = 'new-size'
})

btnChange4.addEventListener('click', function(event) {
    change4.innerText = 'Added Background'
    change4.className = 'add-bg'
})

btnChange5.addEventListener('click', function(event) {
    change5.innerText = 'Centered'
    change5.className = 'centered'
})


btnChange6.addEventListener('click', function(event) {
    change6.innerText = 'Added Hover Effect'
    change6.className = 'add-hover'
})

btnChange7.addEventListener('click', function(event) {
    change7.className = 'set-img-size'
})

btnChange8.addEventListener('click', function(event) {
    change8.innerText = 'This is hopefully hidden'
    change8.className = 'hide'
})

btnChange9.addEventListener('click', function(event) {
    change9.innerText = 'Bolded Text'
    change9.className = 'bold-text'
})

btnChange10.addEventListener('click', function(event) {
    change10.innerText = 'Added multiple classes'
    change10.className = 'bold-text ' + 'new-size ' + 'new-color ' + 'add-bg ' + 'centered ' + 'add-hover'
})

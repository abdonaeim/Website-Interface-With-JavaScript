let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountains7 = document.getElementById('mountains7')
let abdonaeim = document.querySelector('.abdonaeim')

window.onscroll = function() {
    let value = scrollY
    stars.style.left = value * 0.5 + 'px'
    moon.style.top = value * 5  + 'px'
    mountains3.style.top = value * 2  + 'px'
    mountains4.style.top = value * 1.5  + 'px'
    river.style.top = value * 2  + 'px'
    boat.style.top = value * 2  + 'px'
    boat.style.left = value * 4 +'px'
    abdonaeim.style.fontSize = value + 'px'
    if(scrollY >= 70) {
        abdonaeim.style.fontSize = 70 + 'px'
        abdonaeim.style.position = 'fixed'
        if(scrollY >= 475) {
            abdonaeim.style.display = 'none'
        }
    }else{
        abdonaeim.style.display = 'block'
    }
    if(scrollY >= 96) {
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
    }
}
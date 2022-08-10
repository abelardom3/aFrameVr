
const container = document.querySelector('a-scene')



function makePlane() {
    const plane = document.querySelector('a-plane')
    plane.setAttribute('color', 'green')
    plane.id = "ground"
    plane.setAttribute('rotation', '-90 0 0')
    plane.setAttribute('width', '30')
    plane.setAttribute('height', '30')
    plane.setAttribute('src', 'https://tse3.mm.bing.net/th?id=OIP.o3hdedCYqgF4jpPo4tey5AHaHa&pid=Api&P=0')

}

function makeBox() {
    const box = document.querySelector('a-box')
    box.setAttribute('src', 'https://vignette.wikia.nocookie.net/dwarves-vs-zombies/images/9/94/Woodenplank.png/revision/latest?cb=20141217232336')
    box.setAttribute('position', '0 .5 0')
    box.setAttribute('rotation', '0 0 0')
    box.setAttribute('height', '1')
    box.setAttribute('width', '1')


}


function sky() {
    const sky = document.querySelector('a-sky')
    sky.setAttribute('src', 'https://live.staticflickr.com/65535/52207981250_e9506bb547_6k.jpg')


}


requestAnimationFrame(makePlane)
requestAnimationFrame(makeBox)
requestAnimationFrame(sky)









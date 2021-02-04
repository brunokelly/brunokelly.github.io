let projectbtn = document.querySelector('#open-projects')
let projectopen = document.querySelector('.projects-dash')
let glass = document.querySelector('.glass')
let page = document.querySelector('#landing-page')
let circleOne = document.querySelector('.circle1')
let circleTwo = document.querySelector('.circle2')



projectbtn.addEventListener('click', () => {
    projectopen.classList.toggle('dash-close')
})


    glass.addEventListener('mousemove', (e) => { 
    if ( window.innerWidth > 500) { 
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20
    glass.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }})

    glass.addEventListener('mouseenter', (e) => {
        glass.style.transition = 'none'
    })
    
    glass.addEventListener('mouseleave', (e) => {

        glass.style.transition = 'all 0.5s ease'
        glass.style.transform = `rotateY(0deg) rotateX(0deg)`
    
    })
    




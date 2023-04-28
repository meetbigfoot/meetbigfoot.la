const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

g('watch').addEventListener('click', e => {
  g('popup').style.display = 'flex'

  const iframe = document.createElement('iframe')
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  iframe.allowfullscreen = true
  iframe.src = 'https://www.youtube.com/embed/At3kSthUM_k?autoplay=1'
  g('softbox').appendChild(iframe)

  ScrollReveal().reveal('#softbox', {
    cleanup: true,
    // container: '#softbox',
    distance: '50%',
    interval: 100,
    origin: 'bottom',
  })
})

g('popup').addEventListener('click', e => {
  e.target.style.display = 'none'
  g('softbox').innerHTML = ''
})

ScrollReveal().reveal('h1, h2, #getWaitlistContainer, #watch, a', {
  cleanup: true,
  container: '#stack',
  distance: '50%',
  interval: 200,
  origin: 'bottom',
})

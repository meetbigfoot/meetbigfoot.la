const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

g('watch').addEventListener('click', e => {
  g('popup').style.display = 'flex'

  const iframe = document.createElement('iframe')
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  iframe.allowfullscreen = true
  iframe.src = 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1'
  g('softbox').appendChild(iframe)
})

g('popup').addEventListener('click', e => {
  e.target.style.display = 'none'
  g('softbox').innerHTML = ''
})

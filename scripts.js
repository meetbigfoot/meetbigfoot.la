;((c, l, a, r, i, t, y) => {
  c[a] =
    c[a] ||
    function () {
      ;(c[a].q = c[a].q || []).push(arguments)
    }
  t = l.createElement(r)
  t.async = 1
  t.src = 'https://www.clarity.ms/tag/' + i
  y = l.getElementsByTagName(r)[0]
  y.parentNode.insertBefore(t, y)
})(window, document, 'clarity', 'script', 'gyd8px7h8m')

const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

g('watch').addEventListener('click', e => {
  document.body.style.overflow = 'hidden'
  g('popup').style.display = 'flex'

  const video = document.createElement('video')
  video.allowfullscreen = true
  video.autoplay = true
  video.playsinline = true
  video.src =
    'https://res.cloudinary.com/bigfoot-cdn/video/upload/v1683137674/demo/littlefoot-teaser-draft-2-compressed_qadeai.mp4'
  g('softbox').appendChild(video)
  video.play()

  ScrollReveal().reveal('#softbox', {
    cleanup: true,
    // container: '#softbox',
    distance: '50%',
    interval: 100,
    origin: 'bottom',
  })
})

g('popup').addEventListener('click', e => {
  document.body.style.overflow = 'unset'
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

q('video')[0].play()

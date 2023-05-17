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

ScrollReveal().reveal('h1, h2', {
  cleanup: true,
  container: '#stack',
  distance: '50%',
  interval: 200,
  origin: 'bottom',
})

q('video')[0].play()

/* disable cards for now
fetch('/la-cards.json')
  .then(response => response.json())
  .then(data =>
    data.reverse().forEach(obj => {
      const card = document.createElement('div')
      card.className = 'card'
      card.addEventListener('click', e => window.open(obj.url))

      const img = document.createElement('div')
      img.className = 'card-img'
      img.style.backgroundImage = `url(${obj.photo})`
      card.appendChild(img)

      const info = document.createElement('div')
      info.className = 'card-info'

      const tag = document.createElement('div')
      tag.className = 'card-tag'
      tag.textContent = obj.category
      info.appendChild(tag)

      const title = document.createElement('h1')
      title.className = 'card-title'
      title.textContent = obj.title
      info.appendChild(title)

      const location = document.createElement('div')
      location.className = 'card-location'
      location.textContent = obj.location.split(',')[0]
      info.appendChild(location)

      const date = document.createElement('div')
      date.className = 'card-date'
      date.textContent = obj.date
      info.appendChild(date)

      card.appendChild(info)
      g('cards').appendChild(card)
    }),
  )
 */

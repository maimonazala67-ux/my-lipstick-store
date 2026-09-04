const shades = [
  { name: 'Rosewood', code: 'LL 01', color: '#9b4f59', tone: 'soft berry' },
  { name: 'After Hours', code: 'LL 07', color: '#6b2737', tone: 'deep wine' },
  { name: 'Barely There', code: 'LL 12', color: '#c88776', tone: 'warm nude' },
  { name: 'Mauve Muse', code: 'LL 18', color: '#a96b7e', tone: 'dusty pink' },
]

const shadeName = document.querySelector('[data-shade-name]')
const shadeTone = document.querySelector('[data-shade-tone]')
const shadeSwatch = document.querySelector('[data-shade-swatch]')
const heroShade = document.querySelector('[data-hero-shade]')
let activeShadeIndex = 0

function setShade(index) {
  activeShadeIndex = index % shades.length
  const shade = shades[activeShadeIndex]
  shadeName.textContent = shade.name
  shadeTone.textContent = shade.tone
  shadeSwatch.style.backgroundColor = shade.color
  heroShade.textContent = shade.name
  document.documentElement.style.setProperty('--active-shade', shade.color)
}

document.querySelector('[data-next-shade]').addEventListener('click', () => setShade(activeShadeIndex + 1))
document.querySelector('[data-menu]').addEventListener('click', (event) => {
  document.querySelector('[data-nav]').classList.toggle('is-open')
  event.currentTarget.setAttribute('aria-expanded', document.querySelector('[data-nav]').classList.contains('is-open'))
})

document.querySelectorAll('[data-nav] a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('[data-nav]').classList.remove('is-open')
}))

document.querySelectorAll('[data-wishlist]').forEach((button) => button.addEventListener('click', () => {
  button.classList.toggle('is-saved')
  button.setAttribute('aria-pressed', button.classList.contains('is-saved'))
}))

document.querySelector('[data-try-on]').addEventListener('click', () => {
  document.querySelector('[data-try-message]').textContent = 'Camera preview ready for your shade.'
})

setShade(0)
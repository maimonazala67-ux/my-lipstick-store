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
const cartDrawer = document.querySelector('[data-cart-drawer]')
const cartItems = document.querySelector('[data-cart-items]')
const cartCount = document.querySelector('[data-cart-count]')
const cartTotal = document.querySelector('[data-cart-total]')
const toast = document.querySelector('[data-toast]')
let cart = []
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

function showToast(message) {
  toast.textContent = message
  toast.classList.add('is-visible')
  window.setTimeout(() => toast.classList.remove('is-visible'), 2600)
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartCount.textContent = count
  cartTotal.textContent = `$${total}`
  cartItems.innerHTML = cart.length ? cart.map((item) => `<div class="cart-item"><span class="cart-swatch" style="background:${item.color}"></span><div><strong>${item.name}</strong><small>$${item.price} · Qty ${item.quantity}</small></div><button data-remove="${item.name}" aria-label="Remove ${item.name}">×</button></div>`).join('') : '<p class="empty-cart">Your bag is waiting for a little color.</p>'
  cartItems.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    cart = cart.filter((item) => item.name !== button.dataset.remove)
    renderCart()
  }))
}

function openCart() { cartDrawer.classList.add('is-open'); document.querySelector('.drawer-overlay').classList.add('is-open') }
function closeCart() { cartDrawer.classList.remove('is-open'); document.querySelector('.drawer-overlay').classList.remove('is-open') }

document.querySelectorAll('[data-add-cart]').forEach((button) => button.addEventListener('click', () => {
  const existing = cart.find((item) => item.name === button.dataset.name)
  if (existing) existing.quantity += 1
  else cart.push({ name: button.dataset.name, price: Number(button.dataset.price), color: button.dataset.color, quantity: 1 })
  renderCart()
  showToast(`${button.dataset.name} added to your bag`)
}))
document.querySelector('[data-cart-open]').addEventListener('click', openCart)
document.querySelectorAll('[data-cart-close]').forEach((button) => button.addEventListener('click', closeCart))
document.querySelector('[data-checkout]').addEventListener('click', () => showToast(cart.length ? 'Checkout is ready for your order.' : 'Add a shade before checking out.'))
document.querySelector('[data-search]').addEventListener('click', () => {
  const query = window.prompt('Search LuxeLips shades')
  if (query) showToast(`Searching for “${query}”`)
})
document.querySelector('[data-wishlist-filter]').addEventListener('click', () => showToast('Your wishlist is ready for your favorites.'))

document.querySelector('[data-try-on]').addEventListener('click', () => {
  document.querySelector('[data-try-message]').textContent = 'Camera preview ready for your shade.'
})

setShade(0)
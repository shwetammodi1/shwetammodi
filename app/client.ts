import { createClient } from 'honox/client'

createClient()

const initializeMenu = () => {
  const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const siteNavigation = document.querySelector<HTMLElement>('#site-navigation')

  if (menuToggle && siteNavigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true'
      menuToggle.setAttribute('aria-expanded', String(!isOpen))
      siteNavigation.classList.toggle('is-open', !isOpen)
    })

    siteNavigation.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        menuToggle.setAttribute('aria-expanded', 'false')
        siteNavigation.classList.remove('is-open')
      }
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMenu, { once: true })
} else {
  initializeMenu()
}

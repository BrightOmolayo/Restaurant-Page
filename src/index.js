// import the initialPageLoad function from pageLoad.js
import { initialPageLoad } from '../pageLoad.js'

// import from home.js
import { createHomeTab } from './home.js'
// import from about.js
import { createAboutTab } from './contact.js'
// import from menu.js
import { createMenuTab } from './menu.js'

// call the imported function to execute it whe the page loads
document.addEventListener('DOMContentLoaded', initialPageLoad)

document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.getElementById('subContent')
  // function to switch between tabs

  function switchTab (tab) {
    tabsContainer.innerHTML = ''
    tabsContainer.appendChild(tab)
  }

  // Event listeners for clicks
  // home
  document.getElementById('home').addEventListener('click', function () {
    switchTab(createHomeTab())
  })
  // about
  document.getElementById('about').addEventListener('click', function () {
    switchTab(createAboutTab())
  })
  // menu
  document.getElementById('menu').addEventListener('click', function () {
    switchTab(createMenuTab())
  })

  // initial tab view
  switchTab(createHomeTab)
})

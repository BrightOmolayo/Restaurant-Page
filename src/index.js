// import the initialPageLoad function from pageLoad.js
import { initialPageLoad } from '../pageLoad.js'

// call the imported function to execute it whe the page loads
document.addEventListener('DOMContentLoaded', initialPageLoad)

// Home Module
const HomeModule = (function () {
  function createHomeTab () {
    const homeTab = document.createElement('div')
    homeTab.classList.add('tab-content')
    homeTab.innerHTML = `
            <h2>Welcome to Our Restaurant</h2>
            <p>Discover a world of flavors...</p>
        `
    return homeTab
  }

  return {
    createHomeTab
  }
})()

// Contact Module
const ContactModule = (function () {
  function createContactTab () {
    const contactTab = document.createElement('div')
    contactTab.classList.add('tab-content')
    contactTab.innerHTML = `
            <h2>Contact Us</h2>
            <p>Address: 123 Main Street</p>
            <p>Email: info@example.com</p>
            <p>Phone: 07025255690</p>
        `
    return contactTab
  }

  return {
    createContactTab
  }
})()

// Menu Module
const MenuModule = (function () {
  function createMenuTab () {
    const menuTab = document.createElement('div')
    menuTab.classList.add('tab-content')
    menuTab.innerHTML = `
            <h2>Menu</h2>
            <ul>
                <li>Appetizers</li>
                <li>Main Courses</li>
                <li>Desserts</li>
            </ul>
        `
    return menuTab
  }

  return {
    createMenuTab
  }
})()

// Main Program
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.getElementById('tabs-container')

  // Function to switch between tabs
  function switchTab (tab) {
    tabsContainer.innerHTML = '' // Clear existing content
    tabsContainer.appendChild(tab)
  }

  // Event listeners for tab clicks
  document.getElementById('home-tab').addEventListener('click', function () {
    switchTab(HomeModule.createHomeTab())
  })

  document.getElementById('contact-tab').addEventListener('click', function () {
    switchTab(ContactModule.createContactTab())
  })

  document.getElementById('menu-tab').addEventListener('click', function () {
    switchTab(MenuModule.createMenuTab())
  })

  // Initial tab view
  switchTab(HomeModule.createHomeTab())
})

// eslint-disable-next-line no-unused-expressions, no-undef
javascript
document.addEventListener('DOMContentLoaded', function () {
  const tabsContainer = document.getElementById('content')

  // Function to switch between tabs
  function switchTab (tab) {
    tabsContainer.innerHTML = '' // Clear existing content
    tabsContainer.appendChild(tab)
  }

  // Event listeners for tab clicks
  document.getElementById('home-tab').addEventListener('click', function () {
    switchTab(HomeModule.createHomeTab())
  })

  document.getElementById('contact-tab').addEventListener('click', function () {
    switchTab(ContactModule.createContactTab())
  })

  document.getElementById('menu-tab').addEventListener('click', function () {
    switchTab(MenuModule.createMenuTab())
  })

  // Initial tab view
  switchTab(HomeModule.createHomeTab())
})

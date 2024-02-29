export function createAboutTab () {
  const aboutTab = document.createElement('div')
  aboutTab.classList.add('tab-content')
  aboutTab.innerHTML = `
        <h2>Contact Us</h2>
        <p>Address: 123 Main Street</p>
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
    `
  return aboutTab
}

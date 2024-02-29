export function createAboutTab () {
  const aboutTab = document.createElement('div')
  aboutTab.classList.add('tab-content2')
  aboutTab.innerHTML = `
        <h2>Contact Us</h2>
        <p>Akure, Ondo State, Nigeria. </p>
        <p>Email: brightbalogun195@gmail.com</p>
        <p>Phone: 07025255690</p>
    `
  return aboutTab
}

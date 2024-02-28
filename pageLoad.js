// Get the nav element
function initialPageLoad () {
  const nav = document.getElementById('content')

  // Create and append the first button
  const button1 = document.createElement('button')
  button1.textContent = 'Home'
  nav.appendChild(button1)

  // Create and append the second button
  const button2 = document.createElement('button')
  button2.textContent = 'Menu'
  nav.appendChild(button2)

  // Create and append the third button
  const button3 = document.createElement('button')
  button3.textContent = 'About'
  nav.appendChild(button3)

  // Create and append h1
  const heading = document.createElement('h1')
  heading.textContent = 'welcome to  Swallow Resturant.'
  nav.appendChild(heading)

  // Create and append the image
  const image = document.createElement('img')
  image.src = '../asset/food.jpg'
  nav.appendChild(image)

  // Create and append paragraph
  const p = document.createElement('p')
  p.textContent = 'we specialize on FUFU and VEGETABLE soup from the Rich Continent of  AFRICA'
  nav.appendChild(p)
}

console.log()

export { initialPageLoad }

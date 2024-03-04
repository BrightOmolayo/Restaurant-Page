// Get the nav element
function initialPageLoad () {
  const nav = document.getElementById('content')

  // Create and append h1
  const heading = document.createElement('h1')
  heading.textContent = 'Swallow Bistro'
  nav.appendChild(heading)

  // Create and append the image
  // const image = document.createElement('img')
  // image.src = '../asset/food.jpg'
  // nav.appendChild(image)

  // Create and append paragraph
  const p = document.createElement('p')
  p.textContent = 'We specialize on Swallow and SOUP from the Rich Continent of  AFRICA'
  nav.appendChild(p)

  // Create and append the first button
  const button1 = document.createElement('button')
  button1.textContent = 'Home'
  button1.id = 'home'
  nav.appendChild(button1)

  // Create and append the second button
  const button2 = document.createElement('button')
  button2.textContent = 'Menu'
  button2.id = 'menu'
  nav.appendChild(button2)

  // Create and append the third button
  const button3 = document.createElement('button')
  button3.textContent = 'Contact'
  button3.id = 'about'
  nav.appendChild(button3)
}

console.log()

export { initialPageLoad }

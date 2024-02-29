export function createMenuTab () {
  const menuTab = document.createElement('div')
  menuTab.classList.add('tab-content3')
  menuTab.innerHTML = `
        <h2>Menu</h2>
        <ul>
            <h3>Swallows</h3>
            <li>Amala</li>
            <li>Pounded yam</li>
            <li>semo</li>
        </ul>
        <ul>
        <h3>Soups</h3>
        <li>Vegetable soup</li>
        <li>Egusi</li>
        <li>seafood Okra</li>
    </ul>
    `
  return menuTab
}

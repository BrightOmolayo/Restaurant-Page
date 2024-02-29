export function createHomeTab () {
  const homeTab = document.createElement('div')
  homeTab.classList.add('tab-content')
  homeTab.innerHTML = `
        <h2>Welcome to Our Restaurant</h2>
        <p>Discover a world of flavors...</p>
    `
  return homeTab
}

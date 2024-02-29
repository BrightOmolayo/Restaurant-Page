export function createMenuTab () {
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

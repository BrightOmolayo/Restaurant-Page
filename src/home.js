export function createHomeTab () {
  const homeTab = document.createElement('div')
  homeTab.classList.add('tab-content1')
  homeTab.innerHTML = `
        <h2>Home</h2>
        <p>Discover a world of flavors... <br>
        Welcome, hungry diners and seekers of culinary delights!  <br> In this magical place where flavors intertwine and aromas whisper sweetly in your ear, <br> we welcome you to our humble culinary sanctuary. <br>

        Are you ready to embark on a sensory journey that will challenge your taste buds and <br> make you wonder if you've been living in a gastronomic cave all this time? Well, you're in the right place. <br> Here, we don't just feed you, we feed you with style!</p>
    `
  return homeTab
}

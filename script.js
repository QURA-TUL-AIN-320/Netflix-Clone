// Navbar scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50)
})

// Movie data
const data = {
  "Trending Now": [
    { title: "Stranger Things", match: "97%", year: 2022, genre: "Sci-Fi", color: "#1a1a2e" },
    { title: "The Crown", match: "90%", year: 2023, genre: "Drama", color: "#16213e" },
    { title: "Ozark", match: "94%", year: 2022, genre: "Thriller", color: "#0f3460" },
    { title: "Wednesday", match: "92%", year: 2022, genre: "Comedy", color: "#533483" },
    { title: "Squid Game", match: "96%", year: 2021, genre: "Thriller", color: "#e94560" },
    { title: "Money Heist", match: "95%", year: 2021, genre: "Action", color: "#c84b31" },
    { title: "Dark", match: "98%", year: 2020, genre: "Sci-Fi", color: "#2b2d42" },
    { title: "Narcos", match: "93%", year: 2017, genre: "Crime", color: "#3d5a80" },
  ],
  "Top Rated": [
    { title: "Breaking Bad", match: "99%", year: 2013, genre: "Drama", color: "#2d6a4f" },
    { title: "Mindhunter", match: "97%", year: 2019, genre: "Crime", color: "#1b4332" },
    { title: "The Witcher", match: "88%", year: 2021, genre: "Fantasy", color: "#6b4226" },
    { title: "Peaky Blinders", match: "96%", year: 2022, genre: "Crime", color: "#3a0ca3" },
    { title: "Ozark", match: "94%", year: 2022, genre: "Thriller", color: "#023e8a" },
    { title: "Lupin", match: "91%", year: 2021, genre: "Crime", color: "#7b2d8b" },
    { title: "Squid Game", match: "96%", year: 2021, genre: "Thriller", color: "#e63946" },
    { title: "Bridgerton", match: "87%", year: 2022, genre: "Drama", color: "#c77dff" },
  ],
  "Action & Adventure": [
    { title: "Extraction", match: "89%", year: 2020, genre: "Action", color: "#780000" },
    { title: "Red Notice", match: "80%", year: 2021, genre: "Action", color: "#9d0208" },
    { title: "The Gray Man", match: "84%", year: 2022, genre: "Action", color: "#370617" },
    { title: "Army of the Dead", match: "82%", year: 2021, genre: "Action", color: "#6a040f" },
    { title: "Interceptor", match: "78%", year: 2022, genre: "Action", color: "#d62828" },
    { title: "The Old Guard", match: "85%", year: 2020, genre: "Action", color: "#f77f00" },
    { title: "Spenser Confidential", match: "79%", year: 2020, genre: "Action", color: "#fcbf49" },
    { title: "6 Underground", match: "81%", year: 2019, genre: "Action", color: "#eae2b7" },
  ],
  "Hindi Movies": [
    { title: "Jawan", match: "95%", year: 2023, genre: "Action", color: "#7b0d1e" },
    { title: "Kabhi Khushi Kabhie Gham", match: "93%", year: 2001, genre: "Drama", color: "#4a0e8f" },
    { title: "Pathaan", match: "91%", year: 2023, genre: "Action", color: "#1a1a2e" },
    { title: "Dilwale Dulhania Le Jayenge", match: "98%", year: 1995, genre: "Romance", color: "#8b1a4a" },
    { title: "3 Idiots", match: "99%", year: 2009, genre: "Comedy", color: "#1b6ca8" },
    { title: "Dangal", match: "97%", year: 2016, genre: "Drama", color: "#2d6a4f" },
    { title: "RRR", match: "96%", year: 2022, genre: "Action", color: "#6b2737" },
    { title: "Bajrangi Bhaijaan", match: "94%", year: 2015, genre: "Drama", color: "#e07b39" },
  ],
  "Cartoons & Kids": [
    { title: "Barbie Dreamhouse", match: "92%", year: 2023, genre: "Cartoon", color: "#ff69b4" },
    { title: "Barbie & Her Sisters", match: "90%", year: 2022, genre: "Cartoon", color: "#ff1493" },
    { title: "Barbie Fairytopia", match: "88%", year: 2021, genre: "Cartoon", color: "#ff85c2" },
    { title: "Rudra — Boom Chik Chik Boom", match: "94%", year: 2023, genre: "Cartoon", color: "#ff6600" },
    { title: "Rudra The 3D Movie", match: "91%", year: 2022, genre: "Cartoon", color: "#cc4400" },
    { title: "Chhota Bheem", match: "93%", year: 2022, genre: "Cartoon", color: "#2ecc71" },
    { title: "Doraemon", match: "96%", year: 2023, genre: "Cartoon", color: "#3498db" },
    { title: "Shinchan", match: "89%", year: 2022, genre: "Cartoon", color: "#f1c40f" },
  ],
  "Comedy": [
    { title: "Emily in Paris", match: "86%", year: 2022, genre: "Comedy", color: "#ff6b6b" },
    { title: "Never Have I Ever", match: "91%", year: 2022, genre: "Comedy", color: "#feca57" },
    { title: "The Umbrella Academy", match: "93%", year: 2023, genre: "Comedy", color: "#ff9ff3" },
    { title: "The Good Place", match: "97%", year: 2020, genre: "Comedy", color: "#54a0ff" },
    { title: "Schitt's Creek", match: "98%", year: 2020, genre: "Comedy", color: "#5f27cd" },
    { title: "Brooklyn Nine-Nine", match: "96%", year: 2021, genre: "Comedy", color: "#00d2d3" },
    { title: "Arrested Development", match: "94%", year: 2019, genre: "Comedy", color: "#ff9f43" },
    { title: "Unbreakable Kimmy", match: "90%", year: 2019, genre: "Comedy", color: "#1dd1a1" },
  ]
}

// Build rows
const rowsEl = document.getElementById('rows')

Object.entries(data).forEach(([rowTitle, movies]) => {
  const row = document.createElement('div')
  row.className = 'row'
  row.innerHTML = `<h2>${rowTitle}</h2>`

  const wrap = document.createElement('div')
  wrap.className = 'row-track-wrap'

  const track = document.createElement('div')
  track.className = 'row-track'

  movies.forEach(m => {
    const card = document.createElement('div')
    card.className = 'card'
    card.style.background = m.color
    card.innerHTML = `
      <div class="card-title-overlay">${m.title}</div>
      <div class="card-hover-info">
        <div class="card-btns">
          <button class="card-btn-play">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="black"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <button class="card-btn-add">+</button>
        </div>
        <div class="card-match">${m.match} Match</div>
        <div class="card-meta">${m.year} • ${m.genre}</div>
      </div>
    `
    track.appendChild(card)
  })

  const leftBtn = document.createElement('button')
  leftBtn.className = 'arrow-btn arrow-left'
  leftBtn.innerHTML = '&#8249;'
  leftBtn.style.display = 'none'
  leftBtn.onclick = () => {
    track.scrollBy({ left: -600, behavior: 'smooth' })
    setTimeout(updateArrows, 400)
  }

  const rightBtn = document.createElement('button')
  rightBtn.className = 'arrow-btn arrow-right'
  rightBtn.innerHTML = '&#8250;'
  rightBtn.onclick = () => {
    track.scrollBy({ left: 600, behavior: 'smooth' })
    setTimeout(updateArrows, 400)
  }

  function updateArrows() {
    leftBtn.style.display = track.scrollLeft > 0 ? 'flex' : 'none'
    rightBtn.style.display = (track.scrollLeft + track.clientWidth < track.scrollWidth - 10) ? 'flex' : 'none'
  }

  track.addEventListener('scroll', updateArrows)

  wrap.appendChild(leftBtn)
  wrap.appendChild(track)
  wrap.appendChild(rightBtn)
  row.appendChild(wrap)
  rowsEl.appendChild(row)
})

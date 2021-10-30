const APIURL = 'https://api.github.com/users/'

const input = document.querySelector('#input')
const card = document.querySelector('.main__card')
const form = document.querySelector('#form')

async function getUser(username) {
  const response = await fetch(APIURL + username)
  const data = await response.json()
  console.log(data)
  createUserCard(data)
}

function createUserCard(user) {
  const userCard = `
  <div class="card">
  <div class="card__avatar">
    <img
      class="card__avatar--img"
      src="${user.avatar_url}"
      alt=""
    />
  </div>
  <div class="card__info">
    <div class="card__info--header">
      <div class="card__info--header--description">
        <span class="card__info--header--description--name"
          >${user.name}</span
        >
        <span class="card__info--header--description--login"
          >@${user.login}</span
        >
      </div>
      <div class="card__info--header--date">
        <span>${new Date(user.created_at).getMonth().toLocaleString()}</span>
      </div>
    </div>
    <span class="card__info--bio">${
      user.bio ? user.bio : 'This profile has no bio'
    }</span>
    <div class="card__info--stat">
      <div class="card__info--stat--item"><span>Repos</span>${
        user.public_repos
      }</div>
      <div class="card__info--stat--item">
        <span>Followers</span>${user.followers}
      </div>
      <div class="card__info--stat--item">
        <span>Following</span>${user.following}
      </div>
    </div>
    <div class="card__info--footer">
      <a href="#" class="card__info--footer--item"
        ><i class="fas fa-map-marker-alt"></i> ${user.location}</a
      >
      <a href="#" class="card__info--footer--item"
        ><i class="fab fa-twitter"></i> ${
          user.twitter_username ? user.twitter_username : 'Not Available'
        }</a
      >
      <a href="#" class="card__info--footer--item"
        ><i class="fas fa-link"></i> ${user.blog}
      </a>
      <a href="#" class="card__info--footer--item"
        ><i class="fas fa-building"></i> ${
          user.company ? user.company : 'Not Available'
        } </a
      >
    </div>
  </div>
</div>
  `

  card.innerHTML = userCard
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = input.value

  if (user) {
    getUser(user)

    search.value = ''
  }
})

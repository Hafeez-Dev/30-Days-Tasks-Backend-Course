const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

const github = {
  "login": "Hafeez-Dev",
  "id": 171664425,
  "node_id": "U_kgDOCjtkKQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/171664425?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Hafeez-Dev",
  "html_url": "https://github.com/Hafeez-Dev",
  "followers_url": "https://api.github.com/users/Hafeez-Dev/followers",
  "following_url": "https://api.github.com/users/Hafeez-Dev/following{/other_user}",
  "gists_url": "https://api.github.com/users/Hafeez-Dev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Hafeez-Dev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Hafeez-Dev/subscriptions",
  "organizations_url": "https://api.github.com/users/Hafeez-Dev/orgs",
  "repos_url": "https://api.github.com/users/Hafeez-Dev/repos",
  "events_url": "https://api.github.com/users/Hafeez-Dev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Hafeez-Dev/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdul Hafeez",
  "company": "Upwork",
  "blog": "",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": "💻 Front End React Developer",
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 3,
  "following": 1,
  "created_at": "2024-06-04T07:46:18Z",
  "updated_at": "2025-07-09T05:44:44Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("Abdul is here for you help!")
})

app.get('/insta', (req, res) => {
    res.send("debugcodez")
})

app.get('/github', (req, res) => {
    res.send(github)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

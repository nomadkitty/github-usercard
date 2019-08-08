/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards');

axios.get('https://api.github.com/users/nomadkitty')
  .then((Response)=> {
    console.log(Response);
    cards.appendChild(GithubCard(Response.data));
    })
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [{
  "login": "Au-Jones",
  "id": 48571738,
  "node_id": "MDQ6VXNlcjQ4NTcxNzM4",
  "avatar_url": "https://avatars0.githubusercontent.com/u/48571738?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Au-Jones",
  "html_url": "https://github.com/Au-Jones",
  "followers_url": "https://api.github.com/users/Au-Jones/followers",
  "following_url": "https://api.github.com/users/Au-Jones/following{/other_user}",
  "gists_url": "https://api.github.com/users/Au-Jones/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Au-Jones/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Au-Jones/subscriptions",
  "organizations_url": "https://api.github.com/users/Au-Jones/orgs",
  "repos_url": "https://api.github.com/users/Au-Jones/repos",
  "events_url": "https://api.github.com/users/Au-Jones/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Au-Jones/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "briannakeune",
  "id": 42918544,
  "node_id": "MDQ6VXNlcjQyOTE4NTQ0",
  "avatar_url": "https://avatars3.githubusercontent.com/u/42918544?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/briannakeune",
  "html_url": "https://github.com/briannakeune",
  "followers_url": "https://api.github.com/users/briannakeune/followers",
  "following_url": "https://api.github.com/users/briannakeune/following{/other_user}",
  "gists_url": "https://api.github.com/users/briannakeune/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/briannakeune/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/briannakeune/subscriptions",
  "organizations_url": "https://api.github.com/users/briannakeune/orgs",
  "repos_url": "https://api.github.com/users/briannakeune/repos",
  "events_url": "https://api.github.com/users/briannakeune/events{/privacy}",
  "received_events_url": "https://api.github.com/users/briannakeune/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "MosesSupposes",
  "id": 16858392,
  "node_id": "MDQ6VXNlcjE2ODU4Mzky",
  "avatar_url": "https://avatars3.githubusercontent.com/u/16858392?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/MosesSupposes",
  "html_url": "https://github.com/MosesSupposes",
  "followers_url": "https://api.github.com/users/MosesSupposes/followers",
  "following_url": "https://api.github.com/users/MosesSupposes/following{/other_user}",
  "gists_url": "https://api.github.com/users/MosesSupposes/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/MosesSupposes/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/MosesSupposes/subscriptions",
  "organizations_url": "https://api.github.com/users/MosesSupposes/orgs",
  "repos_url": "https://api.github.com/users/MosesSupposes/repos",
  "events_url": "https://api.github.com/users/MosesSupposes/events{/privacy}",
  "received_events_url": "https://api.github.com/users/MosesSupposes/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "DerekEtman",
  "id": 49086915,
  "node_id": "MDQ6VXNlcjQ5MDg2OTE1",
  "avatar_url": "https://avatars3.githubusercontent.com/u/49086915?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DerekEtman",
  "html_url": "https://github.com/DerekEtman",
  "followers_url": "https://api.github.com/users/DerekEtman/followers",
  "following_url": "https://api.github.com/users/DerekEtman/following{/other_user}",
  "gists_url": "https://api.github.com/users/DerekEtman/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DerekEtman/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DerekEtman/subscriptions",
  "organizations_url": "https://api.github.com/users/DerekEtman/orgs",
  "repos_url": "https://api.github.com/users/DerekEtman/repos",
  "events_url": "https://api.github.com/users/DerekEtman/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DerekEtman/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "pusheadmetal",
  "id": 17813760,
  "node_id": "MDQ6VXNlcjE3ODEzNzYw",
  "avatar_url": "https://avatars3.githubusercontent.com/u/17813760?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pusheadmetal",
  "html_url": "https://github.com/pusheadmetal",
  "followers_url": "https://api.github.com/users/pusheadmetal/followers",
  "following_url": "https://api.github.com/users/pusheadmetal/following{/other_user}",
  "gists_url": "https://api.github.com/users/pusheadmetal/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pusheadmetal/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pusheadmetal/subscriptions",
  "organizations_url": "https://api.github.com/users/pusheadmetal/orgs",
  "repos_url": "https://api.github.com/users/pusheadmetal/repos",
  "events_url": "https://api.github.com/users/pusheadmetal/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pusheadmetal/received_events",
  "type": "User",
  "site_admin": false
}];

followersArray.forEach(item=>{
        let followerCards = GithubCard(item);
        cards.appendChild(followerCards); 
      })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function GithubCard(object){
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = object['avatar_url'];

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = object.login;

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = object.name;

  const location = document.createElement('p');
  location.textContent = `Location: ${object.location}`;

  const profile = document.createElement('p');
  profile.textContent = `Profile: `;

  const githubLink = document.createElement('a');
  githubLink.href = object['html_url'];
  githubLink.textContent = object['html_url'];

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${object.followers}`;

  const following = document.createElement('p');
  following.textContent = `Following: ${object.following}`;

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${object.bio}`;

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(githubLink);

  return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


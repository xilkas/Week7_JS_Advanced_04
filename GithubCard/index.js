
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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




      function createGitCard(data){

         const MainDiv = document.createElement("div")
         const userImage = document.createElement("img")
         const cardDiv = document.createElement("div")
         const userTitle = document.createElement("h3")
         const userName = document.createElement("p")
         const userLocation = document.createElement("p")
         const userProfile = document.createElement("p")
         const userAddress = document.createElement("a")
         const userFollowers = document.createElement("p")
         const userFollowing = document.createElement("p")
         const userBio = document.createElement("p")
      



   // add data 

 userImage.src= data.avatar_url;
 userTitle.textContent = data.login;
 userBio.textContent = "Bio : "   +   data.bio;
 userAddress.textContent = data.url;
 userFollowers.textContent = " followers : " + data.followers;
 userFollowing.textContent= "Following: "   +  data.following;



 // add clasess

 MainDiv.classList.add("card")
 cardDiv.classList.add("card-info")
 userTitle.classList.add("name")
 userName.classList.add("userName")

   // connecting all elements using (appenChild)



   userProfile.appendChild(userAddress)


 cardDiv.appendChild(userTitle)
 cardDiv.appendChild(userName)
 cardDiv.appendChild(userLocation)
 cardDiv.appendChild(userProfile)
 cardDiv.appendChild(userFollowers)
 cardDiv.appendChild(userFollowing)
 cardDiv.appendChild(userBio)

 MainDiv.appendChild(userImage)
 MainDiv.appendChild(cardDiv)


 return MainDiv



 }



  // call Api using Axios and connect the fucntion to the root element in the index.html



 const entaryCards = document.querySelector(".cards")






 axios.get(" https://api.github.com/users/xilkas")
 .then(res => {
   entaryCards.appendChild(createGitCard(res.data))

 })
 .catch(erro => {
   console.log(erro)
 });


/*
  STEP 4: Pass the data received from Github into your function, and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers, manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each user, and adding that card to the DOM.
*/

const followersArray = [];


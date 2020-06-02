var image = document.querySelector("img");
var jokeDiv = document.querySelector("#jokeDisplay");
var button = document.querySelector("#GetJoke");

button.addEventListener("click", function () {
  getJoke();
});

function getJoke() {
  fetch("http://api.icndb.com/jokes/random", {
    method: "GET",
    headers: {
      cookie: "__cfduid=d9d1f5cd2e9db4c3ac7c2d9518145a5401591132260",
    },
  })
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw err;
      }
      return response.json();
    })
    .then((response) => {
      jokeDiv.innerHTML = response.value.joke;
    })
    .catch((err) => {
      console.log(err);
    });
}

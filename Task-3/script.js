function fetchJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke").textContent = data.joke;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Oops! Something went wrong.";
      console.error("Fetch error:", error);
    });
}

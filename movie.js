// Function to perform a movie search
function searchMovies() {
    const searchQuery = document.getElementById('searchInput').value;
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }
  
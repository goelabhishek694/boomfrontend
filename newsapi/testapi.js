var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=0da9053654be47a7abaa8ddf6ac38424';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    });
const apiKey = 'AC5hiIcNXiSWJ9dWZbGlOyjmD3qIruIq';
const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

request
    .then(response => response.json())
    .then( ({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch( console.warn );
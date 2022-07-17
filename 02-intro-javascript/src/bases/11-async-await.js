
const getImage = async () => {
    try {
        const apiKey = 'AC5hiIcNXiSWJ9dWZbGlOyjmD3qIruIq';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    } catch (error) {
        console.error(error);
    }
}

getImage();
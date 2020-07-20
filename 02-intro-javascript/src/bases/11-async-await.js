//const getImagenPromesa = () => new Promise( (resolve) => resolve('https://asdasdasd.com') );
//getImagenPromesa().then(console.log);

const getImagen = async () => {

    try {
        const apiKey = 'o1nsPKCtKjGNQdbGHLcs3QUl3hVmGFk6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    
        console.log(url);
    }catch(error){
        // manejo del error
        console.error(error);
    }
}

getImagen()

// peticion
//     .then((resp) => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append( img );
//     })
//     .catch(console.warn);
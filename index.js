let nav = document.getElementById("nav");

let image_div = document.getElementById("images");

async function getImage() {
    try {
        let res = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_8gphg7ks');
        let data = await res.json();
        addImage(data.items);
        console.log(data.items);
    } catch (e) {
        console.log(e);
    }
}

getImage();

function addImage(el){
    el.forEach(({fullTitle, image}) => {
        let innerDiv = document.createElement("div");
    
        let title = document.createElement("h4");
        title.innerText = fullTitle;
        
        let Image = document.createElement("img");
        Image.src = image;
    
        innerDiv.append(Image,title);
    
        image_div.append(innerDiv);
      })
}
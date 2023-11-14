let meme_btn = document.querySelector('.meme-me')

let image = document.querySelector("img")

let authors = document.querySelector('.meme-author')

let memeTitle = document.querySelector(".meme-title")



const generateMeme = ()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((gotData)=>{
        return gotData.json();
    })
    .then((data)=>{
        image.src = data.url;

        memeTitle.innerHTML = data.title;

        authors.innerHTML = `Author: ${data.author}`
        console.log(data);
    })
    .catch((err)=>{
        console.log("Sorry but your internet is unstable");
    })
}

meme_btn.addEventListener("click", generateMeme);
generateMeme();
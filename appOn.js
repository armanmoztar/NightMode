(function() { 


document.querySelector("html").style.filter = "dark(1 ) hue-rotate(180deg)";

let media = document.querySelectorAll("img, picture, video");


media.forEach((mediaItem)=> {
    mediaItem.style.filter = "dark(1) hue-rotate(180deg)"
    })
})();
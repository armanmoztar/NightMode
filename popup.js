if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    function dark() {
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    click = button.addEventListener("click", () => {
        const tabId = click; // added 
        if (!buttonOn) {
            buttonOn = true;

            button.style.animation = "transformToBlue 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 0.5s ease-in-out 0s forwards"
            chrome.scripting.executeScript({
                target: { tabId: tabId, allFrames: true },
                files: ['appOn.js']
            })
        }
        else {
            buttonOn = false;
            button.style.animation = "transformToWhite 0.5s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 0.5s ease-in-out 0s forwards"
            chrome.scripting.executeScript({
                target: { tabId: tabId, allFrames: true },
                files: ['appOff.js']
            })
        }
    })
}
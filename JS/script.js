"use strict";
// for manual picture change in slider
let imageDict = ["Images/guitar.jpg",
    "Images/saxophone2.jpg",
    "Images/pianoNote.jpg",
    "Images/violin.jpg",
    "Images/guitar3.jpg",
    "Images/piano.jpg",
    "Images/violinPlay.jpg",
    "Images/percussion.jpg"];

function getPictureFileName() {
    let element = document.getElementById("pict2");
    let currentPict = element.src;
    let imageNamePosition = currentPict.indexOf("Images/");
    return currentPict.substr(imageNamePosition);// name of the file
}

function changePicture(reverse = false) {
    let element = document.getElementById("pict2");
    let currentPict = getPictureFileName();
    let currentPictIndex = imageDict.indexOf(currentPict);
    if (reverse) {
        if (currentPictIndex > 0) currentPictIndex -= 1; // next picture index
        else currentPictIndex = imageDict.length - 1; // reset to end of array
    }
    else {
        if (currentPictIndex < imageDict.length - 1) currentPictIndex += 1; // next picture index
        else currentPictIndex = 0; // reset to start of array
    }
    element.src = imageDict[currentPictIndex]; // show next picture in array
}

function updatePicture() { setInterval(changePicture, 3000) }
updatePicture();// update picture on Home page every 3 seconds

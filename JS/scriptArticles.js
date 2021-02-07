"use strict";

function details(elementId, showHideId) {
    let element = document.getElementById(elementId);
    let showHideDetail = document.getElementById(showHideId);
    if ( element.style.display === 'none' ) {
        element.style.display = 'block'
        showHideDetail.innerText = "скрыть";
    }
    else if ( element.style.display === 'block' ) {
        element.style.display = 'none';
        showHideDetail.innerText = "подробнее";
    }
}


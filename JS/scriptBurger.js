"use strict";
//for tablet and mobile burger menu
function down() {
    let element = document.getElementById('dropdown');
    if ( element.style.display === 'none' )
        element.style.display = 'block'
    else if ( element.style.display === 'block' )
        element.style.display = 'none';
}
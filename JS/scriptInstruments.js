"use strict";

function setSubject(subject) {
    let inst1Div = document.getElementById('inst1');
    let inst2Div = document.getElementById('inst2');
    let inst3Div = document.getElementById('inst3');
    let inst4Div = document.getElementById('inst4');
    let inst5Div = document.getElementById('inst5');
    switch (subject) {
        case 'guitar':
            inst1Div.style.display = 'block';
            inst2Div.style.display = 'none';
            inst3Div.style.display = 'none';
            inst4Div.style.display = 'none';
            inst5Div.style.display = 'none';
            break;
        case 'saxophone':
            inst1Div.style.display = 'none';
            inst2Div.style.display = 'block';
            inst3Div.style.display = 'none';
            inst4Div.style.display = 'none';
            inst5Div.style.display = 'none';
            break;
        case 'violin':
            inst1Div.style.display = 'none';
            inst2Div.style.display = 'none';
            inst3Div.style.display = 'block';
            inst4Div.style.display = 'none';
            inst5Div.style.display = 'none';
            break;
        case 'percussion':
            inst1Div.style.display = 'none';
            inst2Div.style.display = 'none';
            inst3Div.style.display = 'none';
            inst4Div.style.display = 'block';
            inst5Div.style.display = 'none';
            break;
        case 'piano':
            inst1Div.style.display = 'none';
            inst2Div.style.display = 'none';
            inst3Div.style.display = 'none';
            inst4Div.style.display = 'none';
            inst5Div.style.display = 'block';
            break;
        default:
            inst1Div.style.display = 'block';
            inst2Div.style.display = 'none';
            inst3Div.style.display = 'none';
            inst4Div.style.display = 'none';
            inst5Div.style.display = 'none';
    }

}
function setInstrument(subject) {
    let drpDwnBtn = document.getElementById('dropDownBtn');

    drpDwnBtn.innerText = document.getElementById(subject).innerText;
    setSubject(subject);
}

function setInstrumentMini() {
    let subject = document.getElementById("comb");
    setSubject(subject.value);
}


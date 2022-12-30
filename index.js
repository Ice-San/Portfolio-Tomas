// Translate Portfolio

const hideEng = document.querySelectorAll('.eng');
const hidePt = document.querySelectorAll('.pt');

window.onload = function WindowLoad(event) {
    if (window.confirm('Click \"OK\" if you want the Website to be in Portuguese!')) {

        for (let i = 0; i < hideEng.length; i++) {
            hideEng[i].style.display = "none";
          }

    } else {
        
        for (let i = 0; i < hidePt.length; i++) {
            hidePt[i].style.display = "none";
          }

    }
}

function whiteTheme() {
    document.getElementsByClassName('fa-toggle-off').style.display = "none";
    document.getElementsByClassName('fa-toggle-on').style.display = "unset";
    document.getElementById('TextTheme').innerText = "Night Theme";
    document.getElementsByTagName("body").style = "background-color: black; color: white;";
}
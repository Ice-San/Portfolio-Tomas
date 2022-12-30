/* ============================== 

          Website Languages

   ==============================*/

const hideEng = document.querySelectorAll('.eng');
const hidePt = document.querySelectorAll('.pt');

window.onload = function WindowLoad(event) {
    if (window.confirm('Click \"OK\" if you want the Website to be in Portuguese!')) {

        for (let i = 0; i < hideEng.length; i++) {
            hideEng[i].style.display = "none";
            hidePt[i].style.display = "unset";
          }

    } else {
        
        for (let i = 0; i < hidePt.length; i++) {
            hidePt[i].style.display = "none";
            hideEng[i].style.display = "unset";
          }

    }
}

/* ============================== 

          Website Theme

   ==============================*/

function whiteTheme() {
    document.querySelector('.fa-toggle-off').style.display = "none";
    document.querySelector('.fa-toggle-on').style.display = "unset";
    document.getElementById('TextThemeEng').innerText = "Night Theme";
    document.getElementById('TextThemePt').innerText = "Tema Preto";
    document.body.style = "background-color: rgb(27, 27, 27); color: white;";
    document.querySelector('.Webpage-Icon').style = "background-color: rgb(27, 27, 27);";
}

function blackTheme() {
    document.querySelector('.fa-toggle-off').style.display = "unset";
    document.querySelector('.fa-toggle-on').style.display = "none";
    document.getElementById('TextThemeEng').innerText = "Day Theme";
    document.getElementById('TextThemePt').innerText = "Tema Branco";
    document.body.style = "background-color: white; color: black;";
    document.querySelector('.Webpage-Icon').style = "background-color: white;";
}
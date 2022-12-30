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
    document.querySelector('.Webpage-ChangeTheme i').style.color = "white";
    document.getElementById('TextThemePt').style.color = "white";
    document.getElementById('TextThemeEng').style.color = "white";
    document.body.style = "background-color: rgb(27, 27, 27); color: white;";
    document.querySelector('.Webpage-Icon').style = "background-color: rgb(27, 27, 27);";
    document.querySelector('.pop-up-container').style = "background-color: rgb(27, 27, 27);";
    document.querySelector('.pop-up-container-description-icon').style = "border: 3px solid white;";

}

function blackTheme() {

    document.querySelector('.fa-toggle-off').style.display = "unset";
    document.querySelector('.fa-toggle-on').style.display = "none";
    document.getElementById('TextThemeEng').innerText = "Day Theme";
    document.getElementById('TextThemePt').innerText = "Tema Branco";
    document.querySelector('.Webpage-ChangeTheme i').style.color = "black";
    document.getElementById('TextThemePt').style.color = "black";
    document.getElementById('TextThemeEng').style.color = "black";
    document.body.style = "background-color: white; color: black;";
    document.querySelector('.Webpage-Icon').style = "background-color: white;";
    document.querySelector('.pop-up-container').style = "background-color: white;";
    document.querySelector('.pop-up-container-description-icon').style = "border: 3px solid black;";

}


/* ============================== 

          Website Pop-ups

   ==============================*/


function aboutmePopup() {
    document.querySelector('.pop-up').style.visibility = "visible";
}

function aboutmePopupClose() {
    document.querySelector('.pop-up').style.visibility = "hidden";
}
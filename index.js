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

   // ------------- Consts -----------------------------------------------------------------

    const buttonOn =  document.querySelector('.fa-toggle-on');
    const buttonOff = document.querySelector('.fa-toggle-off');
    const portuguese = document.getElementById('TextThemePt');
    const english = document.getElementById('TextThemeEng');
    const webpageIcon = document.querySelector('.Webpage-Icon');
    const popupContainer = document.querySelector('.pop-up-container');
    const popupDescriptionIcon = document.querySelector('.pop-up-container-description-icon');

    // ----------- Add Click Events ---------------------------------------------------------

    buttonOff.addEventListener("click", whiteTheme);
    buttonOn.addEventListener("click", whiteTheme);

    // ------------ Functions ---------------------------------------------------------------

function whiteTheme() {

            // Buttons Visibility
    buttonOn.classList.add('visibility-with-display-on');
    buttonOff.classList.add('visibility-with-display-off');

            // Translation
    portuguese.innerText = "Tema Preto";
    english.innerText = "Tema Preto";

            // Changing Theme of the page
    document.querySelector('.Webpage-ChangeTheme i').classList.add('white-text');
    portuguese.classList.add('white-text');
    english.classList.add('white-text');

    document.body.classList.remove('white-background', 'black-text');
    webpageIcon.classList.remove('white-background');
    popupContainer.classList.remove('white-background');
    popupDescriptionIcon.classList.remove('white-background');

    document.body.classList.add('black-background', 'white-text');
    webpageIcon.classList.add('black-background');
    popupContainer.classList.add('black-background');
    popupDescriptionIcon.classList.add('border-white');

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
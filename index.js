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
    const navbarTheme = document.querySelector('.navbar');

    // ----------- Add Click Events ---------------------------------------------------------

    buttonOff.addEventListener("click", whiteTheme);
    buttonOn.addEventListener("click", blackTheme);

    // ------------ Functions ---------------------------------------------------------------

function whiteTheme() {

            // Buttons Visibility
    buttonOn.style.display = "unset";

    buttonOff.style.display = "none";

            // Translation
    portuguese.innerText = "Tema Preto";
    english.innerText = "Night Theme";

            // Changing Theme of the page
    document.querySelector('.Webpage-ChangeTheme i').classList.remove('black-text');
    document.querySelector('.Webpage-ChangeTheme i').classList.add('white-text');

    navbarTheme.classList.remove('black-text');
    navbarTheme.classList.remove('bg-body-tertiary');
    navbarTheme.classList.add('white-theme');

    portuguese.classList.remove('black-text');
    portuguese.classList.add('white-text');

    english.classList.remove('black-text');
    english.classList.add('white-text');

    document.body.classList.remove('white-background', 'black-text');
    webpageIcon.classList.remove('white-background');
    popupContainer.classList.remove('white-background');
    popupDescriptionIcon.classList.remove('border-black');

    document.body.classList.add('black-background', 'white-text');
    webpageIcon.classList.add('black-background');
    popupContainer.classList.add('black-background');
    popupDescriptionIcon.classList.add('border-white');

}

function blackTheme() {

            // Buttons Visibility
    buttonOn.style.display = "none";

    buttonOff.style.display = "unset";

            // Translation
    portuguese.innerText = "Tema Branco";
    english.innerText = "Day Theme";

            // Changing Theme of the page
    document.querySelector('.Webpage-ChangeTheme i').classList.remove('white-text');
    document.querySelector('.Webpage-ChangeTheme i').classList.add('black-text');

    navbarTheme.classList.remove('white-text');
    navbarTheme.classList.remove('bg-body-tertiary');
    navbarTheme.classList.add('black-text');

    portuguese.classList.remove('white-text');
    portuguese.classList.add('black-text');

    english.classList.remove('white-text');
    english.classList.add('black-text');

    document.body.classList.remove('black-background', 'white-text');
    webpageIcon.classList.remove('black-background');
    popupContainer.classList.remove('black-background');
    popupDescriptionIcon.classList.remove('border-white');

    document.body.classList.add('white-background', 'black-text');
    webpageIcon.classList.add('white-background');
    popupContainer.classList.add('white-background');
    popupDescriptionIcon.classList.add('border-black');

}


/* ============================== 

          Website Pop-ups

   ==============================*/

// ------------- Consts -----------------------------------------------------------------

const popupAboutmeOpenEng = document.getElementById('aboutme-popup-eng');
const popupAboutmeOpenPt = document.getElementById('aboutme-popup-pt');
const popupAboutmeClose = document.querySelector('.pop-up-close i');
const popupAboutme = document.querySelector('.pop-up');

// ----------- Add Click Events ---------------------------------------------------------

popupAboutmeOpenEng.addEventListener("click", aboutmePopup);
popupAboutmeOpenPt.addEventListener("click", aboutmePopup);
popupAboutmeClose.addEventListener("click", aboutmePopupClose);

// ------------ Functions ---------------------------------------------------------------

function aboutmePopup() {

    popupAboutme.classList.remove('visibility-with-visibility-off');
    popupAboutme.classList.add('visibility-with-visibility-on');
}

function aboutmePopupClose() {

    popupAboutme.classList.add('visibility-with-visibility-off');
    popupAboutme.classList.remove('visibility-with-visibility-on');
}
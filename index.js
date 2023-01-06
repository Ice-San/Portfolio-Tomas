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
    const popupContainerLocation = document.querySelector('.pop-up-container-location');
    const popupContainerPosts = document.querySelector('.pop-up-container-posts');
    const popupContainerContact = document.querySelector('.pop-up-container-contact');
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
    popupContainerLocation.classList.remove('white-background');
    popupContainerPosts.classList.remove('white-background');
    popupContainerContact.classList.remove('white-background');
    popupDescriptionIcon.classList.remove('border-black');

    document.body.classList.add('black-background', 'white-text');
    webpageIcon.classList.add('black-background');
    popupContainer.classList.add('black-background');
    popupContainerLocation.classList.add('black-background');
    popupContainerPosts.classList.add('black-background');
    popupContainerContact.classList.add('black-background');
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
    popupContainerLocation.classList.remove('black-background');
    popupContainerPosts.classList.remove('black-background');
    popupContainerContact.classList.remove('black-background');
    popupDescriptionIcon.classList.remove('border-white');

    document.body.classList.add('white-background', 'black-text');
    webpageIcon.classList.add('white-background');
    popupContainer.classList.add('white-background');
    popupContainerLocation.classList.add('white-background');
    popupContainerPosts.classList.add('white-background');
    popupContainerContact.classList.add('white-background');
    popupDescriptionIcon.classList.add('border-black');

}


/* ============================== 

          Website Pop-ups

   ==============================*/

// ------------- Consts -----------------------------------------------------------------

const popupAboutmeOpenEng = document.getElementById('aboutme-popup-eng');
const popupAboutmeOpenPt = document.getElementById('aboutme-popup-pt');

const popupPostsOpenEng = document.getElementById('posts-popup-eng');
const popupPostsOpenPt = document.getElementById('posts-popup-pt');

const popupLocationOpenEng = document.getElementById('location-popup-eng');
const popupLocationOpenPt = document.getElementById('location-popup-pt');

const popupContactOpenEng = document.getElementById('contact-popup-eng');
const popupContactOpenPt = document.getElementById('contact-popup-pt');

const popupAboutmeClose = document.querySelector('.close-aboutme i');
const popupAboutme = document.querySelector('.pop-up-aboutme');

const popupPostsClose = document.querySelector('.close-posts ');
const popupPosts = document.querySelector('.pop-up-posts');

const popupLocationClose = document.querySelector('.close-location i');
const popupLocation = document.querySelector('.pop-up-location');

const popupContactClose = document.querySelector('.close-contact i');
const popupContact = document.querySelector('.pop-up-contact');

// ----------- Add Click Events ---------------------------------------------------------

popupAboutmeOpenEng.addEventListener("click", aboutmePopup);
popupAboutmeOpenPt.addEventListener("click", aboutmePopup);
popupAboutmeClose.addEventListener("click", aboutmePopupClose);

popupPostsOpenEng.addEventListener("click", postsPopup);
popupPostsOpenPt.addEventListener("click", postsPopup);
popupPostsClose.addEventListener("click", postsPopupClose);

popupLocationOpenEng.addEventListener("click", locationPopup);
popupLocationOpenPt.addEventListener("click", locationPopup);
popupLocationClose.addEventListener("click", locationPopupClose);

popupContactOpenEng.addEventListener("click", contactPopup);
popupContactOpenPt.addEventListener("click", contactPopup);
popupContactClose.addEventListener("click", contactPopupClose);


// ------------ Functions ---------------------------------------------------------------

function aboutmePopup() {

    popupAboutme.classList.remove('visibility-with-visibility-off');
    popupAboutme.classList.add('visibility-with-visibility-on');
}

function aboutmePopupClose() {

    popupAboutme.classList.add('visibility-with-visibility-off');
    popupAboutme.classList.remove('visibility-with-visibility-on');
}

function postsPopup() {

    popupPosts.classList.remove('visibility-with-visibility-off');
    popupPosts.classList.add('visibility-with-visibility-on');
}

function postsPopupClose() {

  popupPosts.classList.add('visibility-with-visibility-off');
  popupPosts.classList.remove('visibility-with-visibility-on');
}

function locationPopup() {

  popupLocation.classList.remove('visibility-with-visibility-off');
  popupLocation.classList.add('visibility-with-visibility-on');
}

function locationPopupClose() {

  popupLocation.classList.add('visibility-with-visibility-off');
  popupLocation.classList.remove('visibility-with-visibility-on');
}

function contactPopup() {

  popupContact.classList.remove('visibility-with-visibility-off');
  popupContact.classList.add('visibility-with-visibility-on');
}

function contactPopupClose() {
  
  popupContact.classList.add('visibility-with-visibility-off');
  popupContact.classList.remove('visibility-with-visibility-on');
}
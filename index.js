// ==== HTML Elements ====
const popUpContainer = document.getElementById("pop-up");
const popUpAboutMeContainer = document.getElementById("pop-up-about-me");
const popUpChatMeContainer = document.getElementById("pop-up-chat-me");
const popUpKnowMoreContainer = document.getElementById("pop-up-know-more");
const popUpCloseButton = document.querySelector(".pop-up-close-button");
const chatMeButton = document.getElementById("chat-me-button");
const aboutMeButton = document.getElementById("about-me-button");
const knowMoreButton = document.getElementById("know-more-button");
const messageContainer = document.getElementById("message-container");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");
const sendMessageButton = document.getElementById("send-message-button");

// ==== Functions ====
const showPopUp = () => {
  if (popUpContainer.classList.contains("hidden"))
    popUpContainer.classList.remove("hidden");
};

const destroyPopUpContainers = () => {
  if (!popUpAboutMeContainer.classList.contains("vanish"))
    popUpAboutMeContainer.classList.add("vanish");
  if (!popUpChatMeContainer.classList.contains("vanish"))
    popUpChatMeContainer.classList.add("vanish");
  if (!popUpKnowMoreContainer.classList.contains("vanish"))
    popUpKnowMoreContainer.classList.add("vanish");
};

const hiddenPopUp = () => {
  destroyPopUpContainers();
  if (!popUpContainer.classList.contains("hidden"))
    popUpContainer.classList.add("hidden");
};

const showAboutMe = () => {
  destroyPopUpContainers();
  showPopUp();
  popUpAboutMeContainer.classList.remove("vanish");
};

const showChatMe = () => {
  destroyPopUpContainers();
  showPopUp();
  popUpChatMeContainer.classList.remove("vanish");
};

const showKnowMe = () => {
  destroyPopUpContainers();
  showPopUp();
  popUpKnowMoreContainer.classList.remove("vanish");
};

const formAlert = () =>
  setTimeout(() => alert("Fields need to be filled in :)"), 200);

const sendMessage = () => {
  const emailInputValue = emailInput.value;
  const messageInputValue = messageInput.value;
  messageContainer.innerHTML = `
    <div class="message">
      <h3>${emailInputValue}</h3>
      <p>${messageInputValue}</p>
    </div>
  `;
  if (!emailInputValue || !messageInputValue) {
    messageContainer.innerHTML = "";
    formAlert();
  }
};

// ==== Events ====
popUpCloseButton.addEventListener("click", hiddenPopUp);
aboutMeButton.addEventListener("click", showAboutMe);
chatMeButton.addEventListener("click", showChatMe);
knowMoreButton.addEventListener("click", showKnowMe);
sendMessageButton.addEventListener("click", sendMessage);

const header = "header";

const displayPopUp = {
  show: "flex",
  hide: "none",
};

const ticketImg = "txtTicketImg";
const ticketPlace = "txtPlace";
const ticketDate = "txtDate";
const ticketDes = "txtDes";
const ticketCont = "placeList";
const msgDeleteTicket = "Do you want to delete this ticket ?";
// popUp Edit
const popUpSecKind = {
  add: 1,
  update: 2,
};
const pUpTitle = "popUpTitle";
const pUpBtn = "popUpKindBtn";

function showModal(modalId, kind, display = false, placeItem) {
  let modal = document.getElementById(modalId);
  let titlePopUp = document.getElementById(pUpTitle);
  let kindBtn = document.getElementById(pUpBtn);
  if (display) {
    modal.style.display = displayPopUp.hide;
  } else {
    modal.style.display = displayPopUp.show;
  }
  if (kind === popUpSecKind.add) {
    titlePopUp.innerHTML = "Add Tickets";
    kindBtn.innerHTML = "Add";
    kindBtn.onclick = function () {
      let img = document.getElementById(ticketImg).value;
      let place = document.getElementById(ticketPlace).value;
      let date = document.getElementById(ticketDate).value;
      let des = document.getElementById(ticketDes).value;
      let ticketBox = document.getElementById(ticketCont);

      let placeItem = document.createElement("div");
      let deleteTicket = document.createElement("div");
      let deleteTicketI = document.createElement("i");
      let placeItemImg = document.createElement("img");
      let placeBody = document.createElement("div");
      let placeHeading = document.createElement("h3");
      let placeTime = document.createElement("p");
      let placeDes = document.createElement("p");
      let ticketBtn = document.createElement("div");
      let placeBuyBtn = document.createElement("a");
      let updateBtn = document.createElement("div");

      placeItemImg.src = img;
      placeItemImg.alt = "";

      placeHeading.innerHTML = place;
      placeTime.innerHTML = date;
      placeDes.innerHTML = des;
      placeBuyBtn.innerHTML = "Buy Tickets";
      updateBtn.innerHTML = "Update";

      placeBuyBtn.onclick = function () {
        showModal("buyTicketModal");
      };
      deleteTicketI.onclick = function () {
        deleteElement(this.closest(".place-item"), msgDeleteTicket);
      };
      updateBtn.onclick = function () {
        showModal("popUpEditTickets", 2, false, this.closest(".place-item"));
      };

      updateBtn.id = "updateBtn";

      placeItem.classList.add("place-item", "col-xl-4", "col-md-12");
      deleteTicketI.classList.add("detele-btn", "ti-close");
      placeItemImg.classList.add("place-img", "col-xl-12");
      placeBody.classList.add("place-body");
      placeHeading.classList.add("place-heading");
      placeTime.classList.add("place-time");
      placeDes.classList.add("place-dsc");
      ticketBtn.classList.add("ticket-btn");
      placeBuyBtn.classList.add("place-buy-btn");
      updateBtn.classList.add("update-btn");

      deleteTicket.appendChild(deleteTicketI);

      ticketBtn.append(placeBuyBtn, updateBtn);
      placeBody.append(placeHeading, placeTime, placeDes, ticketBtn);
      placeItem.append(deleteTicket, placeItemImg, placeBody);
      ticketBox.appendChild(placeItem);
      clearInputs();
    };
  }
  if (kind === popUpSecKind.update) {
    titlePopUp.innerHTML = "Update Tickets";
    kindBtn.innerHTML = "Update";
    kindBtn.onclick = function () {
      let placeImg = placeItem.querySelector(".place-img");
      let placeHeading = placeItem.querySelector(".place-heading");
      let placeTime = placeItem.querySelector(".place-time");
      let placeDsc = placeItem.querySelector(".place-dsc");

      let img = document.getElementById(ticketImg).value;
      let place = document.getElementById(ticketPlace).value;
      let date = document.getElementById(ticketDate).value;
      let des = document.getElementById(ticketDes).value;

      placeImg.src = img;
      placeHeading.innerHTML = place;
      placeTime.innerHTML = date;
      placeDsc.innerHTML = des;

      clearInputs();
    };
  }
}

function updateTickets() {}

function deleteElement(element, msg) {
  msgConf = confirm(msgDeleteTicket);
  if (msg) {
    element.parentNode.removeChild(element);
  }
}

function clearInputs() {
  // Get value
  document.getElementById(ticketImg).value = "";
  document.getElementById(ticketPlace).value = "";
  document.getElementById(ticketDate).value = "";
  document.getElementById(ticketDes).value = "";
}

function headerDisplay() {
  let headerId = document.getElementById(header);
  let currentHeight = headerId.clientHeight === 46;
  if (currentHeight) {
    headerId.style.height = "auto";
  } else {
    headerId.style.height = "46px";
  }
}

function hideHeader() {
  let headerId = document.getElementById(header);
  headerId.style.height = "46px";
}

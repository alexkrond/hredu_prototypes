
const btnSearch = document.body.querySelector(".search-list-event")
btnSearch.addEventListener("keyup", searchEvents);


function searchEvents() {
  const searchString = this.value.toLowerCase().trim();
  const events = document.body.querySelectorAll(".event-info");
  const nothingFound = document.body.querySelector(".nothing-found");
  let counter = events.length;

  for (let event of events) {
    const eventInfoElements = event.querySelectorAll("*");
    let eventInfo = "";

    for (let eventInfoElement of eventInfoElements) {
      eventInfo += eventInfoElement.textContent + ' ';
    }

    if (eventInfo.toLowerCase().indexOf(searchString) === -1) {
      event.style.display = "none";
      counter--;
    } else {
      event.style.display = "grid";
    }
  }

  if (counter === 0) {
    nothingFound.style.display = "block";
  } else {
    nothingFound.style.display = "none";
  }
}

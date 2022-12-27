const dateTitle = document.querySelector(".cover-date");

const date = new Date();
dateTitle.innerHTML = `${
  date.getMonth() + 1
} / ${date.getDate()} / ${date.getFullYear()}`;

const links = document.querySelectorAll('.tab-link');
const contents = document.querySelectorAll('.tab-content');

contents.forEach((c, i) => {
  if (i === 0) c.classList.add('active');
});
links[0].classList.add('active');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); //Stops the scrolling of <a>

    contents.forEach(content => content.classList.remove('active'));

    links.forEach(l => l.classList.remove('active'));

    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).classList.add('active');

    link.classList.add('active');
    console.log('Clicked link:', link.getAttribute('href'));
    console.log('Target section:', document.getElementById(targetId));

  });
});

const tourSelect = document.getElementById("concertLocation");
const dateInput = document.getElementById("concertDate");
const timeInput = document.getElementById("concertTime");

tourSelect.addEventListener("change", function() {
  if (this.value === "kuala lumpur") {
    dateInput.min = "2024-11-21";
    dateInput.max = "2024-11-21";
  } else if (this.value === "bangkok") {
    dateInput.min = "2024-11-23";
    dateInput.max = "2024-11-23";
  } else if (this.value === "singapore") {
    dateInput.min = "2024-11-25";
    dateInput.max = "2024-11-25";
  } else if (this.value === "taipei") {
    dateInput.min = "2024-11-28";
    dateInput.max = "2024-11-28";
  } else if (this.value === "hong kong") {
    dateInput.min = "2024-11-30";
    dateInput.max = "2024-12-01";
  } else if (this.value === "tokyo") {
    dateInput.min = "2024-12-03";
    dateInput.max = "2024-12-03";
  } else {
    dateInput.removeAttribute("min");
    dateInput.removeAttribute("max");
  }
  if (this.value) {
    dateInput.disabled = false;
    dateInput.value = '';
  } else {
    dateInput.disabled = true;
    dateInput.value = '';
  }
});

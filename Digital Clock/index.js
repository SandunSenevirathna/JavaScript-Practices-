setInterval(updateClock, 1000);
document.querySelector("#lblSublable").innerHTML = "-wamsss-";

function updateClock() {
  let currntDateTime = new Date();
  let currntHours = currntDateTime.getHours();
  let currntMinutes = currntDateTime.getMinutes();
  let currntSeconds = currntDateTime.getSeconds();

  (currntHours < 10) ? currntHours = "0" + currntHours: currntHours = currntHours;
  (currntMinutes < 10) ? currntMinutes = "0" + currntMinutes: currntMinutes = currntMinutes;
  (currntSeconds < 10) ? currntSeconds = "0" + currntSeconds: currntSeconds = currntSeconds;



  document.querySelector("#lblClock").innerHTML =
    currntHours + ":" + currntMinutes + ":" + currntSeconds;
}

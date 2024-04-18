var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function printDate(daysOfWeek, number) {
  switch (number) {
    case 0:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 1:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 2:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 3:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 4:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 5:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    case 6:
      document.writeln(daysOfWeek[number] + "<br>");
      break;
    default:
      document.writeln("Invalide Input");
  }
}

function getReturnValue(num1, num2){
    return(num1 * num2)
}


printDate(daysOfWeek, 1);

document.writeln(getReturnValue(6, 10));

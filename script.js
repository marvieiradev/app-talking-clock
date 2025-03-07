var numHour = "";
var numMinute = "";
const basic = [
  "",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
];
const complex = [
  "dez",
  "onze",
  "doze",
  "treze",
  "catorze",
  "quinze",
  "desesseis",
  "desesete",
  "dezoito",
  "dezenove",
];
const dozens = ["dez", "vinte", "trinta", "quarenta", "cinquenta"];

window.setInterval(showTime, 1000);

function getTextHours(numHour) {
  let hour = 0;
  if (numHour >= 10 && numHour <= 19) {
    hour = complex[numHour - 10];
  } else if (numHour >= 20) {
    if (numHour % 10 === 0) {
      hour = dozens[numHour / 10 - 1];
    } else if (numHour % 10 !== 0) {
      hour = `${dozens[Math.floor(numHour / 10 - 1)]} e ${basic[numHour % 10]}`;
    }
  } else {
    if (numHour == 1) {
      hour = "uma";
    } else if (numHour == 2) {
      hour = "duas";
    } else {
      hour = basic[numHour];
    }
  }
  return hour;
}

function getTextMinutes(numMinute) {
  let minute = 0;
  if (numMinute >= 10 && numMinute <= 19) {
    minute = complex[numMinute - 10];
  } else if (numMinute >= 20) {
    if (numMinute % 10 === 0) {
      minute = dozens[numMinute / 10 - 1];
    } else if (numMinute % 10 !== 0) {
      minute = `${dozens[Math.floor(numMinute / 10 - 1)]} e ${
        basic[numMinute % 10]
      }`;
    }
  } else {
    minute = basic[numMinute];
  }
  return minute;
}

function showText() {
  let h = getTextHours(numHour);
  let m = getTextMinutes(numMinute);
  texto = `
  ${h} ${numHour == 1 ? "horas" : "horas"} ${numMinute >= 1 ? " e " : ""}${
    numMinute >= 1 ? m : ""
  } ${numMinute == 1 ? "minuto" : "minutos"}`;
  document.getElementById("text-hours").innerText = texto;
  setTimeout(clearText, 5000);
}

function showTime() {
  numHour = new Date().getHours();
  numMinute = new Date().getMinutes();
  document.getElementById("time").innerText = `${numHour}:${numMinute}`;
}

function clearText() {
  document.getElementById("text-hours").innerText = "";
}

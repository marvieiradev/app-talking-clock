const numHour = new Date().getHours();
const numMinute = new Date().getMinutes();

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

function showHours() {
  let hour = 1;
  if (numHour >= 10 && numHour <= 19) {
    hour = complex[numHour - 10];
  } else if (numHour >= 20) {
    if (numHour % 10 === 0) {
      hour = dozens[numHour / 10 - 1];
    } else if (numHour % 10 !== 0) {
      hour = `${dozens[Math.floor(numHour / 10 - 1)]} e ${basic[numHour % 10]}`;
    }
  } else {
    hour = basic[numHour];
  }
  return hour;
}

function showMinutes() {
  let minute = 1;
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
  let h = showHours();
  let m = showMinutes();
  texto = `
  ${h} ${numHour == 1 ? "horas" : "horas"} ${numMinute >= 1 ? " e " : ""}${
    numMinute >= 1 ? m : ""
  } ${numMinute == 1 ? "minuto" : "minutos"}`;
  document.getElementById("hours").innerText = texto;
}

showText();

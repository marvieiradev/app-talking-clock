var numHour = "";
var numMinute = "";
var count = 500;
const basic = [
  "zero",
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
  "dezesseis",
  "dezessete",
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
  return numHour == 1 ? hour + " hora" : hour + " horas";
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
  return numMinute == 1
    ? minute + " minuto"
    : numMinute == 0
    ? ""
    : minute + " minutos";
}

async function showText() {
  let h = getTextHours(numHour);
  let m = getTextMinutes(numMinute);
  talkTime();
  texto = `${h}${numMinute >= 1 ? " e " : ""}${m}`;
  let text = document.getElementById("text-hours");
  text.style.opacity = 1;
  text.innerText = texto;
  clearText();
}

function showTime() {
  numHour = new Date().getHours();
  numMinute = new Date().getMinutes();
  document.getElementById("time").innerText = `${numHour
    .toString()
    .padStart(2, "0")}:${numMinute.toString().padStart(2, "0")}`;
}

async function talkTime() {
  let h = getTextHours(numHour);
  let m = getTextMinutes(numMinute);

  let hours = h.split(" ");
  let minutes = m.split(" ");

  for (var i = 0; i < hours.length; i++) {
    await wait(700);
    talk(hours[i]);
  }

  if (numMinute > 0) {
    await wait(600);
    talk("e");

    for (var i = 0; i < minutes.length; i++) {
      await wait(600);
      talk(minutes[i]);
    }
  }
}

function alarm() {
  const audio = new Audio("audio/rooster.mp3");
  audio.volume = 0.2;
  audio.play();
}

function talk(hour) {
  const audio = new Audio("audio/" + hour + ".mp3");
  audio.volume = 1;
  audio.play();
}

async function clearText() {
  await wait(6000);
  document.getElementById("text-hours").style.opacity = 0;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

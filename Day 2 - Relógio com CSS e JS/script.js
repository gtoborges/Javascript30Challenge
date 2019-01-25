const ponteiroSegundos = document.querySelector('.segundo');
const ponteiroMinutos = document.querySelector('.minuto');
const ponteiroHora = document.querySelector('.hora');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  ponteiroSegundos.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  ponteiroMinutos.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  ponteiroHora.style.transform = `rotate(${hoursDegrees}deg)`;
}



setInterval(setDate, 1000);
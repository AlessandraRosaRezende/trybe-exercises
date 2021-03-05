function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasMes() {
  let getDaysList = document.querySelector('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');
    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day friday holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }
  };
}

criaDiasMes();

let botaoFeriado = document.querySelector('.buttons-container');
let novoBotaoFeriado = document.createElement('button');
function criaBotaoFeriado(feriados) {
  novoBotaoFeriado.innerHTML = feriados;
  novoBotaoFeriado.id = 'btn-holiday'
  botaoFeriado.appendChild(novoBotaoFeriado);
};

criaBotaoFeriado('Feriados');

novoBotaoFeriado.addEventListener('click', function() {
  const holidays = document.querySelectorAll('.holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.backgroundColor === 'white') {
      holidays[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holidays[index].style.backgroundColor = 'white';
    }
  }
});

let botaoSexta = document.querySelector('.buttons-container');
let novoBotaoSexta = document.createElement('button');
function criaBotaoSexta(sexta) {
  novoBotaoSexta.innerHTML = sexta;
  novoBotaoSexta.id = 'btn-friday'
  botaoSexta.appendChild(novoBotaoSexta);
};

criaBotaoSexta('Sexta-feira');

const fridayDays = [4, 11, 18, 25];
novoBotaoSexta.addEventListener('click', function() {
  const friday = document.getElementsByClassName('friday');
  for (let index = 0; index < friday.length; index += 1) {
    if (friday[index].innerHTML !== "Sexta-feira!") {
      friday[index].innerHTML = "Sexta-feira!";
    } else {
      friday[index].innerHTML = fridayDays[index];
    }
  }
});

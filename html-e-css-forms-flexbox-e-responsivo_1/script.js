const states = document.getElementById('input-state');
function createStateOptions() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}

// function validateData(data) {
//   if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
//     const day = data.substr(0, 2);
//     const month = data.substr(3, 2);
//     const year = data.substr(6, 4);
//     if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
//       return true;
//     }
//   }
//   return false;
// }

// function checkData() {
//   const inputData = document.querySelector('.input-data');
//   let data = inputData.value;
//   const userData = validateData(data);
//   if (!userData && data.length) {
//     inputData.value = '';
//     alert('data invalida');
//     return false;
//   }
//   return userData;
// }

window.onload = function (){
  createStateOptions();
}
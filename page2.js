document.getElementById('btn-check').addEventListener('click', Sortear);

function Sortear() {
  const resultFinal= document.querySelector("#p-result");
  const minimo = parseFloat(document.querySelector("#minimo").value.replace(",", "."));
  const maximo = parseFloat(document.querySelector("#maximo").value.replace(",", "."));

  if (isNaN(minimo)) {
    alert('Valor inválido para o mínimo.');
    return false;
  }

  if (isNaN(maximo)) {
    alert('Valor inválido para o máximo.');
    return false;
  }

  if (minimo>maximo){
    alert('Valor mínimo maior que o valor máximo.');
    return false;    
  }
  numero = SortearInt(minimo,maximo);
  resultFinal.textContent='Valor sorteado: '+ numero +'.';
} 

function SortearInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}
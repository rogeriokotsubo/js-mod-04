document.getElementById('btn-check').addEventListener('click', Verificar);

function Verificar() {
  const menor= document.querySelector("#p-menor");
  const maior= document.querySelector("#p-maior");
  const valor = parseFloat(document.querySelector("#valor").value.replace(",", "."));

  if (isNaN(valor)) {
    alert('Valor inválido!');
    return false;
  }

  menor.textContent='Menor inteiro: '+ Math.floor(valor) +'.';
  maior.textContent='Maior inteiro: '+ Math.ceil(valor) +'.';
} 

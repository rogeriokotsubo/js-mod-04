document.getElementById('btn-calc').addEventListener('click', Calcular);

function Calcular() {
  const resultFinal= document.querySelector('#p-result');
  const peso = parseFloat(document.querySelector('#peso').value.replace(",", "."));
  const altura = parseFloat(document.querySelector('#altura').value.replace(",", "."))/100;
  let classifIMC='';

  if (isNaN(peso)) {
    alert('Valor inválido para o seu peso.');
    return false;
  }

  if (isNaN(altura)) {
    alert('Valor inválido para a sua altura.');
    return false;
  }

  if (peso<=0){
    alert('Valor inválido para o seu peso.');
    return false;
  }
  if (altura<=0){
    alert('Valor inválido para a sua altura.');
    return false;
  }  

  const imc = peso / (altura*altura);
  if (imc<18.5){
    classifIMC = 'abaixo do peso';
  } else if (imc<24.9){
    classifIMC = 'peso normal';
  } else if (imc<29.9){
    classifIMC = 'sobrepeso (acima do peso normal)';
  } else {
    classifIMC = 'obesidade';
  }
  
  resultFinal.textContent='Seu IMC é ' + imc.toFixed(2) + ', classificado como ' + classifIMC +'.';
}  
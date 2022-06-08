
// 51,7% Mulheres
// 16,7% idosos
// 1-86 -> Mulher idosa  (16,7% de 517)
// 87-517 -> mulher não Idosa
// 518-599 -> homem idoso  (16,7% de 483)
// 600-1000 -> homem não Idoso

document.getElementById('btn-check').addEventListener('click', Verificar);
function Verificar() {
  const result= document.querySelector("#p-pessoa");
  const p =  parseInt(SortearInt(1, 1000),10);
  const mi= document.querySelector("#m-idosa");
  const mni= document.querySelector("#m-n-idosa");
  const hi= document.querySelector("#h-idoso");
  const hni= document.querySelector("#h-n-idoso");

  const total = parseInt(mi.textContent,10)+parseInt(mni.textContent,10)+parseInt(hni.textContent,10)+parseInt(hi.textContent,10)+1;

  if (p <= 86) {
    result.textContent='Pessoa: Mulher Idosa. Total pessoas: '+total+'.';
    mi.textContent=parseInt(mi.textContent,10)+1; 
  } else if (p <= 517) {
    result.textContent='Pessoa: Mulher não Idosa. Total pessoas: '+total+'.';
    mni.textContent=parseInt(mni.textContent,10)+1; 
  } else if (p <= 599) {
    result.textContent='Pessoa: Homem Idoso.  Total pessoas: '+total+'.';
    hi.textContent=parseInt(hi.textContent,10)+1; 
  } else {
    result.textContent='Pessoa: Homem não Idoso.  Total pessoas: '+total+'.';
    hni.textContent=parseInt(hni.textContent,10)+1; 
  } 
  const pmi= document.querySelector("#pm-idosa");
  pmi.textContent=(100*parseInt(mi.textContent,10)/(total)).toFixed(1);
  const pmni= document.querySelector("#pm-n-idosa");
  pmni.textContent=(100*parseInt(mni.textContent,10)/(total)).toFixed(1);
  const phi= document.querySelector("#ph-idoso");
  phi.textContent=(100*parseInt(hi.textContent,10)/(total)).toFixed(1);
  const phni= document.querySelector("#ph-n-idoso");
  phni.textContent=(100*parseInt(hni.textContent,10)/(total)).toFixed(1);
} 



function SortearInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}

let vrijeme=document.querySelector("#vrijeme");



// Dohvaćanje vremena

function showTime(){
  let dan=new Date();
  let trenutni_sat=dan.getHours();
  let trenutna_minuta=dan.getMinutes();
  let trenutna_sekunda=dan.getSeconds();

  if (trenutna_sekunda< 10) {
    trenutna_sekunda = "0" +trenutna_sekunda;
  };

  if (trenutna_minuta< 10) {
    trenutna_minuta = "0" +trenutna_minuta;
  };

  if (trenutni_sat< 10) {
    trenutni_sat = "0" +trenutni_sat;
  };



  vrijeme.innerHTML=`${trenutni_sat}:${trenutna_minuta}:${trenutna_sekunda}`;

  setTimeout(showTime,1000);
}





showTime();

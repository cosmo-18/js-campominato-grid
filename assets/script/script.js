const griglia = document.getElementById('griglia');

function newCella (contatore) {

    const div = document.createElement('div')
    div.setAttribute("id",contatore.toString());
    div.classList.add('cella');
    div.innerHTML = contatore;                                //STAMPA ALTERNATIVA//
    document.getElementById("griglia").appendChild(div);
    return div; 
    
}
// console.log (newCella())

for(let i=0; i<64; i++){
    
    let dato = newCella(i+1);
    //dato.innerHTML= i+1                                       //STAMPA ALTERNATIVA//
    console.log(dato);

    dato. addEventListener('click',function(){

        console.log(risultato);

        risultato.classList.toogle('attiva')
    })
}
const griglia = document.getElementById('griglia');

function newCella () {
    const div = document.createElement('div')
    div.classList.add('cella');
    return div

}

console.log (newCella())

for(let i=0; i<64; i++){
    
    let dato = newCella();
    console.log(dato);

    dato. addEventListener('click', function(){
        console.log(risultato);
        risultato.classList.toogle('attiva')
    })
    griglia.append(newCella( ))
}


function altro(dati){ 
    document.getElementById("operazioni").value += dati;
};//legge i dati dopo la pressione del pulsante

function operazione() { 
    document.getElementById("operazioni").value = Math.trunc(eval(document.getElementById("operazioni").value)); 
};//legge i dati nello schermo e poi li somma

function cancella() { 
    document.getElementById("operazioni").value = ""; 
};//cancella il contenuto del display della calcolatrice
function CantidadMayusculas(texto){
    cont=0;
    for (i=0;i <= texto.length;i++){
        if(texto[i]>='A' && texto[i]<='Z'){
            cont++;
        }
    }
    return cont;
}
console.log(CantidadMayusculas("aDsAZD"));
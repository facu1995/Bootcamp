let reporte="lorem ipsum scammer simply laboris sit amet";
let count = 0;
reporte =reporte.replace(/a/g,"x");
reporte =reporte.replace(/[eiou]/g, (match)=> match.toUpperCase());
reporte =reporte.replace(/l/,"L");

reporte= reporte.split('')
reporte[reporte.length-1]='@';
reporte= reporte.join("");
console.log(reporte);
console.log("total de vocales es "+count);
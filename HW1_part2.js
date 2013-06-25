function isPrime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 if (n%2==0) return (n==2);
 var m=Math.sqrt(n);
 for (var i=3;i<=m;i+=2) {
  if (n%i==0) return false;
 }
 return true;
}

var fs = require('fs');
var pa = [];
var outfile = "prime.txt";

for (var i=1;pa.length<100;i+=1) {
    if (isPrime(i)) {
        pa.push(i);
    }
}

var fpa = pa.reduce(function(a, b) {
    return a.toString().concat(","+b);
})

fs.writeFileSync(outfile, fpa);  
console.log("Script: " + __filename + "\nWrote: " + fpa + " To: " + outfile);
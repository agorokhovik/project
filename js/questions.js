'use strict'

let b = 5; 
alert( b++ );  // выведет 5


let a = [ ] + false - null + true;
console.log(a); // выражение === NaN


let y = 1; let x = y = 2; 
alert(x); // выведет 2


let c = [ ] + 1 + 2;
console.log(c); // выведет 12


alert( "1"[0] ); // выведет 1


let d = 2 && 1 && null && 0 && undefined
console.log(d); // выведет null

let l;
let m;
let p;
let q;
let k = !!( l && m ); 
let k1 = (p && q);
console.log(k); // false
console.log(k1); // undefined


alert( null || 2 && 3 || 4 ); // выведет 3


let f = [1, 2, 3]; 
let h = [1, 2, 3];
let g = f == h;
console.log(g); // false


alert( +"Infinity" ); // Infinity


alert("ёжик" > "яблоко"); // true


let e = 0 || "" || 2 || undefined || true || falsе;
console.log(e); // выведет 2



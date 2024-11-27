const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

const regexNine = RegExp('9');
console.log('Métodos da RegExp...');
console.log(regexNine.test(text));
console.log(regexNine.exec(text));

const regexLetras = /[a-f]/g;
console.log('Métodos da string...');
console.log(text.match(regexLetras));
console.log(text.search(regexLetras));
console.log(text.replace(regexLetras, 'Achei'));
console.log(text.split(regexLetras));
const url = require('url');

const myurl = new URL('https://github.com:3000/rohit-sanwariya/-NodejsCrashCourse/tree/main/reference')
console.log(myurl.href);
console.log(myurl.toString());
//host (root domain)

console.log(myurl.host); //gets port 
console.log(myurl.hostname); //no port 

console.log(myurl.pathname);


console.log(myurl.search);
console.log(myurl.searchParams);
 myurl.searchParams.append('abc','123')
 console.log(myurl.searchParams);
 myurl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`) )
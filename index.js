const {Person,ClassPerson} = require('./Person')
const Logger =  require('./logger')
const classPerson = new ClassPerson("Pikachu",25);
console.log(Person.name);
console.log(classPerson.name);
console.log(__dirname);
console.log(__filename);
const logger = new Logger();
logger.on('message',(data)=>console.log(data))


logger.log("hello from logger")
const path = require('path')


console.log( path.basename(__filename));
console.log( path.dirname(__filename));
console.log( path.extname(__filename));
console.log(path.parse(__filename));
// {
//     root: 'd:\\',
//     dir: 'd:\\rohit\\node\\NodeCrashcourseTraversy\\reference',
//     base: 'path_demo.js',
//     ext: '.js',
//     name: 'path_demo'
//   }
console.log(path.join(__dirname,'test','hello.html'));
// d:\rohit\node\NodeCrashcourseTraversy\reference\test\hello.html

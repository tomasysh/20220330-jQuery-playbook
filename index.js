$(document).ready(function() {
    
    console.log(`Is [] array ? ${$.isArray([])}`);
    console.log(`Is function() {} a function ? ${$.isFunction(function() {})}`);
    console.log(`Is 3.14 a number ? ${$.isNumeric(3.14)}`);
    console.log(`true is a  ${$.type(true)}.`)
    console.log(`3 is a ${$.type(3)}.`);
    console.log(`'test' is a ${$.type('test')}.`);
    console.log(`function() {} is a ${$.type(function() {})}.`);
    console.log(`new Boolean() is a ${$.type(new Boolean())}.`);
    console.log(`new Number(3) is a ${$.type(new Number(3))}.`)
    console.log(`new Function() is a ${$.type(new Function(3))}.`)
    console.log(`[]  is a ${$.type([])}.`)
    console.log(`null  is a ${$.type(null)}.`)
    console.log(`/test/ is a ${$.type(/test/)}.`)
    console.log(`new Date() is a ${$.type(new Date())}.`)
    
});
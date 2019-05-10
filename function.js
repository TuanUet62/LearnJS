//Function -input (argument), code, output


let hello = function() {
    console.log('Hello, world!');
}

hello();

//Using argument

let square = function(num) {
    let result = num * num ;
    console.log(result);
    return result;
}

square(2);

//Challenge Area
let convertFToC = function(Fahrenheit) {
    let celsius = (Fahrenheit - 32) * 5 /9;
    return celsius;
}

let firstConvert = convertFToC(120);
console.log(firstConvert);

let secondConvert = convertFToC(252)
console.log(secondConvert);
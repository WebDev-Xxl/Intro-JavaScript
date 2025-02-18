// Global scope
var globalVar = "I' a global variable";
let globalLet ='I am also global, but scoped with let';
const globalConst = "I'm a global constant"


{
    // Block scope
    var blockVar = "I am a block-scoped var";
    let blocLet = "I am a block-scoped ";
    const blockConst = "I am a block-scoped const"
}

// Global scope
console.log(globalVar); // Output: "I am a global variable"
console.log(globalLet); // Output: "I am also global, but scoped with let"
console.log(globalConst); // Output: "I am a global constant"

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError
    

//Immediate invoke function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();

(()=>{
    console.log(`DB CONNECTED 2`)
})()

// with paramiter

((name)=>{
    console.log(`DB CONNECTED 2 ${name}`)
})("hites")
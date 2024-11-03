// immediately invoked function expression
(function(){
    function start(){
        console.log("Server Started")
    }
    window.addEventListener("load", start);
}) ();
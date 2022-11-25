function sayHi() {
    let userName = prompt("What is your name?");
    if (userName == "") {
        while (userName == "") {
            userName = prompt("TELL ME YOUR NAME!!!")
        }

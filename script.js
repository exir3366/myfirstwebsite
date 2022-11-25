function welcomePrompt()  { 
    let response  = prompt('Do you like the outdoors? Yes?No?')
    if (response !== 'yes') {
    console.log(response)
    continue;
       
        
function yesOrNo() {
let opinion = prompt('yes or no?');
console.log(opinion);
opinion = opinion.toLowerCase();
console.log(opinion);

if (opinion === 'yes') {
alert('Yay!');
} else if (opinion === 'no') {
alert('Sadage');
} else {
alert('What?');
}
return;
}

function changeMind() {
let secondOpinion = confirm('do you want to change your mind?');
console.log(secondOpinion);
if (secondOpinion == true) {
alert('You Changed Your Mind');
} else {
alert('You didn\'t Change Your Mind');
}
return;
}

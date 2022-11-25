function welcomePrompt() {
    let response = prompt('Are you excited? yes/no?')
    while (response) {
        if (response !== 'yes') {
            console.log(response)
            response = prompt('Cmon now, are you excited? yes?');
            continue;
        } else
            break;
    }
}

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


function howManyPictures() {
    let response = prompt('how many toothbrush images do you want?')

    for (i = 0; i < response; ++i) {
        const img = document.createElement("img");
        img.src = 'toothbrush.jpg';
        img.style.height = "100px";
        img.style.width = "100px";
        document.body.append(img);
    }
}



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

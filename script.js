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

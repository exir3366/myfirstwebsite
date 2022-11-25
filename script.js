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

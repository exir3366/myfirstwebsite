function welcomePrompt()  {
    let response  = prompt('Do you like the outdoors? Yes?No?')
    if (response !== 'yes') {
    console.log(response)
    response = prompt ("That is great because I would have hated to ask again!! Are you interested in hiriing us? Yes?")
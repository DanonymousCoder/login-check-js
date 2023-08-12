// Login checker
let userName = prompt('Who are you?');
if (input === 'Admin') {
    let pass = prompt('Password', ' ');
    if (pass === 'TheMaster') {
        alert('Welcome!');
    }
    else if (pass === ' ' ||  null) {
        alert('Canceled');
    }
    else {
        alert('Wrong password!');
    }
}
else if (input === ' ' || null) {
    alert('Canceled');
}
else{
    alert('I don't know you?')
}
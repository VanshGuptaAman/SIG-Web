//WAP in js to Pass a Function as Parameter.
function greet() {
    return 'Hello';
}
// passing function greet() as a parameter
function Fun(user, func)
{
    // accessing passed function
    const message = func();
    console.log(`${message} ${user}`);
}
Fun('John', greet);
Fun('Jack', greet);
Fun('Sara', greet);

let counter = 0 ; 
function Get(element) { return document.getElementById(element);}
function addRandomText()
{
    let element = Get('content-box');
    element.innerHTML += `<h2 id='Jacoob${counter}'>Hi Jacoob ${counter++}</h2>`;
    Get(`Jacoob${counter}`).onclick(ShowJacoobNumber(counter));
}
function ShowJacoobNumber(value)
{
    alert('value is ' + value);
}


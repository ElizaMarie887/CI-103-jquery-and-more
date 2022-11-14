//Query Selectors
let myDiv = $('<div> Click Here</div>')
let myInput = $('#bodyInput')

let myBody = $('body')

//create ul element
let myList = $('<ul></ul>')

myBody.append(myDiv);
myBody.append(myList);

//6 Add a click listener to the div that makes the text in the input box added earlier and add it to the ul

myDiv.on('click', (event) => {
    event.preventDefault();
    //console.log('Test function!')
    myList.append(`<ul>${myInput.val()}</ul>`)
})
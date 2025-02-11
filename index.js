/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

//1. Create a function replaceText which accepts two parameters: an element and a string. The function should set the content of the given element to the given string.
function replaceText(elem,str){
    elem.textContent = str;
}

//2. Create a function addTextTo which gets two parameters: an element and a string. The function should append the given string to the content of the given element.
function addTextTo(elem,str){
    elem.textContent += str;
}

//3. Create a function `moreBears` that replaces the default image with the image of a bear. Your function should (for the 'animals' element) set its source URL to 'http://placebear.com/400/200', its alternative text to 'A bear.', and its title to 'A BEAR!'.
function moreBears() {
    const animalElement = document.querySelector('#animals');
    animalElement.src = 'http://placebear.com/400/200';
    animalElement.alt = 'A bear.';
    animalElement.title = 'A BEAR!';
}

//4. Create a function `setId` with two parameters, an element and a string. The function will set the element's ID to the given string. The return value of the function must be the given element.
function setId(elem, str) {
    elem.id = str;
    return elem;
}

//5. Create a function `setClass` with two parameters, an element and a string. The function will set the element's class to the given string. The return value of the function must be the given element. 
function setClass(elem,str){
    elem.className = str;
    return elem;
}

//6. Create a function `addAClass` with two parameters, an element and a string. The function will add the given string's value to the element's classes. The return value of the function must be the given element. 
function addAClass(elem,str){
    elem.classList.add(str);
    return elem;
}

//7. Create a function `removeAClass` with two parameters, an element and a string. The function will remove the given string's value from the element's classes. The return value of the function must be the given element.
function removeAClass(elem,str){
    elem.classList.remove(str);
    return elem;
}

//8. Write a function `newElement` which, given one parameter called name, returns a newly created element with that tag name.
function newElement(name) {
    const newElem = document.createElement(name);
    return newElem;
}

//9. Create a function `findElementById` which, given one parameter called id, returns the element that has that id
function findElementById(id){
    let elem = document.querySelector(`#${id}`);
    return elem;
}

//10. Create a function `findElementsByQuery` which, given one parameter called query, returns all the elements that match the query selector in that parameter.
function findElementsByQuery(query){
    let allQueries = document.querySelectorAll(query);
    return allQueries;
}

//11. Create a function `reverseList` that can reverse the content of a list (a UL or OL element). The function should take one parameter, which is a query selector used to find the list whose children should be reversed. Return the selected element.
function reverseList(query) {
    const list = document.querySelector(query);
    if (list && list.children.length > 0) {
        const items = Array.from(list.children);
        items.reverse();
        items.forEach(item => list.appendChild(item));
    }
    return list;
}

//12. Create a function `mover` that accepts two parameters, the first is a selector for the element to move, the second is a selector for the element that it should be appended to. 
function mover(moveThis,appendToThis){
    const element = document.querySelector(moveThis);
    const target = document.querySelector(appendToThis);
    
    if (element && target) {
        target.appendChild(element);
    }
}

//13. Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of candidate strings that will be turned into list items.
function filler(list, candidates) {
    if (list && Array.isArray(candidates)) {
        candidates.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            list.appendChild(listItem);
        });
    }
}

//14. Write a function `dupe` that accepts one parameter, a selector. The function should duplicate the element chosen by the selector (and any children of it) and append it to its parent.
function dupe(selector) {
    const element = document.querySelector(selector);
    
    if (element) {
        const clone = element.cloneNode(true);
        element.parentNode.appendChild(clone);
    } 
};

//15. Write a function `removeAll` that accepts one parameter, a selector. All nodes that match that selector should be removed.
function removeAll(selector) {
    const elements = document.querySelectorAll(selector);
    
    if (elements.length) {
        elements.forEach(element => element.remove());
    }
};

//16.Write a function `getUserData` that returns an object with information from the #username, #speed, #student form input fields. The result should be an object like this: { name: 'john', speed: 30, student: true }

function getUserData() {
    return {
        name: document.querySelector("#username")?.value || "",
        speed: parseFloat(document.querySelector("#speed")?.value) || 0,
        student: document.querySelector("#student")?.checked || false
    };
}
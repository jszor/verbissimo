const ItalianVerbs = require('italian-verbs');
const ItalianVerbsList = require('italian-verbs-dict/dist/verbs.json');

let currentVerb;
let currentConjugations;

function getRandomVerb() {
    const verbs = Object.keys(ItalianVerbsList);
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
}

function getConjugations(verb) {
    return {
        'io': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 1, 'S'),
        'tu': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 2, 'S'),
        'lui-lei-Lei': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 3, 'S'),
        'noi': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 1, 'P'),
        'voi': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 2, 'P'),
        'loro': ItalianVerbs.getConjugation(ItalianVerbsList, verb, 'PRESENTE', 3, 'P')
    };
}

function generateVerb() {
    currentVerb = getRandomVerb();
    currentConjugations = getConjugations(currentVerb);
    document.getElementById('verb-infinitive').textContent = currentVerb;
    document.getElementById('conjugation-form').reset();

    const formElements = document.querySelectorAll('#conjugation-form input');
    formElements.forEach(element => {
        element.classList.remove('correct', 'incorrect');
    });
}

function checkAnswers() {
    const form = document.getElementById('conjugation-form');
    let correct = true;

    for (const [key, value] of Object.entries(currentConjugations)) {
        const userInput = form[key].value.trim().toLowerCase();
        const expectedValue = value.toLowerCase();
        if (userInput !== expectedValue) {
            correct = false;
            form[key].classList.add('incorrect');
            form[key].classList.remove('correct');
        } else {
            form[key].classList.add('correct');
            form[key].classList.remove('incorrect');
        }
    }
}

document.addEventListener('DOMContentLoaded', generateVerb);

window.generateVerb = generateVerb;
window.checkAnswers = checkAnswers;
const ItalianVerbs = require('italian-verbs');
const ItalianVerbsList = require('italian-verbs-dict/dist/verbs.json');

// Example usage
const verb = 'mangiare';
const tense = 'PRESENTE';
const person = 3;
const number = 'S';

console.log(ItalianVerbs.getConjugation(ItalianVerbsList, verb, tense, person, number));
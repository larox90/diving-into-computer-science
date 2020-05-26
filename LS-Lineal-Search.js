/**
 * Lineal Search
 * this is the most used search, starting from the first 
 * element for example in an array from 0 to n -1
 * but the bad side of this search is the time that it can need.
 * for example if we have an array of 10 elements and the last position is the el
 * that we´re looking for, we need 10 attempts to find it. 
 * 
 * the biggest number of attempts that we can have with this search to find our element is n! 
 */

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const el = 30;
let attemp = 0;
// this flag let us know what index we currently have.
let pivot = 0;
let found;

 // while our element to found is different to found continue searching.
while(el !== found) {
    attemp++;

    // we try the current pivot
    const guess = data[pivot];
    // if our current pivot has the element to find, we finish.
    if (guess === el) {
        found = guess;
    } else {
        // else we increse pivot in one position.
        pivot++;
    }
 }

console.log('You found it!', found);
console.log('You needed ', attemp, ' attempts');
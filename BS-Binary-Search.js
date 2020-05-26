/**
*   Binary Search 
*   it´s an Algorithm to search with base on move to the middle position of your 
*   possible options, for this kind of search we need to have ordened our list of options, because
*   we need to check if it´s smaller or bigger that our current position, this kind of search let us 
*
*   we have two important elements on this kind of search, min and max are the pivots that let us know
*   our limits, and they gonna change each attempt, and they gonna start on 0 (first position) and n-1 (last position)
*
*   the biggest number of attempts that we can have with this search to find our element is log n (+1)! 
*   log2n = how many times we need to divide in 2 our current value to achieve the 1.
*
*   example: For the Tycho-2 star catalog with 2,539,913 stars, the nearest power of 2 below is 2 21 twenty-one
*   2, start superscript, 21, end superscript (which is 2,097,152), so at most we would need 22 tries. Much better than a linear search!
*/

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const el = 2;
let attemp = 0;

// our flags for search
let min = 0;
let max = data.length -1;
let found;
// while our element to found is different to found continue searching.
while (el !== found) {
    // start with each attemp.
    attemp++;
    // we get the average of our current min / max.
    const average = Math.floor((min + max) / 2); 
    const guess = data[average];

    // we have 3 options on our binary search
    switch(true) {
        // if we found it, we can stop our search
        case el === guess:
            found = guess;
            break;
        // if the searching element is min than our current attempt, we change the max limit to our attempt less one.
        case el < guess:
            max = average -1;
            break;
        // if the searching element is max than our current attempt, we change the min limit to our attempt plus one.
        case el > guess:
            min = average +1;
            break;
    }
}

console.log('You found it!', found);
console.log('You needed ', attemp, ' attempts');
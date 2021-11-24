"use strict";
function indexOfObjectToArray(item) {
    const array = [];
    for (let index in item) {
        if (item.hasOwnProperty(index)) {
            array.push(index);
        }
    }
    return array;
}
module.exports = { indexOfObjectToArray };

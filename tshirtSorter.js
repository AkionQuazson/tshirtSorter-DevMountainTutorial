// Write your solution below:
const tshirtSorter = (str) => {
    let sortedShirts = '';
    let unsorted = {s:0, m:0, l:0}
    for (let i = 0; i < str.length; i++){
        unsorted[str[i]]++;
    }
    
    Object.keys(unsorted).forEach((size) => {
        for (let i = 0; i < unsorted[size]; i++) {
            sortedShirts += size;
        }
    })

    return sortedShirts;
}

console.log(tshirtSorter('lms'));
console.log(tshirtSorter('smllms'));
console.log(tshirtSorter('slsmmsllsmsmlmsls'));
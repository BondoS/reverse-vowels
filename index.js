let process = word => {
    let vowls = [];
    let wordArr = word.toLowerCase().split('');
    wordArr.forEach((item, index) => {
        if(['a','e','i','o','u'].includes(item)){
            vowls.push({item, index});
        }
    })
    let i, j;
    for(i = 0, j = vowls.length - 1; i < Math.floor(vowls.length/2); i++, j--){
        wordArr[vowls[i].index] = vowls[j].item;
        wordArr[vowls[j].index] = vowls[i].item;
    }
    return wordArr.join('')
}

console.log(process("javascript"));
console.log(process("Hello"));

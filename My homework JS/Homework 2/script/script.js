let nums = prompt(`Enter the number: `, ``);
console.log(`your number:`, nums);

for (let i = 0; i <= nums; i++){
    if (i % 5 == 0) {
        console.log(`Multiples of 5: `, i);
    }
    else if (nums < 5) {
        console.log(`Sorry, no numbers`);
    }
}
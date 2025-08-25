let number_1 = 0;
let number_2 = 1;
let sum;

console.log(number_1);
console.log(number_2);

for(let i = 3; i <= 10; i++){
    sum = number_1 + number_2;
    console.log(sum);

    number_1 = number_2;
    number_2 = sum;
}
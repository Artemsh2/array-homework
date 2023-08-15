'use strict'

//1. Користувач вводить числа, поки не натисне "Відмінити" або поки не введе щось, що не являється числом. Всі числа потрапляють в масив. Напишіть функцію, яка приймає масив чисел і повертає суму квадратів цих чисел.
// let arr = [];
// let input = prompt('Введіть число:');
// function getSumofArrSqr() {
//     let sum = 0;
//     while(input !== null && input !== Number){
//         const number = parseFloat(input);

//         if(number !== Number){
//             arr.push(number);
//         }
//         input = prompt('Введіть число:');
//     }
//     for(let item of arr){
//         sum += item ** 2;
//     }
//     return sum;
// }
// console.log(arr);
// console.log('Сума квадратів: ', getSumofArrSqr(arr));

//2. Округліть числа в даному масив до одного знаку після коми: [1.456, 2.125, 3.32, 4.1, 5.34]
// let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// let roundArr = [];
// for(let item of arr){
//     let round = Math.round(item * 10) / 10;
//     roundArr.push(round)
// }
// console.log(roundArr);

//3. Дано масив з рядками. Залишіть у цьому масиві лише ті рядки, які починаються на "http://".
// [
//     "http://example.com",
//     "https://example.com",
//     "http://google.com",
//     "ftp://example.com",
//     "http://openai.com"
//   ]

// let arr = [
//         "http://example.com",
//         "https://example.com",
//         "http://google.com",
//         "ftp://example.com",
//         "http://openai.com",
//     ]
// const newArr = [];
//     for(let item of arr){
//         if(item.startsWith('http://')){
//         newArr.push(item);
//     }
//     }
//     console.log(newArr);

//4. Дано деякий масив, наприклад, ось такий:[1, 2, 3, 4, 5, 6]
// По черзі виведіть у консоль підмасиви із двох елементів нашого масиву:
// [1, 2]
// [3, 4]
// [5, 6]

// const arr = [1, 2, 3, 4, 5, 6];
// for(let i = 0; i < arr.length; i += 2){
//     if(i + 1 < arr.length){
//         const newArr = [arr[i], arr[i + 1]];
//         console.log(newArr);
//     }
// }

//5. Дано деякий масив чисел. Напишіть функцію, яка повертає суму чисел першої половини елементів. Якщо к-ть елементів не парна, перемо більше число: 
// [1, 2, 3, 4, 5, 6, 7] = 10
// [1, 2, 3, 4, 5, 6] = 6
// const arrMoreThanHalf = [1, 2, 3, 4, 5, 6, 7];
// const arr = [1, 2, 3, 4, 5, 6];
// function sumOfHalfNumsOfArr(arr){
//     let sum = 0;
//     const halfOfArr = Math.ceil(arr.length / 2);
//     for(let i = 0; i < halfOfArr; i++){
//        sum += arr[i];
//     }
//     return sum;
// }
// console.log('Сума чисел першого масиву: ', sumOfHalfNumsOfArr(arrMoreThanHalf));
// console.log('Сума чисел другого масиву: ', sumOfHalfNumsOfArr(arr));   

//6. Поділіть суму першої частини масиву на суму другої. [1, 2, 3, 4, 5, 6]. По непарній к-ті - так само, як в минулі задачі
// const arrSmaller = [1, 2, 3, 4, 5, 6];
// const arrBigger = [1, 2, 3, 4, 5, 6, 7]

// function getDivisionOfArr(arr){
//     const length = arr.length;
//     const halfOfArr = Math.ceil(length / 2);
//     let sumFirstHalf = 0;
//     let sumSecondHalf = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(i < halfOfArr){
//             sumFirstHalf += arr[i];
//         }else{
//             sumSecondHalf += arr[i]
//         }
//     }
//     return sumFirstHalf / sumSecondHalf;
// }
// console.log(getDivisionOfArr(arrSmaller));
// console.log(getDivisionOfArr(arrBigger));

//7. Напишіть функцію findCommonElements(arr1, arr2), яка приймає два масиви arr1 і arr2 і повертає новий масив, який містить спільні елементи обох масивів. [1, 2, 3, 4] [3, 4, 5, 6];
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// let commonArr = [];
// function findCommonElements(arr1, arr2){
//     for(let item of arr1){
//         if(arr2.includes(item)){
//             commonArr.push(item)
//         }
//     }
//     return commonArr;
// }
// console.log(findCommonElements(arr1, arr2));

//8. Видаліть із більшого масиву зайві елементи з кінця так, щоб довжини масивів стали однаковими.
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr1.length; i++){
//     if(arr2.length > arr1.length){
//         arr2.pop();
//     }
// }
// console.log(arr1);
// console.log(arr2);

//9. Знайдіть суму всі елементів масиву:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]

// const arr = [
//                 [1, 2, 3],
//                 [4, 5, 6],
//                 [7, 8, 9],
// ]
// let sum = 0;
// for(let x = 0; x < arr.length; x++){
//     for(let y = 0; y < arr[x].length; y++){
//         sum += arr[x][y];
//     }
// }
// console.log(sum);

//10. Напишіть функцію, яка повертає к-ть голосних букв в слові, введеному користувачем
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// function getValueOfVowels(input){
//     input = prompt('Введіть слово: ');
//     let numOfVowels = 0;
//     for(let i = 0; i < input.length; i++){
//         if(vowels.includes(input[i])){
//             numOfVowels++;
//         }
//     }
//     return numOfVowels;
// }
// console.log(`Кількість голосних букв: `,getValueOfVowels());

//11. Злийте пари елементів разом: [1, 2, 3, 4, 5, 6] -> [12, 34, 56]
// const arr = [1, 2, 3, 4, 5, 6];
// let newArr = [];

// for(let i = 0; i < arr.length; i += 2){
//     if(i + 1 < arr.length){
//         newArr.push(arr[i] * 10 + arr[i + 1])
//     }
// }
// console.log(newArr);

//2.* На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].
// Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.
// Написати функцію getMaxSubSum(arr) яка повертає таку суму.
// Наприклад:
// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// Якщо всі елементи менші нуля, нічого не беремо, це означає, що підмасив пустий, а сума рівна нулю:
// getMaxSubSum([-1, -2, -3]) = 0

const arr = [1, -2, 3, 4, -9, 6];
function getMaxSubSum(arr){
    let maxSum = 0;
    let sum = 0;
    for(let item of arr){
        sum = Math.max(0, sum + item);
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum
}
console.log(getMaxSubSum(arr)); 

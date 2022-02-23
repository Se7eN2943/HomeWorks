// function reference() {
//     let m = 124
//     sum = 25 * n
//     return sum
// }

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function type() {
//     let m = 124
//     m(21)
//     return m
// }

// reference();
// type();

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const defaultTo = (value, defaultValue) => {

//     if ((isNaN(value)) || (value === null) || (value === undefined)) console.log(defaultValue)  

//     else console.log(value) 
// };

// defaultTo(NaN, 10);

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function compareWithPrecision(a, b, precision) {
//     if (a > b) value = Math.abs(a - b)
//     else value = Math.abs(b - a)
//     return value <= precision
// }
// console.log(compareWithPrecision(0.1 + 0.2, 0.3, 0.001))

// function capitalize(str) {
//     return str.toLowerCase().split(" ").map(item => item.replace(item[0], item[0].toUpperCase())).join(' ')
// }

// console.log(capitalize('sOme RanDoM sTRING'))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const reverseLongWords = (str) => {
//     return str.split(" ").map(item => {
//         let arrSplit = item.split("")
//         if (arrSplit.length >= 5) arrSplit.reverse()
//         return arrSplit.join("")
//     }).join(' ')
// }

// console.log(reverseLongWords('Hey fellow warriors')); // Hey wollef sroirraw

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function wrapInParagraph(str) {
//     return str.split("\n").map(item => `<p>${item}</p>`).join("\n");
// }

// console.log(wrapInParagraph(`Some
// simple multiline
// text`))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     if (exam > 75 && projects >= 5) return 90;
//     if (exam > 50 && projects >= 2) return 75;
//     return 0
// }

// finalGrade(100, 12);

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function fizzbuzz(number) {
//     if ((([number] % 5) === 0) && (([number] % 3) === 0)) return 'FizzBuzz'
//     if (([number] % 3) === 0) return 'Fizz'
//     if (([number] % 5) === 0) return 'Buzz'
//     return number
// }

// fizzbuzz(15)

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const arithmetic = (a, b, operator) => {
//     if (operator == "add") return a + b;
//     if (operator == "subtract") return a - b;
//     if (operator == "multiply") return a * b;
//     if (operator == "divide") return a / b;
//     return NaN
// };

// arithmetic(10, 12, 'add')

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const areBracketsBalanced = (str) => {
//     let arr = str.split("")
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         if (arr[i] == '(') result.push(arr[i])
//         else if (arr[i] == ')') {
//             if (result.length != 0) result.pop()
//             else {
//                 result.push("заглушка")
//                 break
//             }
//         }
//     };
//     if (result.length > 0) return false;
//     else return true;
// };

// areBracketsBalanced(")(())")

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function findAllIdx(arr, value) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             let a = arr.indexOf(value, fromIndex = i);
//             res.push(a);
//         }
//     }
//     console.log(res)
//     return res
// }

// findAllIdx([5, 2, 3, '5', 2, 5, 4], '5')

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function replaceItemsClear(arr, item, replaceItem) {
//     let res = arr.map(function (value) {
//         if (value === item) {
//             value = replaceItem
//         }
//         return value
//     })
//     return res
// }
// const arr = [1, 2, 3, 4, 2];
// function replaceItemsMutate(arr, item, replaceItem) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === item) {
//             arr[i] = replaceItem
//         }
//     }
//     return arr
// }

// replaceItemsClear([1, 2, 3, 4, 2], 2, 'a')
// replaceItemsMutate(arr, 2, 'a')

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const moveToStart = (arr, n) => {
//     let newArr = arr.slice();
//     if (n >= newArr.length) return newArr
//     else {
//         for (let i = n; i > 0; i--) {
//             let a = newArr.pop(newArr[i]);
//             newArr.unshift(a);
//         }
//     }
//     return newArr
// };

// moveToStart([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], 5) // [3, 4, 5, 1, 2]
// const data1 = [1, 2, 3];

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const hasArrays = (arr) => {
//     return arr.some(item => Array.isArray(item))
// };

// console.log(hasArrays(data1))

// const data = [1, 2, 3, 4, 5, 6];
// const getNumbersByParity = (data, parity) => {
//     let b = []
//     data.forEach(function (item) {
//         if ([item] % 2 === 0 && parity == 'even') b.push(item)
//         if ([item] % 2 != 0 && parity == 'odd') b.push(item)
//     })
//     return b;
// };

// getNumbersByParity(data, 'even');

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const lettersCount = (str) => {
//     return str.split('').map(item => item.toLowerCase()).reduce((acc, item) => {
//         acc[item] = (acc[item] || 0) + 1;
//         return acc;
//     }, {})
// };

// console.log(lettersCount("AAaddBBBddddDttTtTbbbBpitT"))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function sequenceSum(begin, end) {
//     let sum;
//     if (begin > end) return NaN      
//     if (begin === end) return end
//     sum = (end) + (sequenceSum(begin, end - 1))
//     return sum
// }

// let suma = sequenceSum(6, 6)
//     console.log(suma)

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function getStringCount(object) {
//     let sum = 0
//     for (i in object) {
//         if (typeof (object[i]) === "string") sum += 1
//         if (typeof (object[i]) === "object") sum += getStringCount(object[i])
//     }
//     return sum
// }

// console.log(getStringCount({
//     firs2t: '1',
//     first: '11',
//     fir1st: '133',
//     second: {
//         kjsdf: {
//             kjsf: '2',
//             lkfh: 2,
//             dkfg: '3',
//             g1: '3',
//         },
//         jhfdlkfh: 2,
//         lfpdkfg: '3',
//         lfpdkfg1: '3',
//     },
//     third: false,
//     fourth: [2, 3, 'anytime', 4],
//     f22our11th: [2, 3, 'anwdyasadasdasdtime', 4],
//     f22ou2rth: [2, 3, 'anwdydasdadtime', 4],
//     f22o3urth: [2, 3, 'anwdytasime', 4],
//     fir1s2212312t: '133',
//     fifth: null,
//     fifth1: NaN,
// })); // 13

// console.log(getStringCount(['1', '2', ['3']])) // 3

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// Сначала стоит проверять есть ли данный ключ  объекте, если нет вернуть undefined. Далее проверить длину chain если длинна равна 1, 
// то вернуть obj[chain[0]], если нет, то вызвать заново функцию с значениями optionalChaining(obj[chain[0]], chain.slice(1))

// function optionalChaining(obj, chain) {
//     if (obj[chain[0]]) {
//         if (chain.length === 1) return obj[chain[0]]
//         else return optionalChaining(obj[chain[0]], chain.slice(1))
//     } else return undefined
// }

// const obj = {
//     mather: {
//         name: 'jmihiha',
//         firstname: 'pojilaya',
//         object: {
//             name: 'pes',
//             firstname: 'sutuliy',
//             age: "90100",
//             g1: "asda",
//         },
//         array: [1, 2, 3],
//     },
//     father: {
//         name: 'jmih',
//         firstname: 'pojiloy',
//         f1: "asda",
//         g1: "asda",
//     },
//     dedPerded: {
//         name: 'pes',
//         firstname: 'sutuliy',
//         age: "90100",
//         g1: "asda",
//     }
// }

// console.log(optionalChaining(obj, ['mather', 'object', 'name']))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function partition(array, callback = (i) => i) {
//     const trueArray = []
//     const falseArray = []
//     array.forEach(function (item) {
//         callback(item);
//         if (callback(item) === true || !!callback(item) === true) return trueArray.push(item)
//         else return falseArray.push(item)
//     })
//     const resArr = [falseArray, trueArray]
//     return resArr
// }
// const numbers = [0, 1, 2, {}, false, "", "0"];
// partition(numbers);

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

///------//////------//////-----Замыкание-----////////----------///////////----------///////////------

// const once = fn => {
//     let a = true
//     return () => {
//         if (a) {
//             fn()
//             a = false
//         }
//     }
// };

// const f = () => console.log('hi!');
// const onceF = once(f);
// onceF(); // hi!
// onceF(); // nothing

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const inRange = (a, b) => {
//     return function (inRange) {
//         if (inRange >= a && inRange <= b) return true
//     }
// };

// const inArray = arr => {
//     return function (inArray) {
//         let a = arr.includes(inArray)
//         return a
//     }
// };

// const notInArray = arr => {
//     return function (inArray) {
//         let a = arr.includes(inArray)
//         return !a
//     }
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

// console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
// console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const createObjectCalculator = (a, b) => {
// this.a = a
// this.b = b
//     let calculator = {
//         sum: () => { return this.a + this.b },
//         mul: () => { return this.a * this.b },
//         read: (a, b) => {
//             this.a = a
//             this.b = b
//         }
//     }
//     return calculator
// };

// const calculator = createObjectCalculator(2, 3);
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6
// calculator.read(12, 34);
// console.log(calculator.sum()); // 12 + 34 = 46
// console.log(calculator.mul()); // 12 * 34 = 408

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const getField = (data, field) => {
//     const res = data.map(data => data[field])
//     return res
// };

// const data = [
//     {
//         name: 'Denis',
//         age: 25,
//     },
//     {
//         name: 'Ivan',
//     },
//     {
//         name: 'Ann',
//         age: 18,
//     },
// ];

// console.log(getField(data, 'age'));
//   // [25, undefined, 18]

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const createUsernames = users => {
//     let nowData = new Date();
//     const res = users.forEach(users => {
//         let first = users.firstName.toLowerCase()
//         let last = users.lastName[0].toLowerCase()
//         let age = nowData.getFullYear() - users.age
//         users['username'] = `${first}${last}${age}`;
//     })
//     return users
// };

// const data = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// const processedData = createUsernames(data);
// console.log(processedData); // [
// // { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
// //  username: 'emilyn1990' },
// // { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
// //  username: 'nore2000' }
// // ];

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const calculatePrice = (orders) => {
//     if (!orders || orders.length === 0)  return 0
//     const res = orders.reduce((acc, orders) => (acc += orders.price), 0)
//     return res
// };

// const data = [
//     {
//         type: 'food',
//         price: 130,
//     },
//     {
//         type: 'clothes',
//         price: 7300,
//     },
//     {
//         type: 'other',
//         price: 1400,
//     },
// ];

// console.log(calculatePrice(data)); // 8830

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const getMostSenior = humans => {
//     let a = humans[0].age
//     const maxAge = humans.forEach(humans => {
//         if (humans.age > a) a = humans.age
//     })
//     const res = humans.filter(humans => humans.age === a)
//     return res
// };

// const data = [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 12, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//     { firstName: 'Sou2', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// const result = getMostSenior(data);
// console.log(result)

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function invert(obj) {
//     let arr = Object.entries(obj)
//     let newArr = arr.map((arr) => arr.reverse())
//     let newObj = Object.fromEntries(newArr)
//     return newObj
// }

// console.log(invert({ a: 1, b: 2, c: 3 })) // { 1: a, 2: b, 3: c }

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function deepEqual (obj1, obj2) {
//     let a = 0;
//     let b = 0;
//     if (obj1 === null || obj2 === null || Object.keys(obj1 || obj2).length === 0) {
//         if (obj1 === obj2) return true;
//         return false;
//     }
//     if (Object.keys(obj1).length != Object.keys(obj2).length) return false
//     if (typeof (obj1 && obj2) === "object") {
//         for (i in obj1) {
//             if (typeof (obj1[i] && obj2[i]) === "object") {
//                 if (!deepEqual(obj1[i], obj2[i])) return false;
//             }
//             if (obj1[i] != obj2[i]) return false
//             else {
//                 a += 1
//                 b += 1
//             }
//         }
//     }
//     return a == b;
// }

// const firstObject = {
//     a: {
//         b: {
//             d: 'string',
//             c: 1,
//             e: {
//                 num2: 1,
//                 num: 1,
//             }
//         }
//     }
// };

// const secondObject = {
//     a: {
//         b: {
//             c: 1,
//             d: 'string',
//             e: {
//                 num: 1,
//                 num2: 1
//             }
//         }
//     }
// };

// console.log(deepEqual(firstObject, secondObject)); // true
// console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 })); // false
// console.log(deepEqual(1, 2)); // false
// console.log(deepEqual(true, false)); // false
// console.log(deepEqual(null, null)); // true

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const sum = (...parametrs) => {
//     return parametrs.reduce((acc, item) => {
//         if (typeof (item) != 'number') {
//             item = Number(item)
//         }
//         if (isNaN(item) === true) {
//             item = 0
//         }
//         return acc + item
//     }, 0)
// };

// console.log(
//     sum(1, 2, 3, 4, 5, 6),
// ); // 21
// console.log(
//     sum(-10, 15, 100),
// ); // 105
// console.log(
//     sum(),
// ); // 0
// console.log(
//     sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
// ); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const merge = (...objects) => {
//     return Object.assign({}, ...objects)
// };

// console.log(
//     merge(
//         {
//             name: 'John',
//             age: 22,
//         },
//         {
//             surname: 'Klein',
//             age: 20,
//             profession: 'student',
//         },
//         {
//             profession: 'frontend developer',
//             country: 'USA',
//         }
//     )
// );

//   // {
//   //   name: 'John',
//   //   surname: 'Klein',
//   //   age: 20,
//   //   profession: 'frontend developer',
//   //   country: 'USA',
//   // }

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const getLanguagesStatistic = (feedbacks) => {
//     const result = {};
//     const languages = feedbacks.forEach(feedback => {
//         const { year, language } = feedback
//         if (year == 2019) {
//             result[language] = (result[language] || 0) + 1;
//         }
//     })
//     return result
// };

// const data = [
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
//     { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
// ];
// const result = getLanguagesStatistic(data);

// console.log(result);
//   // {
//   //   C: 1, 
//   //   JavaScript: 2 
//   // }

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const getArraysCounts = (arr) => {
//     let map = new Map();
//     const res = arr.forEach(item => {
//         if (map.has(item) === false) {
//             map.set(item, 1)
//         } else map.set(item, map.get(item) + 1)
//     })
//     return map
// };

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const unique = (arr) => {
//     let set = new Set(arr);
//     return [...set];
// };

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: 'John' };
// const data2 = [obj, obj, obj, { name: 'John' }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const getDaysBetweenDates = (...theArgs) => {
//     if (theArgs.length < 2) throw new TypeError('TypeError')
//     let data1 = new Date(theArgs[0])
//     let data2 = new Date(theArgs[1])
//     let res = (data2 - data1) / 86400000
//     if (res > 0) return (res = Math.floor(res))
//     else {
//         res = Math.ceil(res)
//         if (res === -0) return 0
//         else return res
//     }
// };

// console.log(getDaysBetweenDates('12 9 1994', '12 8 1994'))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function isEmpty(obj) {
//     if (Object.keys(obj).length === 0) return true;
//     else return false
// }

// function isEmptyWithProtos(obj) {

//     for (key in obj) {
//         return true
//     }
//     return false
//     // if (Object.getPrototypeOf(obj).length === 0 || Object.keys(obj).length === 0) return true;

// }

// // Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

// // const obj = Object.create(null);
// // console.log(isEmpty(obj)); // -> true
// // console.log(isEmpty({ prop: 'value' })); // -> false
// // Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

// const protoObj = Object.create({ prop: 'value' });
// const obj = Object.create(protoObj);
// console.log(isEmptyWithProtos(obj)); // -> true
// console.log(isEmptyWithProtos({})); // -> false

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function Book(name, author, year) {
//     this.name = name
//     this.author = author
//     this.year = year
//     this.reader = null
// }

// Book.prototype.isAvaliable = function () {
//     console.log(this.reader)
//     return this.reader === null

// }

// Book.prototype.takeBook = function (readerName) {
//     if (this.reader === null) {
//         this.reader = readerName
//         return true
//     } else return false
// }

// Book.prototype.returnBook = function () {
//     if (this.reader != null) {
//         this.reader = null
//         return true
//     } else return false
// }

// Book.prototype.changeBookName = function (newBookName) {
//     this.name = newBookName
//     return this.name === newBookName
// }

// Book.prototype.changeAuthorName = function (newAuthorName) {
//     this.author = newAuthorName
//     return this.author === newAuthorName
// }

// Book.prototype.getCurrentReader = function () {
//     return this.reader
// }

// console.log(book)

// Book("Алеша", "серега", "2007")

// isAvaliable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
// takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
// returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
// changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
// changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
// getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class Addition {
//     constructor(num) {
//         this.num = num;
//     }

//     add(...nums) {
//         const sum = (a, b) => a + b;
//         return this.num + nums.reduce(sum);
//     }
// }

// function decorator() {
//     return function (...nums) {
//         const sum = (a, b) => a + b;
//         console.log('called')
//         return this.num + nums.reduce(sum);
//     }
// }

// Addition.prototype.add = decorator()

// const startedValue = new Addition(5);
// const result = startedValue.add(3, 5, 6) //В консоль выводится "called"
// console.log(result) //В консоль выводится 19

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// В данном задании вам нужно будет реализовать полифл Object.create.

// Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Ваша функция должна принимать два параметра:

// 1) prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
// 2) properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
// Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

// В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

// Подсказки:

// Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
// В JavaScript все является объектом, кроме: null и undefined.
// NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.

// Object.create = function (proto, propertiesObject = {}) {
//     if (!proto && !propertiesObject) throw new TypeError("TypeError");
//     if (typeof proto !== "object" && proto !== null) throw new TypeError("TypeError");
//     let res = new Object();
//     Object.setPrototypeOf(res, proto);
//     if (typeof (propertiesObject) !== "undefined")
//         Object.defineProperties(res, propertiesObject);
//     return res;
// };

// const A = {
//     objectName: 'Object A',
//     getObjectName: function () {
//         return `This is ${this.objectName}!`;
//     },
// };

// const B = Object.create(A, {
//     objectName: {
//         value: 'Object B',
//     },
// });

// const obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj))
// console.log(obj)
// console.log(A.getObjectName()); // This is Object A!
// console.log(B.getObjectName()); // This is Object B!

// console.log(A.hasOwnProperty('getObjectName')); // true
// console.log(A.hasOwnProperty('objectName')); // true

// console.log(B.hasOwnProperty('getObjectName')); // false
// console.log(B.hasOwnProperty('objectName')); // true

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     getAge() {
//         let nowData = Date.now();
//         let birthdayData = new Date(this.age);
//         let fullAge = (nowData - birthdayData) / (1000*60*60*24*365.25)
//         return (fullAge = Math.floor(fullAge))
//     }
//     get fullName(){
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// class Account {
// static transfer(fromAccount, toAccount, amount) {
//         fromAccount.money -= amount
//         toAccount.money += amount
//         fromAccount.switchMeta(amount, 'out', `Перевод на счет ${toAccount.person.firstName}`)
//         toAccount.switchMeta(amount, 'in', `Перевод со счета ${fromAccount.person.firstName}`)

//     }
//     constructor(person, money) {
//         this.person = person;
//         this.money = money;
//         this.history = []
//     }

//     switchMeta(amount, target, coment) {    
//             this.history.push({
//                 timestamp: Date.now(),
//                 target: `${target}`,
//                 amount,
//                 description: `${coment}`
//             })
//         }

//     addMoney(amount, description) {
//         this.money += amount
//         this.switchMeta(amount, 'in', description)
//     }
//     withdrawMoney(amount, description) {
//         this.money -= amount
//         this.switchMeta(amount, 'out', description)
//     }
//     getAmount() {
//         return this.money
//     }
//     getAccountHistory() {
//         return this.history
//     }
// }

// const alex = new Person('Alexey', 'Petrov', '1994-05-22');
// const alexAccount = new Account(alex, 1000);
// const helen = new Person('Helen', 'Smith', '1990-06-06');
// const helenAccount = new Account(helen, 400);

// alexAccount.addMoney(1000, 'Зарплата');
// const amount = alexAccount.getAmount();
// alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
// Account.transfer(alexAccount, helenAccount, 100);
// helenAccount.getAmount(); // 500
// alexAccount.getAmount(); // 1700
// console.log(alexAccount.history)

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class Calc {
//     constructor(start = 0) {
//         this.start = start;
//     }

//     add(num) {
//         return new Calc(this.start + num)
//     }

//     sub(num) {
//         return new Calc(this.start - num)
//     }

//     result() {
//         return this.start
//     }
// }

// const calc = new Calc();
// console.log(calc.result()); // 0
// console.log(calc.add(5).result()); // 0 + 5 = 5
// console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7

// const ten = calc.add(10);
// console.log(ten.sub(5).result()); // 10 - 5 = 5
// console.log(ten.result()); // 10

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class EventEmitter {
//     constructor() {
//         this.events = {}
//     }

//     on(eventName, callback) {
//         this.events[eventName] = this.events[eventName] || [];
//         this.events[eventName].push(callback);
//     }

//     off(eventName, callback) {
//         this.events[eventName] = this.events[eventName].filter(fn => {
//             JSON.stringify(fn) === JSON.stringify(callback)
//         })
//         if (this.events[eventName].length === 0) {
//             for (let i in this.events)
//                 if (i === eventName) delete this.events[i]
//         }
//     }

//     once(eventName, callback) {
//         let oneCall = (...arg) => {
//             callback(...arg)
//             this.off(eventName, callback)
//         }
//         this.on(eventName, oneCall)
//     }

//     emit(eventName, args) {
//         if (this.events[eventName]) {
//             this.events[eventName].forEach(fanc => {
//                 fanc.call(this, args);
//             });
//         }
//     }
// }

// class BroadcastEventEmitter extends EventEmitter {
//     emit(eventName, ...args) {
//         for (let i in this.events)(
//             this.events[i].forEach(fanc => {
//                 fanc.call(eventName, ...args);
//             })
//         )
//     }
// }

// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');

// let emitter = new BroadcastEventEmitter();

// emitter.once('event:name-changed', data => {
//     h1.innerHTML = `New value is: ${data.name}`;
// });
// console.log(emitter.events)
// /*
// подписываемся на событие 'event:name-changed' и передаём обработчик вторым аргументом. Теперь при возникновении этого события, мы будем вызывать обработчик и обновим текст заголовка при возникновении этого события.
// */
// button.addEventListener('click', () => {
//     emitter.emit('event:name-changed', {
//         name: input.value
//     });
// });

/*
добавляем обработчик события 'клик' на кнопку. Этот обработчик производит событие 'event:name-changed' и вызывает все функции, подписанные на это события, передавая им строку из input.
*/

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function arrayToCsv(data) {
//     let csv = data.map(item => {
//         let arr = item.map(item => {
//             if (typeof item != 'string' && typeof item != 'number') throw new Error('Unexpected value')
//             if (typeof item === 'string') {
//                 item = item.replace(/"/g, '""') || item
//             }
//             if (item.length > 1 && item.length != undefined) return `"${item}"`
//             else return item
//         }).join()
//         return arr;
//     }).join('\n');
//     return csv
// }

// console.log(arrayToCsv([
//     [1, 2],
//     ['a', 'b']
// ])) // '1,2\na,b'
// console.log(arrayToCsv([
//     [1, 2],
//     ['a,b', 'c,d']
// ])) // '1,2\n"a,b","c,d"'
// console.log(arrayToCsv([
//     ['"text"', 'other "long" text']
// ])) // ==> """text""",other ""long"" text

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function incrementCounter(counterName) {
//     try {
//         let parsed = JSON.parse(localStorage.getItem('counters'))
//         for (let key in parsed) {
//             if (key === counterName) {
//                 parsed[key]++
//                 localStorage.setItem('counters', JSON.stringify(parsed))
//                 return parsed[key]
//             }
//         }
//         parsed[counterName] = 1;
//         localStorage.setItem('counters', JSON.stringify(parsed))
//         return 1
//     } catch (err) {
//         localStorage.setItem('counters', JSON.stringify({
//             [counterName]: 1
//         }))
//         return 1
//     }
// }

// // в localStorage 1 счетчик: bannerClick = 5
// incrementCounter('bannerClick'); // 6
// incrementCounter('bannerClose'); // 1
// // в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class AttemptsLimitExceeded extends Error {
//     constructor() {
//         super('Max attempts limit exceed');
//         this.name = 'AttemptsLimitExceeded';
//     }
// }

// class NotFoundError extends Error {
//     constructor() {
//         super('Not found');
//         this.name = 'NotFoundError';
//     }
// }

// class TemporaryError extends Error {
//     constructor() {
//         super('TemporaryError');
//         this.name = 'TemporaryError';
//     }
// }

// function getRepeatableData(getData, key, maxRequestsNumber) {
//     try {
//         return getData(key)
//     } catch (error) {
//         if (error instanceof NotFoundError) throw new NotFoundError('NotFoundError')
//         if (error instanceof TemporaryError) {
//             if (maxRequestsNumber === 1) {
//                 throw new AttemptsLimitExceeded('AttemptsLimitExceeded')
//             } else if (!maxRequestsNumber) return getRepeatableData(getData, key)
//             else {
//                 return getRepeatableData(getData, key, maxRequestsNumber - 1)
//             }
//         }
//     }
// }

// let getData = key => {
//     throw new TemporaryError(`${key}`)
// }
// let res = getRepeatableData(getData, "das", 2)
// console.log(res);

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// class ExecutionError extends Error {
//     constructor(arg, stack) {
//         super('Ошибка исполнения');
//         this.name = 'ExecutionError';
//         this.arg = arg;
//         this.stack = stack
//     }
//     getArgData() {
//         return this.arg
//     }
// }

// function applyFn(dataArr, callback) {
//     let succeeded = []
//     let errors = []
//     dataArr.forEach((arg => {
//         try {
//             succeeded.push(callback(arg))
//         } catch (er) {
//             errors.push(new ExecutionError(arg, er.stack))
//         }
//     }))
//     return {
//         succeeded,
//         errors
//     }
// }

// const {
//     succeeded,
//     errors
// } = applyFn([1, 2, 3], (arg) => arg + 1);
// succeeded: [2, 3, 4],
//     errors: [],

// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// console.log(applyFn(dataArr, callback));
// console.log(applyFn(dataArr, callback));
// succeeded: [{
//         login: 'login',
//         password: "password"
//     }],
//     errors: [ExecutionError],
// errors[0].getArgData(); // '{}'

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// let fileSizes = {
//     testFile1: 65,
//     testFile2: 48,
// }

// function getFileSize(filename, cb) {
//     setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
// }

// function sumFileSizes(filename1, filename2, cb) {
//     let sumFileSize = 0
//     let callback = filesize => sumFileSize += filesize
//     getFileSize(filename1, callback)
//     getFileSize(filename2, callback)
//     setTimeout(() => cb(sumFileSize), 600)
// }

// console.log(sumFileSizes('testFile1', 'testFile2', (a)=> console.log(a)))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const data = {
//     id2: {
//         name: 'Alex',
//         age: 70
//     },
//     id6: {
//         name: 'Elon'
//     },
//     id3: {
//         "lastName": "Ivanov",
//         "name": "Pavel",
//         "profession": "programmer",
//     },
//     id4: {
//         "name": "Petr",
//     },
//     id5: {
//         "city": "St. Petersburg",
//         "name": "Lena",
//     },
//     id7: {
//         "age": 25,
//         "hobbys": [
//             "traveling",
//             "macrame"
//         ],
//         "name": "Olesya",
//     }
// };

// function getUsersIds(cb) {
//     setTimeout(() => cb(Object.keys(data)), 200);
// };

// function getUserInfo(id, cb) {
//     setTimeout(() => cb(data[id]), 200);
// }

// function getUsersInfo(onLoad) {
//     getUsersIds(ids => {
//         if (ids.length === 0) return onLoad([]);
//         const users = [];
//         ids.forEach((id, i) => {
//             getUserInfo(id, user => {
//                 users[i] = user;
//                 if (!--ids.length) onLoad(users);
//                 // if (ids.length === i + 1) onLoad(users);
//             });
//         })
//     })
// }

// getUsersInfo((users) => {
//     console.log(Object.keys(users).map((key) => users[key]))
// });

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// function increaseSalary() {
//     return api.getEmployees()
//         .then(employees => {
//             return employees.reduce((acc, employee) => {
//                 if (acc.salary > employee.salary) acc = employee
//                 return acc
//             })
//         })
//         .then(employee => {
//             return api.setEmployeeSalary(employee.id, employee.salary * 1.2)
//                 .then(employee => {
//                     api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`)
//                     return true
//                 })
//                 .catch(err => {
//                     api.notifyAdmin(err)
//                     return false
//                 })
//         })
// }

// const api = {
//     _employees: [{
//             id: 1,
//             name: 'Alex',
//             salary: 130000
//         },
//         {
//             id: 2,
//             name: 'Fred',
//             salary: 110000
//         },
//         {
//             id: 3,
//             name: 'Bob',
//             salary: 80000
//         },
//     ],

//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },

//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             this._employees = this._employees.map((employee) =>
//                 employee.id !== employeeId ?
//                 employee : {
//                     ...employee,
//                     salary: newSalary,
//                 }
//             );
//             resolve(this._employees.find(({
//                 id
//             }) => id === employeeId));
//         });
//     },

//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },
// };

// console.log(increaseSalary(api))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );

// function promiseRace(promises) {
//     return new Promise((resolve, reject) => {
//         promises.forEach(promise => {
//             promise.then(resolve, reject)
//         })
//     })
// };

// console.log(promiseRace([firstPromise, secondPromise, thirdPromise])); // 100

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(200), 300)
// );

// const secondPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(300), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(100), 100)
// );

// function promiseAll(promises) {
//     return new Promise(resolve => {
//         let counter = promises.length;
//         let res = []
//         if(counter === 0) resolve(res)
//         res.length = promises.length;
//         let finalFoo = () => {
//             if (--counter === 0) resolve(res)
//         }
//         promises.forEach((promise, i) => {
//             promise.then(promiseRes => res[i] = promiseRes).then(finalFoo)
//         })
//     })
// }

// promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// async function increaseSalary() {
//     let count = 0
//     let allSalaries = 0

//     function employeesNewSalary(employees) {
//         let averageSal = employees.reduce((acc, employee) => {
//             acc += employee.salary
//             return acc
//         }, 0) / employees.length

//         return employees.map(employee => {
//             if (employee.salary < averageSal) employee.salary *= 1.2
//             else employee.salary *= 1.1
//             return employee
//         })
//     }
//     let employees = await api.getEmployees()
//     let employeesNewSal = employeesNewSalary(employees)
//     for (const employee of employeesNewSal) {
//         try {
//             await api.setEmployeeSalary(employee.id, employee.salary)
//             api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`)
//             count += 1
//             allSalaries += employee.salary
//         } catch (err) {
//             api.notifyAdmin(err)
//         }
//     }
//     await api.sendBudgetToAccounting(allSalaries)
//     return count
// }

// const api = {
//     _employees: [{
//             id: 1,
//             name: 'Alex',
//             salary: 120000
//         },
//         {
//             id: 2,
//             name: 'Fred',
//             salary: 110000
//         },
//         {
//             id: 3,
//             name: 'Bob',
//             salary: 80000
//         },
//     ],

//     getEmployees() {
//         return new Promise((resolve) => {
//             resolve(this._employees.slice());
//         });
//     },

//     setEmployeeSalary(employeeId, newSalary) {
//         return new Promise((resolve) => {
//             const updatedEmployees = this._employees.map((employee) =>
//                 employee.id !== employeeId ?
//                 employee : {
//                     ...employee,
//                     salary: newSalary,
//                 }
//             );
//             this._employees = updatedEmployees;
//             resolve(this._employees.find(({
//                 id
//             }) => id === employeeId));
//         });
//     },

//     notifyEmployee(employeeId, text) {
//         return new Promise((resolve) => {
//             resolve(true);
//         });
//     },

//     notifyAdmin(error) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },

//     setEmployees(newEmployees) {
//         return new Promise((resolve) => {
//             this._employees = newEmployees;
//             resolve();
//         });
//     },

//     sendBudgetToAccounting(newBudget) {
//         return new Promise((resolve) => {
//             resolve();
//         });
//     },
// };

// console.log(increaseSalary(api))

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// async function promisesInSeries(asyncFns) {
//     let count = undefined
//     for (const fn of asyncFns) {
//         count = await fn(count)
//     }
//     return count
// }

// const firstPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(300)), 300);

// const secondPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(200)), 200);

// const thirdPromise = () =>
//     new Promise((resolve) => setTimeout(() => resolve(100)), 100);

// console.log(promisesInSeries([firstPromise, secondPromise, thirdPromise]));
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const debounce = (fn, debounceTime) => {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => fn.apply(this, args), debounceTime)
//     }
// };

// let counter = 0;
// const fn = () => {
//     counter++;
// };

// const debouncedFn = debounce(fn, 200);
// debouncedFn(); // первый вызов
// setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
// // первый вызов был заблокирован, второй ожидает окончания таймера
// setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
// // второй вызов был заблокирован, третий ожидает окончания таймера
// setTimeout(debouncedFn, 300); // ...
// setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
// // только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// console.log(counter); // 1

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

// const throttle = (fn, throttleTime) => {
//     let waitTime = false;
//     let savedArgs = null;
//     let savedThis = null
//     return function wrapper(...args) {
//         if (waitTime) {
//             savedArgs = args
//             savedThis = this
//             return
//         }
//         fn.apply(savedThis, savedArgs)
//         waitTime = true
//         setTimeout(() => {
//             waitTime = false
//             if (savedThis) {
//                 wrapper.apply(savedThis, savedArgs)
//                 savedThis = null
//                 savedArgs = null
//             }
//         }, throttleTime)
//     }
// };

// let counter = 0;
// const fn = () => {
//     counter++;
// };

// const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

// console.log(counter); // 3

//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--//--

let search = document.querySelector('#serch')
let searchHelp = document.querySelector('.serch_help')
let blanks = document.querySelector('.blanks')
let resArr

const debounce = (fn, debounceTime) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), debounceTime)
    }
};

let counter = 0;
const fn = () => {
    counter++;
};

function searching() {
    fetch(`https://api.github.com/search/repositories?q=${search.value}&per_page=5&sort=stars`).then(resp => resp.json()).then(res => {
        resArr = res.items
        let searchHelp2 = document.querySelectorAll('.serch_help__blank')
        if (searchHelp2 !== null) searchHelp2.forEach(el => el.remove())
        for (const i in resArr) {
            let elem = document.createElement('div');
            elem.classList.add("serch_help__blank")
            elem.textContent = resArr[i].name
            searchHelp.appendChild(elem)
        }
    })
}

function add(e) {
    let elem = document.createElement('div');
    elem.classList.add("blanks_addesBlank")
    for (const i in resArr) {
        if (e.target.textContent === resArr[i].name) {
            elem.innerHTML = `<div class= text_add> Name: ${resArr[i].name}  <br> Owner: ${resArr[i].owner.login} <br> Stars: ${resArr[i].stargazers_count}</div> <div class=close></div>`
        }
    }
    blanks.appendChild(elem)
}

search.addEventListener('keyup', debounce(searching, 350))
searchHelp.addEventListener('click', add)
blanks.addEventListener('click', e => {
    if (e.target.classList.contains = 'close') e.target.parentNode.parentNode.removeChild(e.target.parentNode);
})
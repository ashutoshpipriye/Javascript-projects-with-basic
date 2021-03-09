//Function Declaration , expression and arrow function
/*
//function addition (opertor, num1, num2){}
//const addition = function (opertor, num1, num2) {}
const addition = (opertor, num1, num2) => {
    // console.log(opertor, num1, num2)
    // var opertor;
    switch (opertor) {
        case '+':
            var sum = num1 + num2;
            ans = `Additopn of ${num1} and ${num2} is ${sum}.`
            break;
        case '-':
            var sub = num1 - num2;
            ans = `Substraction of ${num1} and ${num2} is ${sub}.`
            break;
        case '*':
            var mul = num1 * num2;
            ans = `Multiplication of ${num1} and ${num2} is ${mul}.`
            break;
        case '/':
            var div = num1 / num2;
            ans = `Division of ${num1} and ${num2} is ${div}.`
            break;
    }
    return ans

}
num1 = prompt("Enter the first number")
num2 = prompt("Enter the second number")
const sum = addition('+', Number(num1), Number(num2));
console.log(sum)
const sub = addition('-', Number(num1), Number(num2));
console.log(sub)
const mul = addition('*', Number(num1), Number(num2));
console.log(mul)
const div = addition('/', Number(num1), Number(num2));
console.log(div)
*/

//Arrow function
/*
const calcAge = (name, birthYear) => {
    const age = 2020 - birthYear;
    return `${name} is ${age} years old`
}
console.log(calcAge('Ashu', 1999))
*/

//Function Call
/*
function convertion(num) {
    return Number(num);
}

function addition(num1, num2) {
    const number1 = convertion(num1);
    const number2 = convertion(num2);

    var sum = number1 + number2;
    return sum;
}
console.log(addition('20', '10'));
*/

//Introduction to array
/*
const number = [10, 20, 30, 40, 50];
console.log(number);
console.log(number.length);
console.log(number[0]);
console.log(number[4]);
console.log(number[number.length - 1]);
number[4] = 60;
console.log(number)

const years = new Array(1999, 2000, 2001, 2002);
console.log(years)
console.log(years);
console.log(years.length);
console.log(years[0]);
console.log(years[3]);
console.log(years[years.length - 1]);
years[3] = 2004;
console.log(years)
*/

//Introduction to objects
/*
const ashu = {
    firstName: 'Ashu',
    lastName: 'Pipriye',
    birthYear: 1999,
    job: 'student',
    friends: ['Ashish', 'Ayush', 'Saurabh']
};
console.log(ashu);
console.log(typeof (ashu));
console.log(ashu.lastName);
console.log(ashu['lastName']);
*/

// Object methods
/*
const ashu = {
    firstName: 'Ashu',
    lastName: 'Pipriye',
    birthYear: 1999,
    job: 'student',
    friends: ['Ashish', 'Ayush', 'Saurabh'],
    hasDriverLicences: false,
    // calcAge: function (birthYear) {
    //     return 2020 - birthYear;
    // }
    // calcAge: function () {
    //     return 2020 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2020 - this.birthYear;
        return this.age;
    },

    // Challege
    getSummary: function () {
        return `${this.firstName} is a ${this.age}-years old ${this.job}, and he has ${this.hasDriverLicences ? 'a' : 'no'} driver's licences`
    }
};

// console.log(ashu.calcAge(1999));
// console.log(ashu['calcAge'](1999));

console.log(ashu.calcAge());
console.log(ashu.age)
console.log(ashu.getSummary())
*/

// Coding Challenge 3
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const ashu = {
    fullName: 'Ashutosh Pipriye',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
ashu.calcBMI();
console.log(mark.bmi, ashu.bmi);

// "Ashutosh Pipriye's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > ashu.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${ashu.fullName}'s BMI (${ashu.bmi})`)
} else if (ashu.bmi > mark.bmi) {
    console.log(`${ashu.fullName}'s BMI (${ashu.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

/*
// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}
*/

/*
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}
*/

// The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(Math.trunc(Math.random() * 6))
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

const calcAge = birthYear => 2020 - birthYear;

let array = [1, 23, 32, 43, 25, 34, 34.43, 56, 44, 67];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

let books1 = [
    {title: 'Wuthering Heights', pageCount: 321, genre: 'novel'},
    {title: 'The Great Gatsby', pageCount: 455, genre: 'novel'},
    {title: 'The Chronicles of Narnia', pageCount: 534, genre: 'fantasy'}
];
console.log(books1[0]);

let books2 = [
    {title: 'Wuthering Heights', pageCount: 321, genre: 'novel', authors:
            [name = 'Emily Bronte', age = 30]},
    {title: 'The Great Gatsby', pageCount: 455, genre: 'novel', authors:
            [name = 'F. Scott Fitzgerald', age = 44]},
    {title: 'The Chronicles of Narnia', pageCount: 534, genre: 'fantasy', authors:
            [name = 'C. S. Lewise', age = 64]}
];
console.log(books2[2]);

let users = [
    user1 = [name = 'Vlad', username = 'PiratePenguin', Password = 'Salsa4Life!'],
    user2 = [name = 'Danil', username = 'WaffleWarrior', Password = 'SyrupNinja123'],
    user3 = [name = 'Roma', username = 'CaptainQuokka', Password = 'SmilesAllDay!'],
    user4 = [name = 'Tim', username = 'DiscoPlatypus', Password = 'BoogieTime99'],
    user5 = [name = 'Jack', username = 'NachoNinja', Password = 'CheeseChamps!'],
    user6 = [name = 'Taras', username = 'SirDoodleSaurus', Password = 'SketchKing42!'],
    user7 = [name = 'Vladek', username = 'DonutDefender', Password = 'Sprinkles4Ever'],
    user8 = [name = 'Gena', username = 'GiggleGiraffe', Password = 'ArrMatey123'],
    user9 = [name = 'SerGay', username = 'BurritoBandito', Password = 'LaughTall456'],
    user10 = [name = 'Felix', username = 'JesterJellybean', Password = 'SweetTricks!']
];
console.log(users[0][2]);
console.log(users[1][2]);
console.log(users[2][2]);
console.log(users[3][2]);
console.log(users[4][2]);
console.log(users[5][2]);
console.log(users[6][2]);
console.log(users[7][2]);
console.log(users[8][2]);
console.log(users[9][2]);

// let temperature = [
// { morning: 18, day: 25, evening: 20 },
// { morning: 19, day: 26, evening: 21 },
// { morning: 17, day: 24, evening: 19 },
// { morning: 18, day: 27, evening: 22 },
// { morning: 20, day: 28, evening: 23 },
// { morning: 21, day: 29, evening: 24 },
// { morning: 22, day: 30, evening: 25 }
// { morning: 18, day: 27, evening: 22 },
// { morning: 20, day: 28, evening: 23 },
// { morning: 21, day: 29, evening: 24 },
//     ]

let temperature = [
    [18, 25, 20],
    [19, 26, 21],
    [17, 24, 19],
    [18, 27, 22],
    [20, 28, 23],
    [21, 29, 24],
    [22, 30, 25],
    [18, 27, 22],
    [20, 28, 23],
    [21, 29, 24]
]
console.log(temperature[0])

let a = 1; //true
a = 0; //false
a = -3; //true
let x = a;
if (x !== 0){
    console.log(true)
} else {
    console.log(false)
}

let time = +prompt('Enter the time on your computer in minutes from 1 to 59');
if (time >= 60){
    console.log('@#$%')
}else if(time >= 46){
    console.log('fourth quarter')
}else if(time >= 31){
    console.log('third quarter')
}else if(time >= 16){
    console.log('second quarter')
}else if(time >= 1){
    console.log('first quarter')
}

let day = +prompt('Write what today is the number of the month from 1 to 31');
if (day > 31){
    console.log('@#$%');
}else if(day >= 21){
    console.log('third decade');
}else if(day >= 11){
    console.log('second decade');
}else if(day >= 1){
    console.log('first decade');
}

let timetable =  prompt('Enter the serial number of the day of the week form 1 to 7');
switch (timetable){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('!@#$%');
}

let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');

if (firstNumber === secondNumber){
    console.log('same')
} else if (firstNumber > secondNumber){
    console.log(firstNumber)
} else if (firstNumber < secondNumber){
    console.log(secondNumber)
} else {
    console.log('!@#$%')
}




let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}

if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}

if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}

if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}

if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}

if (coursesAndDurationArray[5].monthDuration >= 5){
    console.log('super')
} else {
    console.log('also not bad')
}
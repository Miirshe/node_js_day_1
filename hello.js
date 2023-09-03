// const mission = process.argv[2];

// if (mission == 'help') {
//     console.log('Too much information');
// } else {
//     console.log('focus on the help');
// }
// const name = process.argv[2];

// function Hello(name) {
//     console.log('Hi,', name);
// }
// Hello(name);


// const age = process.argv[2];

// if (age < 30) {
//     console.log("Young men", age);
// } else {
//     console.log("Old men", age);
// }

// const sum = process.argv[2];

// if (sum < 100) {
//     console.log("is too much small");
// } else {
//     console.log("is too much enough");
// }


function hello(message) {

    return `hi ${message} 👋🙋‍♂️🙋‍♀️`;

}

function grade(grade) {

    if (grade > 90 && grade < 100) {
        return `Your Grade A : ${grade}`;
    } else if (grade > 80 && grade < 70) {
        return `Your Grade B : ${grade}`;
    } else if (grade > 70 && grade < 60) {
        return `Your Grade C : ${grade}`;
    } else {
        return `Your Grade F : ${grade}`;
    }

}

module.exports.hello = hello;

module.exports.grade = grade;
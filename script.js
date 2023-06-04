// EXAMPLE 1

// let fullName = 'Musayev Anar Osman';
// let splitted = fullName.split(' ');
// console.log(splitted[0][0] + '/' + splitted[1][0] + '/' + splitted[2][0]);

// EXAMPLE 2

// let fullName  = 'Musayev Anar';
// let indexSpace = fullName.indexOf(' ');
// console.log(fullName[0] + '/' + fullName[indexSpace +1]);

// EXAMPLE 3

// let query = prompt('please add your fullname');
// let splittedFullName =query.split(' ');
// console.log(splittedFullName[1] + '/' + splittedFullName[0]);

// EXAMPLE 4

// let query = prompt('Please add your fullname please(surname name fathername');
// let splittedQuery = query.split(' ');
// console.log(splittedQuery[0] + splittedQuery[1][0] + splittedQuery[2][0]);

// EXAMPLE 5

// let firstNum = 12345;
// let secondNum = 98765;
// let multiply = firstNum *secondNum;
// console.log(multiply.toString()[5]);

// EXAMPLE 6

// let query = prompt('please add the price');
// let splittedPrice = query.split('.');
// console.log(splittedPrice[0] + 'manat' + ' ' + splittedPrice[1] + 'cent');

// EXAMPLE 7

// let query = prompt('please attach your fullname');
// let splittedQuery = query.split(' ');
// console.log('Salam,' + ' ' + splittedQuery[1] + '!');

// EXAMPLE 8                              @@@@@    EV TAPWIRIGI 1    @@@@@@

// let id = prompt("məhsul ıd daxil edin:");
// switch (id) {
//   case "1":
//     alert("Mövcud 10 ədəd.");
//     break;
//   case "2":
//     alert("Mövcud 256 ədəd.");
//     break;
//   case "3":
//     alert("53 ədəd mövuddur.");
//     break;
//   case "4":
//     alert("Mövcud 3 ədəd.");
//     break;
//   default:
//     alert("Mövcud deyil");
//     break;
// }

// // EXAMPLE 9

// let query = prompt(
//   "Titanik hansı ildə qəzaya uğrayıb? 1: 1910, 2: 1912, 3: 1914, 4: 1916"
// );
// switch (query) {
//   case "1":
//   case "2":
//   case "3":
//     alert("yanliwdir");
//     break;
//   case "4":
//     alert("dogrudur");
//     break;
//   default:
//     alert("XXX");
//     break;
// }

// // EXAMPLE 10                              @@@@@@@@@@  EV TAPWIRIG 2  @@@@@@@@@@@

// let query = prompt('please add your gender "m /f"?');
// switch (query) {
//   case "m":
//     alert("male");
//     break;
//   case "f":
//     alert("female");
//     break;
//   default:
//     alert("sorry, probably you have pressed a button mistakenly");
//     break;
// }

//   OR

// let query = prompt('please add your gender "f or m"');
// let gender =
//   query == "m"
//     ? "you are a male"
//     : query == "f"
//     ? "you are a female"
//     : "sorry try again";
// alert(gender);

// EXAMPLE 11

// let id = prompt('mehssul id daxil edin');
// if ( id=== '1'){
//     alert('Mövcud 10 ədəd.');
// }
// else if (id === '2'){
//     alert('Mövcud 256 ədəd.');
// }
// else if (id === '3'){
//     alert('53 ədəd mövuddur.');
// }
// else if (id === '4'){
//     alert('Mövcud 3 ədəd.');
// }
// else {
//     alert('Mövcud deyil');
// }

// EXAMPLE 12

// let query = +prompt('please enter first number');
// let secondQuery = +prompt('please enter second number');
// console.log(query + secondQuery);
// console.log(query - secondQuery);
// console.log(query * secondQuery);
// console.log(query / secondQuery);


// EXAMPLE 13

// let firstNum = 12345;
// let secondNum =98765;
// let eventual =firstNum * secondNum;
// console.log(String(eventual).indexOf('5'));
// // console.log(eventual.toString()[5]);



// EXAMPLE 14

// let firstQuery = prompt('please add your username');
// // let secondQuery = prompt('please add your password');
// switch(firstQuery){
//     case 'Tony':
//     alert('welcome');
//     break;
//     default:
//         alert('oops');
// }

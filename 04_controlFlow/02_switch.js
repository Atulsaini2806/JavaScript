//switch statement:switch statement are used due to their ability to handle multiple conditions
    //  based on the value of an expression/keys.

//syntax:
// switch (expression/keys) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block
// }

//Example 1:    
const week = 4;
switch (week) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
        
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("default case");
    
        break;
}
// if we do not use break statement,and when our case matches then it will execute all subsequent code
// until it hits a break or the end of the switch except default.

//Example 2:
const fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is yellow");
        break;
    case "apple":
        console.log("Apple is red");
        break;
    case "grape":
        console.log("Grape is purple");
        brrak;
    default:
        console.log("Unknown fruit");
}
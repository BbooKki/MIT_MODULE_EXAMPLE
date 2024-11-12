//Module package CORE

// const { default: inquirer } = require("inquirer");


/*
setTimeout(function(){
    console.log("ishga tushdi");
}, 2000);



let number = 0
setInterval(function(){
    console.log("ishga tushdi");
    number++;
},1000);
*/




// const fs = require("fs");
// fs.readFile("input.txt", "utf8", function(err, data){
//     if(err) console.log("ERROR", err);
//     console.log(data);
// });


// fs.writeFileSync('./input.txt', `${data}  \n\t\t by Islom`);
// const new_data = fs.readFileSync("./input.txt", "utf8");
// console.log(new_data);



//Module package EXTERNAL


// const moment = require('moment');

// setInterval(()=>{
//     const time = moment(). format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000)
// console.log(time);





// const inquirer = require('inquirer');
// inquirer.createPromptModule([{type: 'input', name: 'raqam', message: 'raqamni kiriting? '}]).then((answer) => {
//     console.log('man kiritgan raqam qiymati: ', answer.raqam);
// }).catch(err => console.log(err))




// const validator = require("validator");
// const test = validator.isEmail('foo@bar.com')
// console.log("test: ", test);



//uuid random string generator
// const{v4: uuidv4} = require("uuid");
// const random = uuid();
// console.log("random: ", random);


// const chalk = require("chalk");
// const log = console.log;
// log(chalk.backgroundColorNames("hello")+ random + chalk.red("!"));


//Module package FILE

// const calculate = require('./hisob.js'); //agar ./ qo'yilmasa node modules dan qidiradi (console.log(arguments)) misol keltirilgan

// const result = calculate.kopaytirish(80, 20);

// console.log("Natija: ", result);

// console.log(arguments);
const Account = require('./account');

Account.tellMeAboutClass();
Account.tellMeTime();

const myAccount = new Account('Martin', 200000, 908938453452);
myAccount.giveMeDetails();

myAccount.makeDeposit(10000);

myAccount.makeDeposit(200000);

myAccount.withdrawMoney(40000000);
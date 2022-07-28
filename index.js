console.log("working");

//Question 1
//Write one example explaining how you can write a callback function ?

const sayHi = function() {  
    console.log("I will be printing after 5 seconds");
}
 
setTimeout(sayHi,5000);

//Question2
//"Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

//Explain callback hell.
//Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
const helloHi = function () {
    console.log("I will be printing after 1 second");
    setTimeout(helloHi,1000);
    // setTimeout(() => {
    //     console.log(helloHi);
    // }, 2000);
    console.log("I will be printing after 2 seconds");
    setTimeout(helloHi,2000);
    console.log("I will be printing after 3 seconds");
    setTimeout(helloHi,3000);
    console.log("I will be printing after 4 seconds");
    setTimeout(helloHi,4000);
    console.log("I will be printing after 5 seconds");
    setTimeout(helloHi,5000);
    console.log("I will be printing after 6 seconds");
    setTimeout(helloHi,6000);
    console.log("I will be printing after 7 seconds");
    setTimeout(helloHi,7000);
   
}


//Question3
//"Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

//Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7


let myPromise = new Promise((resolve,reject) => {
    resolve();
})
myPromise
.then(() => {
    setTimeout(() => {
        console.log("1");
        
    }, 1000);
})

.then(() => {
    setTimeout(() => {
        console.log("2");
        
    }, 2000);
})
.then(() => {
    setTimeout(() => {
        console.log("3");
        
    },3000);
})
.then(() => {
    setTimeout(() => {
        console.log("4");
        
    },4000);
})
.then(() => {
    setTimeout(() => {
        console.log("5");
        
    },5000);
})
.then(() => {
    setTimeout(() => {
        console.log("6");
        
    },6000);
})
.then(() => {
    setTimeout(() => {
        console.log("7");
        
    },7000);
})


//Question4
//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 


const myPromiseTwo = new Promise((resolve,reject) => {
    resolve();
  
    
})
myPromiseTwo
.then((data) => {
    console.log("Promise resolved");
})
.catch((error) => {
    console.log("promise rejected");
})
//Question5

//Create examples to explain callback function


const sayingHello = function() {  
    console.log("This is an example of callback function");
}

setTimeout(sayingHello,2000);


//Question6
//Create examples to explain callback hell function

const myName = () =>{
    setTimeout(() => {
        console.log("Fetching the details");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() => {
            let myName = {
                fName:"Rashi",
                lName :"Saral",
                age : 18,
            }
            console.log(`The name of the employee is ${myName.fName} ${myName.lName} and the age id ${myName.age}`);

            setTimeout(() => {
                myName.gender = "female";
                console.log(`The name of the employee is ${myName.fName} ${myName.lName} and the age id ${myName.age} and the gender is ${myName.gender}`);
                
            }, 4000);
            
        }, 4000);
        
    }, 4000);
}


//Question7
//Create examples to explain promises function

const myPromiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        let Name = "Shruti";
        resolve(Name);
       
        
    }, 5000);
})

myPromiseThree
.then((data) => {
    console.log(`this will print the name : ${data}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("successfully done");
})




//Question8
//Create examples to explain async await function

let myPromiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 1000); 
});


async function asyncFunc() {

    
    let result = await myPromiseFour; 

    console.log(result);
    console.log('this is async/await');
}
asyncFunc();


//Question9
//Create examples to explain promise.all function

const promiseOne = Promise.resolve(3);
const promiseTwo = 42;
const PromiseThree = new Promise((resolve, reject) => {
  setTimeout(resolve, 20, 'hey');
});

Promise.all([promiseOne, promiseTwo, PromiseThree]).then((values) => {
  console.log(values);
});
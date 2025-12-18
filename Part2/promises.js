const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise One Resolved');
    }, 1000);
});

promiseOne.then((message)=>{
    console.log(message);
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    },1000)

})
.then(() => {
    console.log("Promise 2 resolved");
})
.catch(() => {
    console.log("Promise 2 rejected");
})
.finally(() => {
    console.log("Promise 2 finally executed");
});   
 
//chaining bhi possible hai yani ek then ke baad dusra then laga sakte hain

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            console.log("Async task 3");
            resolve({username:"javaScript",password:"123"});
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})
//hum promise ko using async await bhi use lkr skte hai zaruri nhi hai ki hmesha then and cathcb hi use krna hai

async function asyncCall() {
    try {
        const response = await promiseThree
        console.log(response);
    } catch (error) {
        console.log(error);  
    }
}
asyncCall();

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));


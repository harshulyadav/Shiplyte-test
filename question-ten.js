// Question 10

const promiseDelay1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

const promiseDelay10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true)
    }, (Math.floor(Math.random() * 3) + 1) * 1000 );
});

let promiseArray = [
    promiseDelay1, promiseDelay2, promiseDelay3, promiseDelay4, promiseDelay5, promiseDelay6, promiseDelay7, promiseDelay8, promiseDelay9, promiseDelay10
]

Promise.all(promiseArray).then(value => {
    console.log(value);
})

console.log('as', (Math.floor(Math.random() * 3) + 1) * 1000);
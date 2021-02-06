function doSomething() {
    console.log(3333);
}
console.log(2222);
setTimeout(doSomething, 4000);

setTimeout(function () {
    console.log("lazy and waiting.");
}, 3000);

setTimeout(() => {
    console.log("see you later");
}, 5000);

setInterval(function () {
    console.log("doing it");
}, 3000);
console.log(4444);

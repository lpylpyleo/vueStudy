function f() {
    let a;
    setTimeout(function () {
        a = 1;
    }, 500);
    return a
}
console.log('f', f());


function f1(Callback) {
    let a;
    setTimeout(function () {
        a = 1;
    }, 500);
    Callback(a);
}

let mCallback=function (res) {
    console.log('f1',res);
};
f1(mCallback);

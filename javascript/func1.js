//func1.js
//function은 정의만.
function sum(a, b) { //var a, var b 이렇게 타입안적어도ㅇㅋ. 변수이름만 오면ㅇㅇ
    var sum = a + b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
}

function sum() {
    console.log("sum() 호출..");
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function mySum() {
    var result = sum(2,4,5,6,7,3); //위의 sum()을 호출한거임
    // var result = sum(2,4);
    console.log("결과: " + result);
}

function arraySum(ary) {
    var sum = 0;
    for(ar of ary) {
        sum += ar;
    }
    return sum;
}

function arrayTest() {
    var numAry = [3,4,5,6,7];
    var result = arraySum(numAry);
    console.log(result);
}

function funcTest(helloFunc) {
    var hello = document.getElementById("show").innerHTML;
    console.log(hello);
    hello += "World";
    document.getElementById("show").innerHTML = hello;
}

function helloFunc() {
    document.getElementById("show").innerHTML = "Hello";
}

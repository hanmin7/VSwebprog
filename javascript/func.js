 // var num = 10;
 var num; //undefined
 document.write(typeof num);
 document.write("<br>");
 num = 10; //number
 document.write(typeof num);
 document.write("<br>");
 num = "nice"; //string
 document.write(typeof num);
 document.write("<br>");
 num = {
     name:"Hong",
     age: 10
    } //object
    document.write(typeof num);
    
    // 연산..
    var num1, num2;
    num1 = "Hello";
    num2 = 15;
    num3 = 30;
    num = num1 + (num2 + num3);
    // document.write("<br>");
    // document.write(typeof num); //string
    //앞에 문자열이 들어오면 뒤에 숫자도 문자열로 인식.
    console.log(num);

    num3 = "15";
    console.log(num2 === num3); //false 나옴.
    console.log(num2 !== num3); //true     => 결국 다르다는거.

    var sum = 0; 
    for(var i=0; i<10; i++) {
        if(i<5)
            continue; //5보다 작을 동안은 연산x 지나감..
        sum = sum + i;  //sum += i;
    }
    console.log("결과값은 " + sum);

    
    var $sum = 10;
    var _sum = 20;
    var sum1 = null;
    var num1 = 10;
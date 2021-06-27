//WAP in js for performing arithmetic operation on 2 number according to input operator.

var a = 3;
var b = 4;
var plus = '+', minus = '-', multiplecation = '*', division = '/';
op = prompt("Enter oparator :");
if (op == plus){
sum = a+b;
    console.log("Sum of Two No. : "+ sum);
}
else if(op == minus){
    sub=a-b;
    console.log("Substraction of Two No. : "+ sub);
    
}
else if(op == multiplecation){
    mul=a*b;
    console.log("Multiplication of Two No. : "+ mul);
    
}
else if(op == division){
    div=a/b;
    console.log("Division of Two No. : "+ div);
}
else{
    console.log("Invalid Operator");
}
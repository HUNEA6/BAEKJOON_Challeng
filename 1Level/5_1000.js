// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A+B를 출력한다.

const fs = require('fs');
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");

let newArr = [];

for(let i=0; i<=input.length; ++i){
    newArr.push(+input[i]);
    // +input[i] === Number(input[i])
}

const A = newArr[0];
const B = newArr[1];

console.log(A+B);

/* 메모
require('fs'); 
::  node.js 의 모듈을 사용하는 것이다. 


readFileSync()
:: 백준의 서버에 있는 입력값을 받아오는 것이다. 입력값이 있는 주소는 '/dev/stdin' 이다.

​
toString()
:: 값을 문자열로 변환하는 것.

​
trim()
:: 문자의 앞 뒤 공백을 없애주는 것.
>redaFileSync 로 파일을 불러올 경우 예상치 못한 공백이 생길 수 있다.
아무리 해도 답이 맞는데 계속 틀린다면 공백을 제거해보자.

​
split() 
:: 문자를 나눠 그 값을 배열을 만들어주는 것이다. 

*/
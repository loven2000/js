// js Conditionals 조건문
// const age = prompt('How old are you?');
const age = parseInt( prompt('How old are you?'));

// console.log(typeof age);
// parseInt() 문자를 숫자로 바꾸어 주는 함수.
// console.log(age, parseInt(age));

// console.log(age);

// console.log(isNaN(age)); // isNaN 숫자가 아니냐? Not a Number, boolean(true, false)으로 답변 

if(isNaN(age)){
    /// condition === true
    console.log("please write a number")
}else{
    /// condition === false
    console.log("thank you for writing your age.")
}

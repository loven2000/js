// js Conditionals 조건문
// const age = prompt('How old are you?');
const age = parseInt( prompt('How old are you?'));

// console.log(typeof age);
// parseInt() 문자를 숫자로 바꾸어 주는 함수.
// console.log(age, parseInt(age));

// console.log(age);

// console.log(isNaN(age)); // isNaN 숫자가 아니냐? Not a Number, boolean(true, false)으로 답변 

if(isNaN(age) || age < 0){
    /// condition === true
    console.log("please write a real positive number.")
}else if(age < 18){
    /// condition === false
    console.log("Your are too young.")
}else if(age >= 18 && age <= 50){
    // 조건문의 경우의 수 - || or (한쪽만 참이면 됨) && and (둘다 참이어야 함)
    console.log("You can drink but drink too much is not good for your health")
}else{
    console.log("You can drink.")
}

// Question #3
// let userPassword = "ssswnalWadqQ"
// let userPassword = "TechUp"
// let userPassword = "abcde"
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength (userPassword){
    if(userPassword.length < 6){
        return "Weak";
    }else if(userPassword.length>10){
        return "Strong";
    }else {return "Medium";}
}
console.log(checkPasswordStrength(userPassword))
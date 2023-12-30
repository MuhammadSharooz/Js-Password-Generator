
let copyText = document.querySelector(".copypass")
let btn = document.querySelector(".btnGen")
let btnCopy = document.querySelector("#btnCopy")
let pass = document.querySelector("#password")
let length = "15"
let number = "123456789";
let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
let lowercase = "bcdefijklmnopqrstuvwxyz"
let character = "%@#*&^/+_-$"
let all = number + uppercase + lowercase + character;

btn.addEventListener("click",()=>{
    let password =""
    password +=lowercase[Math.floor( Math.random()*lowercase.length)]
    password +=uppercase[Math.floor( Math.random()*uppercase.length)]
    password +=number[Math.floor( Math.random()*number.length)]
    password +=character[Math.floor( Math.random()*character.length)]
    for (let i = password.length; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    
    pass.value = password
})
btnCopy.addEventListener("click", () => {
    pass.select();
    navigator.clipboard.writeText(pass.value).then(() => {
        copyText.innerHTML = "Password copied";
        setTimeout(() => {
            copyText.innerHTML = "Password not copied";
            pass.value = "";
        }, 2000); // Reset after 2 seconds (adjust the time as needed)
    });
});

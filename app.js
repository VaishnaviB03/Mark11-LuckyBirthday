var dob = document.querySelector("#DOB")
var luckyNo = document.querySelector("#LuckyNum")
var btn = document.querySelector("#btn")


function isLucky(){
    const birthDate = dob.value;
    const sum = calcSum(birthDate);
    if(sum && birthDate){
        compare(sum, luckyNo.value)
    }
    else{
        output.innerText = "Enter The Fields"
    }
    // console.log(sum);
}

function calcSum(birthDate){
    birthDate = birthDate.replaceAll("-","")
    let sum=0;
    for(let i =0 ; i<birthDate.length ; i++){
        sum = sum+ Number(birthDate.charAt(i))
    }
    return sum;
    // return 12
}

function compare(sum,luckyNo){
    if(sum % luckyNo === 0){
        output.innerText = "Yayy! Your Birthday Is Lucky 😍"
    }
    else{
        output.innerText = "Sorry! Your Birthday Is Not Lucky 🥺"
    }
}


btn.addEventListener("click", isLucky)
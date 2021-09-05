
// ===============================1=================================

// substr-גוזרת ומחזירה את מספר התויים מהתו שצויינו לו
// substring-גוזרת ומהתו שציינו לו עד הסןף לא כולל 
// שני התויים מקבלים שני ארגומנטים.


// ===============================2=================================
// oninput- כל מה שנכניס בבלוק יתקיים בעת ההקלדה 
// onchange-כל מה שנכניס פנימה יתקיים ברגע שנצא מהפוקוס בתוך האינפוט ונפנה למקום אחר.onchange

// ===============================3=================================
// אלמנט זה נקרא אובייקט כיוון שייש לו תכונות ופונקציות (מתודות )

// / ===============================4=================================

// אובייקט יכול להכיל בתוכו פונקציה.
// הפונקציה יכולה לגשת לשדות אחרים באובייקט .
// היא קוראת בשם של האובייקט נקודה הקיי

// ===============================5=================================

// var car = {
//     model: "mazda",
//     price: 120000,
//     year: 2020
// }

// console.log(car.model);

// var car = {
//     model: "mazda",
//     price: 120000,
//     year: new Date().getFullYear()
// }
// console.log(car.year);

// ===============================6=================================


// יודפס חמש נראלי


// ===============================7=================================
// var arrayNUumbers = [43, 5, 7, 12, 50]

// pra.innerHTML=`${arrayNUumbers.length}`

// sum = 0;
// for (var i = 0; i < arrayNUumbers.length; i++) {
//     sum =  sum+arrayNUumbers[i]
// }
// console.log(sum);

// btn.innerText=sum

// ===============================8=================================

// התבלבלתח ממש אבל זה מה שיצא לי 


// form.onsubmit = function (event) {
//     event.preventDefault()
//     if(checkPassword1() && checkPassword2()){
//         return true
//     }
// }

// function checkPassword1() {
//     if (password.value.length > 8) {
      
//         return true
//     }
//     labelPassword.innerHTML += "*"
//     labelPassword.style.color = "red"
//     Paragraph.innerHTML += "password min 8  tavs"
//     return false
// }

// function checkPassword2() {
//     if (password.value.lenght  <=15 ) {
//         return true
//     }
//     labelPassword.innerHTML += "*"
//     labelPassword.style.color = "red"
//     Paragraph.innerHTML += "Password up to 15"
//     return false
// }

// ===============================9=================================

// userInput.oninput=function(){
//     praInput.innerText=userInput.value.toUpperCase()
// }
// userInput.onchange=function(){
//     praInput.innerText=userInput.value.toLowerCase()
// }
// buttonInput.onclick=function(){
//     alert(userInput.value)
// }

// ===============================10=================================

var arrayArticle=[
    {titel:"yafit",date:"4/4",mehaber:"fsodi"},
    {titel:"samuel",date:"5/2",mehaber:"dodi"},
    {titel:"adi",date:"9/12",mehaber:"ari"}

]
for(let i = 0; i < arrayArticle.length; i++) {
    praArticle.innerHTML=` <p>  ${arrayArticle[i].titel}    ${arrayArticle[i].date}   ${arrayArticle[i].mehaber}</p>`
   }




var number = document.querySelector(".howlong");
var go = document.querySelector(".gen");
var lower = document.querySelector("#LL");
var upper = document.querySelector("#UL");
var specChar = document.querySelector("#SC");
var numbers = document.querySelector("#N");
var PW = "";
var newitem;
var ingredients = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "!", "@", "#", "$", "%", "&", "*"]
go.addEventListener("click", function (event) {
    event.preventDefault();
    for (var q = 0; q < number.value; q++) {
        newitem = Math.floor(Math.random() * 70);
        console.log("new item at " + newitem);
        if (newitem < 26 && lower.checked) {
            PW = PW + ingredients[newitem];
            console.log("q is at " + q);
        }
        else if (25 < newitem && newitem < 52 && upper.checked) {
            PW = PW + ingredients[newitem];
            console.log("q is at " + q);
        }
        else if (51 < newitem && newitem < 62 && numbers.checked) {
            PW = PW + ingredients[newitem];
            console.log("q is at " + q);
        }
        else if (62 < newitem && specChar.checked) {
            PW = PW + ingredients[newitem];
            console.log("q is at " + q);
        }
        else {
            q--;
            console.log("oops");
            console.log("q is at " + q);
        }
    }
    alert("Your new password is " + PW);
    PW = "";

})
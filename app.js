var ele = document.body.querySelector(".looper");

var condition = true;
var user_damage = 0;
var dragon_damage = 0;


while(condition) {
    var question = Number(prompt("input a number of hits you are going to attempt with up to 5"));
    var adddragondamage = Math.floor(Math.random() * question) + 1;
    if (adddragondamage > 5) {

        dragon_damage = dragon_damage + 1;
        ele.innerHTML = dragon_damage


    } else {
        dragon_damage = dragon_damage + adddragondamage

    }
    var adduserdamage = Math.floor(Math.random() * 2) + 1;
        user_damage = user_damage + adduserdamage;


        
    if (dragon_damage >= 10) {
        condition = false;
        ele.innerHTML = "User Wins! Dragon Loses!"

    }
    if (user_damage >= 5) {
        condition = false;
        ele.innerHTML = "User loses! Dragon Wins!"

    }
}
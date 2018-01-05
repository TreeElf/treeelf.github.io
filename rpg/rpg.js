var character = 
  {
    "name": "null",
    "attack": 0,
    "defense": 0,
    "stamina": 0,
    "mana": 0,
    "hp": 0,
    "xp": 0,
    "level": 1
  }

function startGame() {
	var parent = document.getElementById("startbutton");
  	var child = document.getElementById('b');
  	parent.removeChild(child);

}

function createCharacter() {	
  	character.name = prompt("Please enter your name", "John");
  	character.attack = document.getElementById('attack').value;
  	character.defense = document.getElementById('defense').value;
  	character.stamina = document.getElementById('stamina').value;
  	character.mana = document.getElementById('mana').value;
  	character.hp = document.getElementById('hp').value;
	alert(character.name + " " + character.attack + " " + character.defense + " " + character.stamina + " " + character.mana + " " + character.hp);
}
var skillpoints = 50;
var a = document.getElementById("attack");
var av = document.getElementById("attackv");
av.innerHTML = "Attack - " + a.value; 
attack.oninput = function() {
    if(skillpoints>av.value)
    av.innerHTML = "Attack - " + this.value;
}
var b = document.getElementById("defense");
var bv = document.getElementById("defensev");
bv.innerHTML = "Defense - " + b.value; 
defense.oninput = function() {
    bv.innerHTML = "Defense - " + this.value;
}
var c = document.getElementById("stamina");
var cv = document.getElementById("staminav");
cv.innerHTML = "Stamina - " + c.value; 
stamina.oninput = function() {
    cv.innerHTML = "Stamina - " + this.value;
}
var d = document.getElementById("mana");
var dv = document.getElementById("manav");
dv.innerHTML = "Mana - " + d.value; 
mana.oninput = function() {
    dv.innerHTML = "Mana - " + this.value;
}
var e = document.getElementById("hp");
var ev = document.getElementById("hpv");
ev.innerHTML = "HP - " + e.value; 
hp.oninput = function() {
    ev.innerHTML = "HP - " + this.value;
}
var txt="some text 2";
var numb = txt.match(/\d/g);
alert(numb);
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
	var elem = document.getElementById("charactercreation");
	elem.remove();
	alert(character.name + " " + character.attack + " " + character.defense + " " + character.stamina + " " + character.mana + " " + character.hp);
}
var sp = 10;
skillpoints.innerHTML = "Skill Points Left: "  + sp;
var a = document.getElementById("attack");
var av = document.getElementById("attackv");
av.innerHTML = "Attack - " + a.value; 
attack.oninput = function() {
	var old = av.innerHTML.match(/\d+/g).map(Number);
	if((sp-(this.value-old))>=0) {
		sp+=old-this.value
		av.innerHTML = "Attack - " + this.value;
	} else {
		var l = sp+Number(old)
		a.value = l;
		av.innerHTML = "Attack - " + a.value;
		sp=0
	}
    skillpoints.innerHTML = "Skill Points Left: "  + sp;
}
var b = document.getElementById("defense");
var bv = document.getElementById("defensev");
bv.innerHTML = "Defense - " + b.value; 
defense.oninput = function() {
    var old = bv.innerHTML.match(/\d+/g).map(Number);
	if((sp-(this.value-old))>=0) {
		sp+=old-this.value
		bv.innerHTML = "Defense - " + this.value;
	} else {
		var l = sp+Number(old)
		b.value = l;
		bv.innerHTML = "Defense - " + b.value;
		sp=0
	}
    skillpoints.innerHTML = "Skill Points Left: "  + sp;
}
var c = document.getElementById("stamina");
var cv = document.getElementById("staminav");
cv.innerHTML = "Stamina - " + c.value; 
stamina.oninput = function() {
	var old = cv.innerHTML.match(/\d+/g).map(Number);
	if((sp-(this.value-old))>=0) {
		sp+=old-this.value
		cv.innerHTML = "Stamina - " + this.value;
	} else {
		var l = sp+Number(old)
		c.value = l;
		cv.innerHTML = "Stamina - " + c.value;
		sp=0
	}
    skillpoints.innerHTML = "Skill Points Left: "  + sp;
}
var d = document.getElementById("mana");
var dv = document.getElementById("manav");
dv.innerHTML = "Mana - " + d.value; 
mana.oninput = function() {
    var old = dv.innerHTML.match(/\d+/g).map(Number);
	if((sp-(this.value-old))>=0) {
		sp+=old-this.value
		dv.innerHTML = "Mana - " + this.value;
	} else {
		var l = sp+Number(old)
		d.value = l;
		dv.innerHTML = "Mana - " + d.value;
		sp=0
	}
    skillpoints.innerHTML = "Skill Points Left: "  + sp;
    
}
var e = document.getElementById("hp");
var ev = document.getElementById("hpv");
ev.innerHTML = "HP - " + e.value; 
hp.oninput = function() {
    var old = ev.innerHTML.match(/\d+/g).map(Number);
	if((sp-(this.value-old))>=0) {
		sp+=old-this.value
		ev.innerHTML = "HP - " + this.value;
	} else {
		var l = sp+Number(old)
		e.value = l;
		ev.innerHTML = "HP - " + e.value;
		sp=0
	}
    skillpoints.innerHTML = "Skill Points Left: "  + sp;

}
//var txt="some text 20";
//var numb = txt.match(/\d+/g).map(Number);
//alert(numb);
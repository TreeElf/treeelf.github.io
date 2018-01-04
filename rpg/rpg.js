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
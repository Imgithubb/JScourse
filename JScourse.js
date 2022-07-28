// const Surname = 'Donichenko'
// const Name = 'Andrii'
// let myAge = 23
// const tr = true
// myAge = 23

// // const a = 10
// // const b = 5
// // a - b
// // a + b
// // a / b
// // a * b
// // let c = 5
// // c += b
// // let curentYear = 2022
// // const isx = a - b < c
// // console.log(isx)
// function NameSurname(Name, Surname) {
// 	console.log(Name)
// }

// let = NameSurname(Andrii, Donichenko)
// console.log(Name)

// let buttons = [b1, b2]
// let kategorii = ['A1', 'A']

// for (let btn of buttons) {
// 	btn.onclick = function OnClick(index) {
// 		btn.classList.toggle('b')
// 		btn = kategorii
// 		for (let kat of kategorii)
// 			document.getElementById('inp1').value = b1.value
// 		console.log(i);
// 	}

// }
// function Myf(name) {
// 	console.log(typeof name);
// }

// Myf(5)

// function playerRankUp(points) {
// 	if (points >= 100) {
// 		return console.log('Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.')
// 	}
// 	else {
// 		return console.log('you are failed')
// 	}

// }

// playerRankUp(99)

// function maps(x) {
// 	for (var maps = [], i = 0; i < 40; ++i) a[i] = i;
// 	let y = maps.map(num => num * 2)
// }

// function sameCase(a, b) {
// 	if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) { return -1 }
// 	else if (a.toLowerCase() != a.toUpperCase() || b.toLowerCase() != b.toUpperCase()) {
// 		if (a === a.toLowerCase() && b === b.toLowerCase()) { return 1 }
// 		else if (a === a.toUpperCase() && b === b.toUpperCase()) { return 1 }
// 		else if (a === a.toUpperCase() && b === b.toLowerCase()) { return 0 }
// 		else if (a === a.toLowerCase() && b === b.toUpperCase()) { return 0 }
// 	}
// 	else { return -1 }
// }

// console.log(sameCase('a', '6'))

// function warnTheSheep(queue) {
// 	for (let num of queue.reverse()) {
// 	  if (num[i] === 'sheep'&& num[(i+1)]==='wolf'){
// 	    return 'Oi! Sheep number ' + String(queue.indexOf(num))+ '! You are about to be eaten by a wolf!'
// 	  } 
// 	  else if (num[0]==='wolf') {return "Pls go away and stop eating my sheep"} 
// 	}
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));

// function warnTheSheep(queue) {
// 	for (let num of queue.reverse()) {
// 	  if (num[i] === 'sheep'&& num[(i+1)]==='wolf'){
// 	    return 'Oi! Sheep number ' + String(queue.indexOf(num))+ '! You are about to be eaten by a wolf!'
// 	  } 
// 	  else if (num[0]==='wolf') {return "Pls go away and stop eating my sheep"} 
// 	}
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));

function warnTheSheep(queue) {
	if (queue.indexOf('wolf') === queue.length) { return "Pls go away and stop eating my sheep" }
	else { return 'Oi! Sheep number ' + String((queue.length - queue.indexOf('wolf') - 1)) + '! You are about to be eaten by a wolf!' + 'Oi! Sheep number ' + String((queue.length - queue.indexOf('wolf') + 1)) + '! You are about to be eaten by a wolf!' }

}


console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"])); 
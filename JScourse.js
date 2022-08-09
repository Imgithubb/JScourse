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
// 	if (queue.reverse().indexOf('wolf') === 0) { return "Pls go away and stop eating my sheep" }
// 	else { return 'Oi! Sheep number ' + String(queue.indexOf('wolf')) + '! You are about to be eaten by a wolf!' }
// }
// console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));
// console.log(warnTheSheep(["sheep", "sheep", "wolf", "sheep", "sheep"]));
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf"]));



// function elevator(left, right, call) {
// 	return = (right - call) <= (left - call) ? 'right' : 'left'
// }
// console.log(elevator(2, 1, 0));

// 7 .
// function points(games) {
// 	let x = games.reduce((total, game) => {
// 		let x = Number(game.charAt(0))
// 		let y = Number(game.charAt(2))
// 		if (x > y) { game = 3 }
// 		else if (x === y) { game = 1 }
// 		else if (x < y) { game = 0 }
// 		return total + game
// 	}, 0)
// 	return x
// }
// console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']));

// 8
// function pillars(numPill, dist, width) {
// 	if (numPill >= 2 && (10 <= dist && dist <= 30) && (10 <= width && width <= 50)) { return (numPill - 2) * width + (numPill - 1) * dist * 100 }
// 	else { return 0 }
// }
// console.log(pillars(1, 10, 10));


// 9
// function getCount(str) {
// 	return str.split(/[AaEeIiOoUu]/).length - 1
// }
// console.log(getCount('abracadabra'));

// function disemvowel(str) {
// 	return str.replace(/[AaEeIiOoUu]/gi, '');
// }
// console.log(disemvowel("What are you, a communist?"));

// function squareDigits(num) {
// 	let nNum = String(num).split('')
// 	let nArr = new Array
// 	for (let nSNum of nNum) {
// 		nArr.push(String(Number(nSNum) ** 2))
// 	}
// 	return Number(nArr.join(''))
// }


// function squareDigits(num) {
// 	return Number(String(num).split('').map(i => i * i).join(''))
// }
// console.log(squareDigits(333));

// 10
// function highAndLow(numbers) {
// 	return String(Math.max(...(numbers.split(' ')).map(Number))) + ' ' + String(Math.min(...(numbers.split(' ')).map(Number)))
// }

// console.log(highAndLow("1 2 3 4 5"));

// 11
// function descendingOrder(n) {
// 	const nN = String(n).split('').sort((a, b) => b - a)
// 	return Number(nN.map(Number).join(''))
// }
// console.log(descendingOrder(42145));

// 12
// function accum(s) {
// 	const spl = s.split('')
// 	const mp = spl.map((p, index) => p.toUpperCase() + p.toLowerCase()
// 		.repeat(index))

// 	return mp.join('-')
// }
// console.log(accum("ZpglnRxqenU"));

// function accum(s) {
// 	return s.split('').map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join('-');
// }
// console.log(accum("ZpglnRxqenU"))

//

// function getMiddle(s) {
// 	return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// console.log(getMiddle('ABCDEFGIJKLMNOPQRST'));
// 13
// const isSquare = function (n) {
// 	if (Number.isInteger(Math.sqrt(n))) {
// 		let result = Math.sqrt(n) * Math.sqrt(n) === n ? true : false
// 		return result
// 	}
// 	else { return false }
// }
// console.log(isSquare(46));

// 14
// function filter_list(l) {
// 	console.log(Number.isNaN('a'));
// 	return l.filter(num => Number.isInteger(num) === true)
// }
// console.log(filter_list([1, 2, 'a', 'b']))


// function filter_list(l) {
// 	console.log(Number.isNaN('a'));
// 	return l.filter(num => typeof num === 'number')
// }
// console.log(filter_list([1, 2, 'a', 'b']))
// 15
// String.prototype.toJadenCase = function (quote) {
// 	let i = 0
// 	return quote.split(' ')
// 		.map(word => word[i].toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));
// 16
// function isIsogram(str) {
// 	return new Set(str.toUpperCase()).size == str.length
// }
// console.log(isIsogram('marNg'));

// function isIsogram(str) {
// 	return !/(\w).*\1/i.test(str)
// }
// console.log(isIsogram('m'));
// 17
// function XO(str) {
// 	let nStr = str.split('')
// 	let numStr1 = nStr.filter(el => el === 'O' || el === 'o')
// 	let numStr2 = nStr.filter(el => el === 'X' || el === 'x')
// 	return numStr1.length === numStr2.length ? true : false
// }
// console.log(XO("ooxXm"));

// function XO(str) {
// 	let x = str.match(/x/gi);
// 	let o = str.match(/o/gi);
// 	return x.length === o.length
//       }
//       console.log(XO("ooxXm"))

// 18
// function findShort(s){
//   let pr = s.split(' ').reduce((prev, item) => {
// if (prev.length>item.length){
//       return item
// }
// else {return prev}

//   })
//   return pr.length
// }
// console.log((findShort("turns out random test cases are easier than writing out basic ones")))

// function findShort(s){
//       return s.split(' ').reduce((prev, item) => prev.length>item.length?item:prev).length
//     }
//     console.log((findShort("turns out random test cases are easier than writing out basic ones")))

// const findShort = (s) => s
//   .split(' ')
//   .sort((a, b) => a.length - b.length)
//   .shift()
//   .length;
//   console.log((findShort("turns out random test cases are easier than writing out basic ones")))

// 19

// function DNAStrand(dna){
//         let dnaArr = dna.split('')
//         let newDna = dnaArr.map(gen => {
//          if (gen === 'A') {return 'T'}
//          else if (gen === 'T') {return 'A'}
//           else if (gen === 'G') {return 'C'}
//           else if (gen === 'C') {return 'G'}
//         })
//         return newDna.join('')
//        }
//        console.log(DNAStrand("ACGT"));

//        function DNAStrand(dna) {
//         return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
//       }
//       console.log(DNAStrand("ACGT"));

// function DNAStrand(dna) {
//         return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
//       }
//       console.log(DNAStrand("ACGT"));

// 20
// function maskify(cc) {
//         let ccArr = cc.split('')
//         let rCcArr = ccArr.reverse()
//         let nRCcArr = rCcArr.map((num, index) => { 
//                 if (index<=3){return num}
//                  else {return '#'}
//         })
//          ccArr = cc.split('')
//         if (ccArr.length<=4){return ccArr.join('')}
//         else {return  nRCcArr.reverse().join('')}
//       }
//       console.log((maskify('sf')));
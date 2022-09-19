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
// function maskify(cc) {
// 	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
//       }
//       console.log(maskify("4556364607935616"));

// function slicce(str) {
// 	let x2 = str.slice(0,-8)
// 	return x2
// }

// console.log(slicce('123456789'))

// function maskify(cc) {
// 	return cc.replace(/.(?=.{4})/g, "#");
//       }
//       console.log(maskify('123456789'))

// 21
// function sumTwoSmallestNumbers(numbers) {
// 	let newNumbers =numbers.sort((a,b)=>a-b)
// 	return newNumbers.slice(0,2).reduce((a,b) => a+b)
// }

// console.log(sumTwoSmallestNumbers([2, 3, 4, 8, 9]));

// 22
// const getSum = (a, b) => {
//         let min = Math.min(a, b),
//             max = Math.max(a, b);
//         return (max - min + 1) * (min + max) / 2;
//       }
//       console.log(getSum(0,-5));

// 23
// function longest(s1,s2) {
// let s1A = s1.split('')
// let s1AS = s1A.sort()
// let s2A = s2.split('')
// let s2AS = s2A.sort()
// let set = new Set()
// let ns1AS = s1AS.map(let1 => set.add(let1))
// let ns2AS = s2AS.map(let2 => set.add(let2))
// let newArr =[]
// for(let let3 of set){
// newArr.push(let3)
// }
// return newArr.sort().join('')

// }
// console.log(longest('xyaabbbccccdefw' , 'xxxxyyyyabklmopq' ));

// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
// console.log(longest('xyaabbbccccdefw' , 'xxxxyyyyabklmopq' ));

// function longest(s1, s2) {
// 	return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
//       }
//       console.log(longest('xyaabbbccccdefw' , 'xxxxyyyyabklmopq' ));

// 24
// function friend(friends){
//         return friends.filter(bro => bro.length===4)
//       }
//       console.log(friend(["Love", "Your", "Face", "1"]));

// 25
// function nbYear(p0, percent, aug, p) {
//         let i = 0
//       do  { p0+= Math.floor(p0*(percent *0.01) + aug)
//                 i=Math.round(i+1)
// }
//       while(p0<=p)
//       return i
//     }
//     console.log(nbYear(1000, 2, 50, 1200));

//26
// function openOrSenior(data){
// 	let x =[]
// 	for (let personalData of data){
// 		if (personalData[0]>=55&& personalData[1]>7) { x.push( "Senior")}
// 		else {x.push('Open')}
// 		}
// 			return x
// 		}
// console.log(openOrSenior([[18,20],[42,2],[61,12]]));

// 27
// function findNextSquare(sq) {
// 	let x =  Math.sqrt(sq)
// 	if (sq === x*x&&Number.isInteger(x)){return (x+1)*(x+1)}
// 	else {return -1}
// }
// console.log(findNextSquare(11));

// function findNextSquare(sq) {
// 	return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
//       }
//       console.log(findNextSquare(11));

// function findNextSquare(sq) {
// 	let r = Math.sqrt(sq)
// 	return r % 1 ? -1 : ++r * r
//     }
//     console.log(findNextSquare(9));

// 28
// function rowSumOddNumbers(n) {
// 	let x = n - 1
// 	for (let i = 0; i <= x; i++) {
// 		return x += x - i
// 	}
// }
// console.log(rowSumOddNumbers(5));

// function rowSumOddNumbers(n) {
//         let x =0
//         let z = 1
//         let y = []
//                 for(let i = 0; i<=n; i++){
//                         x +=  i
//                  }
//         y.push(z)
//                  for (let i= 0; i <x-1; i++){
//                         y.push(z+=2)
//                   }
//         let u =  y.slice(-n)
//         return u.reduce((prev,cont)=> prev +cont)
// }
// console.log(rowSumOddNumbers(2));

// function rowSumOddNumbers(n) {
//         const out = Array.from( {length: n*(n+1)/2}, (_,i) => i * 2 + 1 );
//         return out.slice( out.length - n ).reduce((a, b) => a + b, 0)
//       }
//       console.log(rowSumOddNumbers(2))

// 29
// function printerError(s) {
// 	let len = s.length
// 		let x = s.match(/[n-z]/gi)
// 		if (x === null){ return `0/${len}`}
// 		else {return x.length + '/' + len}
// 	}
// console.log(printerError(''));

// function printerError(s) {
// 	let len = s.length
// 		let x = s.match(/[n-z]/gi)||[]
// 		return x.length + '/' + len
// 	}
// console.log(printerError(''));

// const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
// console.log(printerError(''));
// 30
// function validatePIN (pin) {
// 	if (pin == pin.match(/^\d{4}$/gi) ||pin == pin.match(/^\d{6}$/gi)){return true}
// 	else{return false}
//       }
//       console.log(validatePIN('1111'));

//       function validatePIN (pin) {
// 	return /^(\d{4}|\d{6})$/gi.test(pin)
//       }
//       console.log(validatePIN('1111111'))

// 31
// function addBinary(a, b) {
//      let sum = a + b
//      return sum.toString(2)
// }
// console.log(addBinary(1, 1));

// 32
// function isTriangle(a, b, c) {
//      if (a < 0 || b < 0 || c < 0 || a + b <= c || a + c <= b || b + c <= a) { return false; }
//      else { return true }
// }
// console.log(isTriangle(2,2,6));

// 33
// const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)
// console.log(binaryArrayToNumber([0, 1, 1, 0]));

// function binaryArrayToNumber(arr) {
//      return arr.reduce((a, b) => a << 1 | b);
// }
// console.log(binaryArrayToNumber([0, 1, 1, 0]));

// 34
// function brightest(a){
//      const f=s=>Math.max(...s.slice(1)
//      .match(/../g)
//      .map(e=>parseInt(e,16)))
//      return a.sort((a,b)=>f(b)-f(a))[0]
//    }
// console.log(brightest(["#00FF00", "#FFFF00"]))

// Методи Number
// let sum = 0.1 +0.3
// sum == 0.4?console.log(true):console.log(false)
// let x = isNaN('12jj')
// console.log(x);
// console.log(sum);

// 35
// function racePodium(blocks) {
// 	if(blocks == 7) return [2, 4, 1]
// 	let second = Math.ceil(blocks / 3)
// 	return [second, second + 1, blocks - second * 2 - 1]
//       }
// console.log(racePodium(11));

// 36
// function likeOrDislike(buttons) {
// 	if (buttons.length == 0) { return 'Nothing' }
// 	return buttons.reduce((prev, cont) => {
// 		if (!(prev === cont)) { return cont }
// 		else if (prev === cont) { return 'Nothing' }
// 	})}
// console.log(likeOrDislike([1,2,3,3,100,101,201]));

// 37
// function solution(number) {
// 	if (number <= 0) { return 0 }
// 	else {
// 		let set = new Set()
// 		for (let i = 0; i * 3 < number; i++) { set.add(i * 3) }
// 		for (let i = 0; i * 5 < number; i++) { set.add(i * 5) }
// 		let sum = [...set]
// 		return sum.reduce((prev, cont) => prev + cont)
// 	}
// }
// console.log(solution(3));

// function solution(number) {
// 	var sum = 0;
// 	for (var i = 1; i < number; i++) {
// 		if (i % 3 === 0 || i % 5 === 0) { sum += i }
// 	}
// 	return sum;
// }
// console.log(solution(2));

// function solution(number){
// 	var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
// 	return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
//    }
// console.log(solution(15))

//    function solution(number){
// 	for(acc=0; --number > 2;){
// 	  acc = !(number%3) || !(number%5) ? acc + number : acc;
// 	}
// 	return acc;
//    }
//    console.log(solution(15))

// function solution(number){
// // 	let y = ['a','b','c']
// // console.log([...new Array(3)])
// // for (let z of y.keys()){
// // 	console.log(z);
// // }

// 	return number < 0
// 	  ? 0
// 	  : [...Array(number).keys()]
// 	  .filter(n => n % 3 === 0 || n % 5 === 0 )
// 	  .reduce((n, i) => n + i, 0);
// 	}
// 	console.log(solution(15))

// 38
// let spinWords = (string) => string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') :word).join(' ')
// console.log(spinWords("This is another test"));

// 39
// function findOdd(A) {
// 	let z = A.sort()
// 	for (let i = 0; i < z.length; i++) {
// 		if (z[i] === z[(i + 1)]) { i++ }
// 		else { return z[i] }
// 	}
// }
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));

// let num1 = 3
// let num2 = 1
// let num3 = '01'
// console.log(parseInt(num3,2))
// console.log(num1.toString(2));
// console.log(num2.toString(2));
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
// console.log(findOdd([3, 1, 2, 2, 1]));

// function findOdd(A) {
// 	var obj = {};
// 	A.forEach(function(el){
// 	  obj[el] ? obj[el]++ : obj[el] = 1;
// 	});
// 	for(prop in obj) {
// 	  if(obj[prop] % 2 !== 0) return Number(prop);
// 	}
//    }
//    console.log(findOdd([3, 1, 2, 2, 1]));

// function findOdd(arr) {
// 	return arr.find(function (item) {
// 		// let z =  arr.filter(function (el) {
// 		// 	return el == item
// 		// })
// 		return arr.filter(function (el) {
// 			return el == item
// 		})
// 			.length % 2
// 	})
// }
// console.log(findOdd([1, 2, 1]));

// 40
// function digitalRoot(n) {
//         for (; String(n).length >1;){
//                 n = String(n).split('').reduce((prev,cont)=> Number(prev) + Number(cont))
//         }
//         return n
// }
// console.log(digitalRoot(493193));

// 41
// let x = y => {if (y.length ===1 ){return y} else { return ' ' + y.join(',| ') +','}}
// let z = u => {if (u.length ===1 ){return u} else { return ' '+ u.join(', ')+','}}
// function arrayDiff(a, b) {
// 	let aN = z(a),
// 		bN = x(b),
// 		RegEx = new RegExp(`${bN}`, 'g'),
// 		result = aN.replace(RegEx, '',).split(',').map(el => {if (el === ''){return'' } else {return Number(el)}}).filter(elem=>!(elem===''))
// 	return result
// }
// console.log(arrayDiff([5],[5]));

// function arrayDiff(a, b) {
// 	let z = []
// 	let u = a.filter(el => { if (!(b.includes(el))) { return z.push(el) } })
// 	return z
// }
// console.log(arrayDiff([-20, 4, 15, 4, -13], []));

// let arrayDiff = (a, b) => a.map(el=>!(b.includes(el))?el:'').filter(elem=>!(elem===''))
// console.log(arrayDiff([-19,0,0,0,8],[-19]));

// let arrayDiff = (a, b) => a.filter(el => !(b.includes(el)))
// console.log(arrayDiff([-20, 4, 15, 4, -13], []));

// 43
// function likes(names) {
// 	switch (names.length) {
// 		case 0: return 'no one likes this'
// 		case 1: return `${names[0]} likes this`
// 		case 2: return `${names[0]} and ${names[1]} like this`
// 		case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
// 		default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
// 	}
// }
// console.log(likes([]));
// console.log(likes(['Alex',]));
// console.log(likes(['Alex', 'Jacob',]));
// console.log(likes(['Alex', 'Jacob', 'Mark',]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max", ' John']));

// function likes(names) {
// 	if (names.length === 0) { return 'no one likes this' }
// 	else if (names.length === 1) { return `${names[0]} likes this` }
// 	else if (names.length === 2) { return `${names[0]} and ${names[1]} like this` }
// 	else if (names.length === 3) { return `${names[0]}, ${names[1]} and ${names[2]} like this` }
// 	else if (names.length > 3) { return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` }
// }
// console.log(likes([]));
// console.log(likes(['Alex',]));
// console.log(likes(['Alex', 'Jacob',]));
// console.log(likes(['Alex', 'Jacob', 'Mark',]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function likes(names) {
// 	return {
// 		0: 'no one likes this',
// 		1: `${names[0]} likes this`,
// 		2: `${names[0]} and ${names[1]} like this`,
// 		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
// 		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
// 	}[Math.min(4, names.length)]
// }
// console.log(likes([]));
// console.log(likes(['Alex',]));
// console.log(likes(['Alex', 'Jacob',]));
// console.log(likes(['Alex', 'Jacob', 'Mark',]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// function likes(names) {
// 	var templates = [
// 		'no one likes this',
// 		'{name} likes this',
// 		'{name} and {name} like this',
// 		'{name}, {name} and {name} like this',
// 		'{name}, {name} and {n} others like this'
// 	];
// 	var idx = Math.min(names.length, 4);

// 	return templates[idx].replace(/{name}|{n}|and/g, function (val) {
// 		return val === '{name}' ? names.shift() : names.length;
// 	});
// }
// console.log(likes(['Alex',]));
// console.log(likes(['Alex', 'Jacob',]));
// console.log(likes(['Alex', 'Jacob', 'Mark',]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// 44
// const countBits =  (n) =>  n.toString(2).split('').map(el=>Number(el)).reduce((prev,cont)=> prev +cont)
// console.log(countBits(7));

// countBits = n => n.toString(2).split('0').join('').length;
// console.log(countBits(7));

// function countBits(n) {
// 	console.log(n.toString(2));
// 	for (c = 0; n; n >>= 1)c += n & 1
// 	return c;
// }
// console.log(countBits(8));

// let countBits = function (n) {
// 	console.log(n.toString(2));
// 	let count = 0;
// 	while (n > 0) {
// 		if (n % 2 === 1) {
// 			count++;
// 		}
// 		n = Math.floor(n / 2);
// 	}
// 	return count;
// };
// console.log(countBits(9));

// let countBits = function (n) {
// 	console.log(n.toString(2));
// 	a = n.toString(2).match(/1/g);
// 	return a == null ? 0 : a.length;
// };
// console.log(countBits(8));

// 45
// function createPhoneNumber(numbers) {
// 	let y = numbers.join(''),
// 		a1 = y.slice(0, 3),
// 		a2 = y.slice(3, 6),
// 		a3 = y.slice(6, 10)
// 	return `(${a1}) ${a2}-${a3}`
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function createPhoneNumber(numbers) {
// 	return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
// }
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())
// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function createPhoneNumber(numbers){
// 	numbers.unshift("(");
// 	numbers.splice(4, 0, ")", " ");
// 	numbers.splice(9, 0, "-");
// 	return numbers.join("");
//    }
//    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// function createPhoneNumber(n) {
// 	return "(012) 345-6789".replace(/\d/g, d => n[d])
//    }
//    console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// if (!String.prototype.format) {
// 	String.prototype.format = function () {
// 		var args = arguments;
// 		return this.replace(/{(\d+)}/g, function (match, number) {
// 			return typeof args[number] != 'undefined'
// 				? args[number]
// 				: match
// 				;
// 		});
// 	};
// }

// function createPhoneNumber(numbers) {
// 	var phoneNumber = "({0}{1}{2}) {3}{4}{5}-{6}{7}{8}{9}"
// 		.format(numbers[0], numbers[1], numbers[2],
// 			numbers[3], numbers[4], numbers[5],
// 			numbers[6], numbers[7], numbers[8],
// 			numbers[9]);

// 	return phoneNumber;
// }

// console.log(createPhoneNumber([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

// 46
// function findOutlier(integers) {
// 	let z = integers.filter(int => int % 2)
// 	return z.length > 1 ? integers.filter(int2 => !(int2 % 2)).shift() : z.shift()
// }
// console.log(findOutlier([1, 2, 3]));

// function findOutlier(int) {
// 	let even = int.filter(a => a % 2 == 0);
// 	let odd = int.filter(a => a % 2 !== 0);
// 	return even.length == 1 ? even[0] : odd[0];
// }
// console.log(findOutlier([1, 2, 3]));

// function findOutlier(integers) {
// 	return integers.filter(even).length >= 2 ? integers.find(odd) : integers.find(even);
// }
// function even(num) {
// 	return (num % 2 == 0);
// }
// function odd(num) {
// 	return !even(num)
// }
// console.log(findOutlier([1, 1, 1, 1, 2]));

// function findOutlier(integers) {
// 	let res;
// 	let odd = integers.filter(function (e) {
// 		if (e % 2 != 0) {
// 			res = e;
// 		};
// 		return e % 2 == 0;
// 	});
// 	return odd.length > 1 ? res : odd.pop();
// }
// console.log(findOutlier([2,1,2,4,4]));

// function findOutlier(integers) {
// 	console.log(1%2);
// 	var len = integers.length;
// 	var first = Math.abs(integers[0]) % 2,
// 		second = Math.abs(integers[1]) % 2,
// 		third = Math.abs(integers[2]) % 2,
// 		base = (first + second + third) >= 2 ? 1 : 0;
// 	for (var i = 0; i < len; i++) {
// 		let y = Math.abs(integers[i])
// 		if (( y % 2) != base) {
// 			return integers[i];
// 		}
// 	}
// };
// console.log(findOutlier([1,1,4,5,5]));

// 47
// function duplicateCount(text) {
// 	let y = text.toLowerCase().split('')
// 	let z = y.sort()
// 	let u = new Set()
// 	for (i = 0; i < z.length; i++) {
// 		if (!(z[i] === z[i + 1])) { continue }
// 		else { u.add(z[i]) }
// 	}
// 	return u.size
// }
// console.log(duplicateCount("Indivisibility"));

// function duplicateCount(text){
// 	let y = text.toLowerCase().split('').sort().join(''),
// 		k = (y.match(/([^])\1+/g) || [])
// 		return k.length;
//    }
//    console.log(duplicateCount("aadfgakiiu"));

// function duplicateCount(text){
// 	let y = text.toLowerCase().split('')
// 	return y.filter(function(val, i, arr){
// 	  return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
// 	}).length;
//    }
//    console.log(duplicateCount("aadfgakiiu"));

// let x = 'herllo'
// let y = new RegExp('([^her])', 'g')
// let z = x.match(y, )
// // return z
// let m = 'sdf\\dsd\fs\zf'
// console.log(m);

// 48
// function duplicateEncode(word) {
// 	let z = word.toLowerCase().split('').sort()
// 	u = new Set()
// 	for (i = 0; i < z.length; i++) {
// 		if (!(z[i] === z[i + 1])) { continue }
// 		else { u.add(z[i]) }
// 	}
// 	let y = [...u]
// 	return word.toLowerCase().split('').map(char => y.includes(char) ? ')' : '(').join('')
// }
// console.log(duplicateEncode("IlIFIIIIIk"));

// 49
// function isValidWalk(walk) {
// 	let nAm = walk.filter(direction => direction === 'n'),
// 		sAm = walk.filter(direction => direction === 's'),
// 		wAm = walk.filter(direction => direction === 'w'),
// 		eAm = walk.filter(direction => direction === 'e')

// 	return walk.length === 10 && nAm.length === sAm.length && wAm.length === eAm.length ? true : false
// }
// console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

// function isValidWalk(walk) {
// 	let res1 = walk.map(direction => {
// 		switch (direction) {
// 			case 'n': return 1
// 			case 's': return -1
// 			case 'w': return 2
// 			case 'e': return -2
// 		}
// 	})
// 	let res2 = res1.reduce((a, b) => a + b)
// 	return walk.length === 10 && res2 === 0 ? true : false
// }
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

// 50
// function persistence(num) {
// 	for (i = 0; num.toString().length > 1; i++) {
// 		num = num.toString().split('').reduce((a, b) => a * b)
// 	}
// 	return i
// }
// console.log(persistence(9));

// const persistence = num => {
// 	return `${num}`.length > 1
// 	  ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
// 	  : 0;
//    }
//    console.log(persistence());

// 51
// function sdf(text){
// 	let y = text.split('').map((char,index)=> `${char}: ${index+1},`)
// 		do { console.log(y.shift())}
// 		while (y.length>0)
// 	}
// 		console.log(sdf('abcdefghijklmnopqrstuvwxyz'));

// function alphabetPosition(text) {
// 	let obj = {
// 		a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
// 	}
// 	return text.toLowerCase().replace(/[^a-z]*/g, '').split('').map(char => obj[char]).join(' ').toString()
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));


// function alphabetPosition(text) {
// 	return text
// 	  .toUpperCase()
// 	  .match(/[a-z]/gi)
// 	  .map(c => c.charCodeAt() - 64)
// 	  .join(' ');
//    }
//    console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// function alphabetPosition(text) {
// 	let result = "";
// 	for (let i = 0; i < text.length; i++) {
// 		let code = text.toUpperCase().charCodeAt(i)
// 		if (code > 64 && code < 91) result += (code - 64) + " ";
// 	}
// 	return result.slice(0, result.length - 1);
// }
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// 52
// function order(words) {
// 	let newWords = []
// 	if (!words.match(/\d/)) { return words }
// 	words.split(' ').map((el) => newWords[el.match(/\d/)] = el)
// 	return newWords.join(' ').slice(1)
// }
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// function order(words) {
// 	let newWords = []
// 	if (!words.match(/\d/)) { return words }
// 	words.split(' ').map((el) => newWords[/\d/.exec(el)] = el)
// 	return newWords.join(' ').slice(1)
// }
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// function order(words) {
// 	var array = words.split(' ');
// 	var sortedArray = [];
// 	for (i = 0; i <= array.length; i++) {
// 		for (j = 0; j < array.length; j++) {
// 			if (array[j].indexOf(i) >= 0) {
// 				sortedArray.push(array[j]);
// 			}
// 		}
// 	}
// 	return sortedArray.join(' ');
// }
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// var reg = /\d/;

// function order(words){
//   return words.split(' ').sort(comparator).join(' ');
// }

// function comparator(word, nextWord) {
//   return word.match(reg) - nextWord.match(reg)
// }

// 53

// function tribonacci(signature, n) {
// 	if (n === 0) { return [] }
// 	if (n <= 3) { return signature.slice(0, n) }
// 	else {
// 		let oldSignature = signature
// 		let tribArr = []
// 		for (i = 0; i < n - 3; i++) {
// 			tribArr.push(signature.reduce((a, b) => a + b))
// 			let r = signature.slice(1, 3)
// 			r.push(signature.reduce((a, b) => a + b))
// 			signature = r
// 		}
// 		return oldSignature.concat(tribArr)
// 	}
// }
// console.log(tribonacci([1, 1, 1], 0));

// function tribonacci(signature, n) {
// 	let result = signature.slice(0, n);
// 	while (result.length < n) {
// 		result[result.length] = result.slice(-3).reduce((p, c) => p + c);
// 	}
// 	return result;
// }
// console.log(tribonacci([1, 1, 1], 2));

// function tribonacci(s,n){
// 	let arr = [];
// 	for(let i=0; i<n; i++) {
// 	  arr.push((i<3) ? s[i] : arr[i-1]+arr[i-2]+arr[i-3]);
// 	}
// 	return arr;
//    }
// console.log(tribonacci([1, 1, 1], 5));

// function tribonacci(arr,n){
// 	if (n < 3) return arr.slice(0, n);
// 	return [arr[0]].concat(tribonacci([arr[1], arr[2], arr[0] + arr[1] + arr[2]], n-1));
//    }
//    console.log(tribonacci([1, 1, 1], 5));

// 54
// let uniqueInOrder = function (iterable) {
// 	let arr = []
// 	typeof iterable === 'string' ? iterable.split``.map((el, i, arrr) => !(arrr[i] === arrr[i + 1]) ? arr.push(el) : {})
// 		: iterable.map((el, i, ar) => !(ar[i] === ar[i + 1]) ? arr.push(el) : {})
// 	return arr
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// var uniqueInOrder = function (iterable) {
// 	console.log(iterable[-1]);
// 	return [...iterable].filter((a, i) => a !== iterable[i - 1])
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// function uniqueInOrder(it) {
// 	let result = []
// 	let last
// 	for (let i = 0; i < it.length; i++) {
// 		if (it[i] !== last) {
// 			result.push(last = it[i])
// 		}
// 	}
// 	return result
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// let uniqueInOrder = function (iterable) {
// 	return [].filter.call(iterable, (a, i) => iterable[i - 1] !== a);
// }
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

// let x = [1,1,1]
// let y = [2,2,2]
// let z = [3,3,3]
// let r = x.concat.call(y,z, x.map(x1=> x1=4).call(x))
// console.log(r);
// console.log(x);

// 55
// function toCamelCase(str) {
// 	return str.split``.map((el, i, arr) => {
// 		if (str === '') { return '' }
// 		else if (i === 0) { return el }
// 		else if (el === '_' || el === '-') { return '' }
// 		else if (arr[i - 1] === '_' || arr[i - 1] === '-') { return el.toUpperCase() }
// 		else { return el.toLowerCase() }
// 	}
// 	).join``
// }
// console.log(toCamelCase('i-am-programmer'))

// function toCamelCase(str){
// 	return str.replace(/[-_]\w/g,(m => m.charAt(1).toUpperCase()))
// }
// console.log(toCamelCase('i-am-programmer'))

// function toCamelCase(str){
// 	return str.replace(/([-_])(.)/g, (_, c,b,offset,strd,asd) => b.toUpperCase());
//    }
//    console.log(toCamelCase('i-am-programmer'))

// function toCamelCase(str) {
// 	let y = str.split(/-|_/g)
// 	let m = y.map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1))
// 	return m.join``
// }
// console.log(toCamelCase('i-am-programmer'))

// function toCamelCase(str) {
// 	return str.split(/\-|_/).reduce(function (previous, current, index) { return camelize(previous, current, index); });
// }

// function camelize(previous, current, index) {
// 	return previous + current.capitalizeFirstLetter();
// }

// String.prototype.capitalizeFirstLetter = function () {
// 	return this.charAt(0).toUpperCase() + this.slice(1);
// }
// console.log(toCamelCase('i-am-programmer'))

// 56
// function digPow(n, p) {
// 	let num = String(n).split``.map((e, i) => e ** (p + i)).reduce((p, c) => p += c)
// 	return num % n === 0 ? num / n : -1
// }
// console.log(digPow(46288, 3));

// function digPow(n, p) {
// 	let x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
// 	return x % n ? -1 : x / n
//    }
//    console.log(digPow(46288, 3));


// function digPow(n, p) {
// 	let ans = ('' + n).split('')
// 		.map(function (d, i) { return Math.pow(+d, i + p) })
// 		.reduce(function (s, v) { return s + v }) / n
//                 let e = ans % 1
// 	return e ? -1 : ans
// }
// console.log(digPow(46289, 3));

// function digPow(n, p){
//         let ans = n.toString().split('')
//                    .map((v,i) => Math.pow(parseInt(v), i+p))
//                    .reduce((a,b) => a+b) / n;
//         return ans%1 == 0 ? ans : -1;
//       }
//       console.log(digPow(46289, 3));

// function digPow(n, p){
//         let str = n.toString()
//         let res = 0;
//         for(let i=0; i<str.length; i++){
//           res += Math.pow(parseInt(str[i]),p++);
//         }
//         return res%n === 0 ? res/n : -1;
//       }
// console.log(digPow(46289, 3));

// const digPow = (n, p, k) => (k = [...''+n].reduce((s, d) => s += d**p++, 0) / n, Number.isInteger(k) ? k : -1)
// console.log(digPow(46289, 3));

// 57
// function moveZeros(arr) {
// 	let x = []
// 	let y = arr.filter(el => !(el === 0))
// 	x.length = arr.length - y.length
// 	return y.concat(x.fill(0))
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// let moveZeros = function (arr) {
// 	for(let i = arr.length - 1; i >= 0; i--) {
// 	  if(arr[i] === 0) {
// 	    arr.splice(i, 1);
// 	    arr.push(0);
// 	  }
// 	}
// 	return arr;
//    }
//    console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

//    let moveZeros = function (arr) {
// 	for(let i = 0; i <= arr.length; i++) {
// 	  if(arr[i] === 0) {
// 	    arr.splice(i, 1);
// 	    arr.push(0);
// 	  }
// 	}
// 	return arr;
//    }
//    console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// 58
// const pigIt = str => str.split` `.map(el => el.replace(/(\w)(\w*)/ig, (a, b, c) => c + b + 'ay')).join` `
// console.log(pigIt('This is my string'));

// function pigIt(str) {
// 	return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")
// }
// console.log(pigIt('This is my string'));

// function pigIt(str) {
// 	return str.replace(/\w+/g, (w) => {
// 		let y = w.slice(1)
// 		let z = w[0]
// 		return y + z + 'ay';
// 	});
// }
// console.log(pigIt('This is my string'))

// function pigIt(str) {
// 	return str.replace(/\b(\w)(\w*)\b/g, "$2$1ay");
// }
// console.log(pigIt('This is my string'))

// const pigIt = str => str.split` `.map(w =>  w.slice(1) + w.charAt(0) + 'ay').join` `
// console.log(pigIt('This is my string'))

// function pigIt(str){
// 	return str
// 	  .split(" ")
// 	  .map(word =>`${ word.substring(1)}${word.split('').shift()}${word.charCodeAt(0) > 63 ? 'ay' : '' }`)
// 	  .join(" ");
//     }
//     console.log(pigIt('O tempora o mores !'))

// 59
// function validParentheses(parens) {
// 	for (let i = 0; i < 5; i++)
// 		parens = parens.split``.map((el, ind, arr) => {
// 			if (el === '(' && arr[ind + 1] === ')') arr[ind + 1] = ''
// 			else if (el === '') arr[ind - 1] = ''
// 			else {return el}
// 		}).filter(elem => !(elem === '')).join``
// 	return parens.length === 0 ? true : false
// }
// console.log(validParentheses("))(("));

// function validParentheses(parens) {
// 	var n = 0;
// 	for (var i = 0; i < parens.length; i++) {
// 		if (parens[i] == '(') n++;
// 		if (parens[i] == ')') n--;
// 		if (n < 0) return false;
// 	}
// 	return n == 0;
// }
// console.log(validParentheses("(())("));

// function validParentheses(string) {
// 	var tokenizer = /[()]/g,
// 		count = 0,
// 		token;
// 	while (token = tokenizer.exec(string), token !== null) {
// 		if (token == "(") { count++; }
// 		else if (token == ")") {
// 			count--;
// 			if (count < 0) { return false; }
// 		}
// 	}
// 	return count == 0;
// }
// console.log(validParentheses("(())sdfs(df"));

// function execcc(str) {
// 	let reg = new RegExp('(1)2', 'g')
// 	console.log(reg.exec(str))
// 	console.log(reg.exec(str))
// 	console.log(reg.exec(str))
// 	console.log(reg.exec(str))
// 	return reg.exec(str)
// }
// console.log(execcc('123123123'));


// function validParentheses(parens) {
// 	var indent = 0;
// 	for (var i = 0; i < parens.length && indent >= 0; i++) {
// 		indent += (parens[i] == '(') ? 1 : -1;
// 	}
// 	return (indent == 0);
// }
// console.log(validParentheses("))(("))

// function validParentheses(parens) {
// 	var re = /\(\)/;
// 	while (re.test(parens)){
// 		parens = parens.replace(re, "")}
// 	return !parens;
// 	}
// console.log(validParentheses("))(("))

// function validParentheses(parens) {
// 	var stack = []
// 	for (var i = 0; i < parens.length; i++) {
// 		if (parens[i] === '(') {
// 			stack.push(parens[i]);
// 		}
// 		else if ('(' !== stack.pop()) {
// 			return false;
// 		}
// 	}
// 	return stack.length === 0;
// }
// console.log(validParentheses("(())"))

// function validParentheses(parens){
// 	while(parens.indexOf('()') != -1){
// 	  parens = parens.replace('()', '');
// 	}
// 	return !parens.length;
//    }
//    console.log(validParentheses("(())"))

// function validParentheses(v) {
// 	while (v.includes("()")) {
// 		v = v.replace("()", "")
// 	}
// 	return !v.length
// }
// console.log(validParentheses("(())("))

// function validParentheses(parens) {
// 	return [...parens].reduce((a, c) => (a + c).replace("()", '')) == "" ? true : false;
// }
// console.log(validParentheses("(())"))

// 60
// function humanReadable(seconds) {
// 	let h = (seconds - (seconds % 3600)) / 3600
// 	let m = ((seconds % 3600) - ((seconds % 3600) % 60)) / 60
// 	let s = ((seconds % 3600) % 60)
// 	let to0 = x => `${x}`.length === 1 ? '0' + x : x
// 	return `${to0(h)}:${to0(m)}:${to0(s)}`
// }
// console.log(humanReadable(86400));

// function humanReadable(seconds) {
// 	var pad = function (x) { return (x < 10) ? "0" + x : x; }
// 	return pad(Math.floor(seconds / (60 * 60))) + ":" +
// 		pad((Math.floor(seconds / 60 % 60))) + ":" +
// 		pad(seconds % 60)
// }
// console.log(humanReadable(45296))

// function humanReadable(seconds) {
// 	var hours = parseInt(seconds / 3600);
// 	var minutes = parseInt(seconds / 60) % 60;
// 	var seconds = seconds % 60;
// 	var pad = function (val) {
// 		return val < 10 ? "0" + val : val;
// 	}
// 	return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
// }
// console.log(humanReadable(45296))

// function humanReadable(seconds) {
// 	return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function (v) {
// 		v = Math.floor(v).toString();
// 		return v.length == 1 ? '0' + v : v;
// 	}).join(':');
// }
// console.log(humanReadable(45296))

// function humanReadable(seconds) {
// 	var HH, MM, SS;
// 	HH = "0" + Math.floor(seconds / 3600);
// 	seconds -= HH * 3600;
// 	MM = "0" + Math.floor(seconds / 60);
// 	seconds -= MM * 60;
// 	SS = "0" + seconds;
// 	return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
// }
// console.log(humanReadable(45296))

// p = n => `0${n}`.slice(-2), humanReadable = (s) => (m = s / 60 | 0, p(m / 60 | 0) + ':' + p(m % 60) + ':' + p(s % 60))
// console.log(humanReadable(30))

// let c = x => 	x/60|0
// let x =(4851/60).toString(2)
// let y = (0).toString(2)
// console.log(x|y);
// console.log(parseInt(`${x|y}`,2));
// console.log(c(4851));

// 61
// function anagrams(word, words) {
// 	let ws = words.filter(w => w.length === word.length)
// 	let x = word.split``.sort().join``
// 	let y = ws.map(wew => wew.split``.sort().join``)
// 	return y.map((wrd, i) => {
// 		if (wrd.includes(x)) {
// 			return ws[i]
// 		}
// 		else { return '' }
// 	}).filter(el => el !== '')
// }
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

//s = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


// 62
// function dirReduc(arr) {
// 	let reg = new RegExp('NORTH,SOUTH|SOUTH,NORTH|EAST,WEST|WEST,EAST', 'g')
// 	let arr1 = arr.join`,`
// 	while (reg.test(arr1)) {
// 		arr1 = arr1.replace(reg, '')
// 		.split`,`.filter(e=>e!=='').join`,`
// 	}
// 	return arr1.split`,`.filter(el => el !== '')
// }
// console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","WEST"]));

// function dirReduc(plan) {
// 	var opposite = {
// 		'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'
// 	};
// 	return plan.reduce(function (prev, curr) {
// 		if (prev[prev.length - 1] === opposite[curr])
// 			prev.pop();
// 		else
// 			prev.push(curr);
// 		return prev;
// 	}, []);
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

// function dirReduc(arr) {
// 	var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
// 	while (pattern.test(str)) str = str.replace(pattern, '');
// 	return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST","WEST"]));

// function dirReduc(arr) {
// 	var count = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] === "WEST" && arr[i + 1] === "EAST" ||
// 			arr[i] === "EAST" && arr[i + 1] === "WEST" ||
// 			arr[i] === "NORTH" && arr[i + 1] === "SOUTH" ||
// 			arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
// 			arr.splice(i, 2);
// 			count++;
// 			i--;
// 		}
// 	}
// 	return count === 0 ? arr : dirReduc(arr);
// }
//

// function isOppo(dir1, dir2) {
// 	if (dir1 + dir2 === 'SOUTHNORTH') return true;
// 	if (dir1 + dir2 === 'NORTHSOUTH') return true;
// 	if (dir1 + dir2 === 'EASTWEST') return true;
// 	if (dir1 + dir2 === 'WESTEAST') return true;
// 	return false;
// }

// function dirReduc(arr) {
// 	var len = arr.length
// 	for (var i = 0; i < len - 1; i++) {
// 		if (isOppo(arr[i], arr[i + 1])) {
// 			arr.splice(i, 2);
// 			return dirReduc(arr);
// 		}
// 	}
// 	return arr;
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "WEST"]));

// function dirReduc(arr){
// 	for (let i = 0; i < arr.length; i++) {
// 		switch (arr[i] + arr[i + 1]) {

// 			case "EASTWEST":
// 				arr.splice(i, 2);
// 				i = i - i - 1;  // ( i = -1 ) => reset the loop to scan the array from i=0
// 				break;

// 			case "WESTEAST":
// 				arr.splice(i, 2);
// 				i = i - i - 1;
// 				break;

// 			case "NORTHSOUTH":
// 				arr.splice(i, 2);
// 				i = i - i - 1;
// 				break;

// 			case "SOUTHNORTH":
// 				arr.splice(i, 2);
// 				i = i - i - 1;
// 				break;
// 		}
// 	}
// 	return arr
// }
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "WEST"]));

// 63
// function rgb(r, g, b) {
// 	let toRgb = num => {
// 		if (num > 255) return num = 'ff'
// 		else if (num <= 0) return num = '00'
// 		else if (num.toString(16).length === 1) return '0' + num.toString(16)
// 		else return num.toString(16)
// 	}
// 	return `${toRgb(r)}${toRgb(g)}${toRgb(b)}`.toUpperCase()
// }
// console.log(rgb(10, 0, 47));

// function rgb(r, g, b) {
// 	return toHex(r) + toHex(g) + toHex(b);
// }
// function toHex(d) {
// 	if (d < 0) { return "00"; }
// 	if (d > 255) { return "FF"; }
// 	return ("0" + (Number(d).toString(16))).slice(-2).toUpperCase()
// }
// console.log(rgb(10, 0, 47));

// function rgb(r, g, b) {
// 	return [r, g, b].map(function (x) {
// 		return ('0' + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
// 	}).join('').toUpperCase();
// }
// console.log(rgb(10, 0, 245));

// const rgb = (...arg) => arg
// 	.map(it => Math.max(Math.min(it, 255), 0)
// 		.toString(16)
// 		.padStart(2, '0')
// 		.toUpperCase()
// 	).join('');
// console.log(rgb(10, 0, 245));

// function rgb(r, g, b) {
// 	r = Math.max(0, Math.min(255, r));
// 	g = Math.max(0, Math.min(255, g));
// 	b = Math.max(0, Math.min(255, b));
// 	let r2 = r << 16
// 	let g2 = g << 8
// 	let color = r2 + g2 + b;

// 	return ('00000' + color.toString(16).toUpperCase()).slice(-6);
// }
// console.log(rgb(15, 16, 17));

// function decToHex(n) {

// function decToHex(n) {

// 	var mods = [];
// 	var num = n;
// 	var mod;
// 	const HEXHASH = {
// 		10: 'A',
// 		11: 'B',
// 		12: 'C',
// 		13: 'D',
// 		14: 'E',
// 		15: 'F'
// 	};

// 	while (num > 0) {
// 		mod = num % 16;
// 		mod >= 10 ? mods.push(HEXHASH[mod]) : mods.push(mod);
// 		num = Math.floor(num / 16);
// 	}

// 	return mods.reverse().map(function (n) {
// 		return n.toString();
// 	}).join('');
// }

// //decToHex(148);

// function fillZeroes(s) {

// 	if (s.length === 0) return '00';
// 	if (s.length === 1) return '0' + s;
// 	return s;
// }

// function rgb(r, g, b) {

// 	var args = Array.prototype.slice.call(arguments).map(function (n) {
// 		return (n > 255) ? 255 : n;
// 	});

// 	var red = decToHex(args[0]);
// 	var green = decToHex(args[1]);
// 	var blue = decToHex(args[2]);

// 	return fillZeroes(red) + fillZeroes(green) + fillZeroes(blue);
// }
// console.log(rgb(15, 16, 17));

// 64

// function zero(a) { return arguments.length === 0 ? 0 : r(b = 0, c = a) }
// let one = a => a  ? r(b = 1, c = a) : 1
// function two(a) { return arguments.length === 0 ? 2 : r(b = 2, c = a) }
// function three(a) { return arguments.length === 0 ? 3 : r(b = 3, c = a) }
// function four(a) { return arguments.length === 0 ? 4 : r(b = 4, c = a) }
// function five(a) { return arguments.length === 0 ? 5 : r(b = 5, c = a) }
// function six(a) { return arguments.length === 0 ? 6 : r(b = 6, c = a) }
// function seven(a) { return arguments.length === 0 ? 7 : r(b = 7, c = a) }
// function eight(a) { return arguments.length === 0 ? 8 : r(b = 8, c = a) }
// function nine(a) { return arguments.length === 0 ? 9 : r(b = 9, c = a) }

// let r = (b, c) => {
//         if (c[0] === '+') { return b + Number(c[1]) }
//         else if (c[0] === '-') { return b - Number(c[1]) }
//         else if (c[0] === '*') { return b * Number(c[1]) }
//         else if (c[0] === '/') { return Math.floor(b / Number(c[1])) }
// }

// function plus(b) { return '+' + b }
// function minus(b) { return '-' + b }
// function times(b) { return '*' + b }
// function dividedBy(b) { return '/' + b }

// console.log(one(plus(one())));

// var n = function(digit) {
//         return function(op) {
//           return op ? op(digit) : digit;
//         }
//       };
//       var zero = n(0);
//       var one = n(1);
//       var two = n(2);
//       var three = n(3);
//       var four = n(4);
//       var five = n(5);
//       var six = n(6);
//       var seven = n(7);
//       var eight = n(8);
//       var nine = n(9);

//       function plus(r) { return function(l) { return l + r; }; }
//       function minus(r) { return function(l) { return l - r; }; }
//       function times(r) { return function(l) { return l * r; }; }
//       function dividedBy(r) { return function(l) { return l / r; }; }

// console.log(two(plus(one())));

// function zero(func) { return func ? func(0) : 0; };
// function one(func) { return func ? func(1) : 1; };
// function two(func) { return func ? func(2) : 2; };
// function three(func) { return func ? func(3) : 3; };
// function four(func) { return func ? func(4) : 4; };
// function five(func) { return func ? func(5) : 5; };
// function six(func) { return func ? func(6) : 6; };
// function seven(func) { return func ? func(7) : 7; };
// function eight(func) { return func ? func(8) : 8; };
// function nine(func) { return func ? func(9) : 9; };

// function plus(b) { return function (a) { return a + b; }; };
// function minus(b) { return function (a) { return a - b; }; };
// function times(b) { return function (a) { return a * b; }; };
// function dividedBy(b) { return function (a) { return a / b; }; };

// console.log(two(plus(one())));

// ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// 	.forEach(function (name, n) {
// 	this[name] = function (f) { return f ? f(n) : n }
// 	});

// function plus(n) { return function (a) { return a + n } }
// function minus(n) { return function (a) { return a - n } }
// function times(n) { return function (a) { return a * n } }
// function dividedBy(n) { return function (a) { return a / n } }
// console.log(two(plus(one())));

// 'zero one two three four five six seven eight nine'.split(' ').forEach(
// 	(mth, num) => this[mth] = (f = val => val) => f(num)
//    )

//    let plus      = (r) => (l) => l + r
//    let minus     = (r) => (l) => l - r
//    let times     = (r) => (l) => l * r
//    let dividedBy = (r) => (l) => l / r

//    console.log(two(plus(one())));

// const
//   id = x => x,
//   number = x => (f = id) => f(x),
//   [zero, one, two, three, four, five, six, seven, eight, nine] =
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
//   plus = x => y => y + x,
//   minus = x => y => y - x,
//   times = x => y => y * x,
//   dividedBy = x => y => y / x;
//   console.log(two(plus(one())));

// const [
// 	zero,
// 	one,
// 	two,
// 	three,
// 	four,
// 	five,
// 	six,
// 	seven,
// 	eight,
// 	nine
//    ] = Array.from({length:10}).map((item,i) => ((f) => f ? f(i) : i));
//    let r ={length:10}
//    let y = Array.from(r).map((item,i) => ((f) => f ? f(i) : i));

//    const [
// 	plus,
// 	minus,
// 	times,
// 	dividedBy
//    ] = ['+', '-', '*', '/'].map(op => Function('b', `return a => a ${op} b`));

//    console.log(two(plus(one())));

// 65

// function rot13(message) {
// 	let x = [], y = []
// 	for (let i = 0; x.length < 91 - 65; i++) {
// 		x.push(65 + i)
// 		y.push(97 + i)
// 	}
// 	return message.split``.map(ch => {
// 		let chN = ch.charCodeAt(0),
// 			SCC = String.fromCharCode

// 		if (x.includes(chN) && x.includes(chN + 13)) { return (SCC(chN + 13)) }
// 		else if (x.includes(chN)) { return SCC(x[13 - (x.length - x.indexOf(chN))]) }
// 		else if (y.includes(chN) && y.includes(chN + 13)) { return (SCC(chN + 13)) }
// 		else if (y.includes(chN)) { return SCC(y[13 - (y.length - y.indexOf(chN))]) }
// 		else { return ch }
// 	}).join``
// }
// console.log(rot13('test'));

// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
// console.log(rot13('test'));

// var codeA = 'A'.charCodeAt(0),
//     codeZ = 'Z'.charCodeAt(0),
//     codea = 'a'.charCodeAt(0),
//     codez = 'z'.charCodeAt(0);
// function rot13(message){
//   return message.split('').map(function(char) {
//     var code = char.charCodeAt(0);
//     if(codeA <= code && code <= codeZ){
//       return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
//     } else if(codea <= code && code <= codez){
// 	console.log(18%26);
//       return String.fromCharCode(((code - codea) + 13) % 26 + codea);
//     }
//     return char;
//   }).join('');
// }
// console.log(rot13('test'));

// function rot13(message) {
// 	var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
// 	return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
// }
// console.log(rot13('test'));

// function rot13(message) {
// 	return (message + '')
// 		.replace(/[a-z]/gi, function (s) {
// 			return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13));
// 		});
// }
// console.log(rot13('test!'));

// function rot13(message) {
// 	return message.replace(/[a-zA-Z]/g, function (match) {
// 		console.log(match.toUpperCase().localeCompare('M'));
// 		return String.fromCharCode(match.charCodeAt(0) + (match.toUpperCase().localeCompare('M') > 0 ? -13 : 13));
// 	});
// }
// console.log(rot13('test!'));

// function rot13(message) {
// 	return message.replace(/[a-zA-Z]/g, function (c) {
// 		var c13 = c.charCodeAt(0) + 13;
// 		var endCharCode = (c > 'Z') ? 122 : 90;
// 		return String.fromCharCode(endCharCode < c13 ? c.charCodeAt(0) - 13 : c13);
// 	});
// }
// console.log(rot13('test!'));

// 66

// let maxSequence = function (arr) {
// 	if (arr.length == 0) return 0
// 	else {
// 		let r = []
// 		for (let i = 0; arr.length !== 0; i++) {
// 			i === 0 ? arr : arr.splice(0, 1)
// 			 m = arr
// 			for (let i = 0; m.length !== 0; i++) {
// 				i === 0 ? m : m = m.filter((e, ind, arr1) => ind !== arr1.length - 1)
// 				r.push(m.reduce((p, c) => p += c, 0))
// 			}
// 		}
// 		return Math.max(...r)
// 	}
// }
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// 67

// function productFib(prod) {
// 	let y = [0, 1]
// 	let result = []
// 	for (let i = 0; y[i + 1] < prod; i++)
// 		y.push(y[i] + y[i + 1])
// 	y.reduce((p, c, ci, a) => {
// 		if (a[ci - 1] * a[ci] === prod) { return result.unshift([a[ci - 1], a[ci], true]) }
// 		else {
// 			if (a[ci - 1] * a[ci] > prod) {
// 				result.push([a[ci - 1], a[ci], false])
// 			}
// 			return c
// 		}
// 	}, 0)
// 	return result[0]
// }
// console.log(productFib(602070));

// function productFib(prod){
// 	var n = 0;
// 	var nPlus = 1;
// 	while(n*nPlus < prod) {
// 	  nPlus = n + nPlus;
// 	  n = nPlus - n;
// 	}
// 	return [n, nPlus, n*nPlus===prod];
//    }
//    console.log(productFib(602071));

// function productFib(prod) {
// 	let [a, b] = [0, 1];
// 	while (a * b < prod) [a, b] = [b, a + b];
// 	return [a, b, a * b === prod];
// }
// console.log(productFib(602071));

// function productFib(prod) // mathy way
// {
// 	const r = (1 + Math.sqrt(5)) / 2;
// 	let fib1 = Math.round(Math.sqrt(prod / r)),
// 		fib2 = Math.round(fib1 * r);
// 	if (fib1 * fib2 === prod) return [fib1, fib2, true];
// 	for ([fib1, fib2] = [0, 1]; fib1 * fib2 < prod; [fib1, fib2] = [fib2, fib1 + fib2]);
// 	return [fib1, fib2, false];
// }
// console.log(productFib(602071));

// function productFib(p) {
// 	return function f(x, y, z) { if (x * y >= z) return [x, y, x * y == z]; return f(y, x + y, z) }(0, 1, p);
// }
// console.log(productFib(602071));

// function x(p) {
// 	return function c(f, r) { return f + r }(1, p)
// }
// console.log(x(9));

// const productFib = (p, pl = 0, l = 1) =>
// 	p < pl * l ? [pl, l, false] : p === pl * l ? [pl, l, true] : productFib(p, l, pl + l);
// console.log(productFib(602071));

// 68
// function cakes(recipe, available) {
// 	let result = []
// 	if (!(Object.keys(available).includes(...(Object.keys(recipe))))) return 0
// 	else {
// 		for (let el of Object.keys(available)) {
// 			if (!(Object.keys(recipe).includes(el))) { delete available[el] }
// 		}
// 		let sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {})
// 		let a = sortObject(available),
// 		r = sortObject(recipe)
// 		for (let i = 0; i < Object.keys(recipe).length; i++) {
// 			result.push(Math.floor(Object.values(a)[i] / Object.values(r)[i]))
// 		}
// 		return Math.min(...result)
// 	}
// }
// console.log(cakes({ flour: 300, sugar: 150, milk: 100 }, { sugar: 500, flour: 2000, lemon: 1, milk: 2000 }));

// function cakes(recipe, available) {
// 	let kR = Object.keys(recipe)
// 	return kR.reduce(function (val, ingredient) {
// 		return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
// 	}, Infinity)
// }
// console.log(cakes({ flour: 300, sugar: 150, milk: 100 }, { sugar: 500, flour: 2000, lemon: 1, milk: 2000 }));

// const cakes = (needs, has) => Math.min(...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0)))
//    console.log(cakes({ flour: 300, sugar: 150, milk: 100 }, { sugar: 500, flour: 2000, lemon: 1, milk: 2000 }));

// function cakes(recipe, available) {
// 	var numCakes = [];
// 	for (var key in recipe) {
// 			if (key in available) {
// 				numCakes.push(Math.floor(available[key] / recipe[key]));
// 			} else {
// 				return 0;
// 		}
// 	}
// 	return Math.min(...numCakes);
// }
// console.log(cakes({ flour: 300, sugar: 150, milk: 100 }, { sugar: 500, flour: 2000, lemon: 1, milk: 2000 }));

// function cakes(recipe, available) {
//         return Math.min(...Object.keys(recipe).map(e => available[e] / recipe[e] >> 0));
// }
// console.log(cakes({ flour: 300, sugar: 150, milk: 100 }, { sugar: 500, flour: 2000, lemon: 1, milk: 2000 }));

// 69

// function generateHashtag(str) {
//         if (str.length === 0 || str.length > 140) return false
//         return str.replace(/(\b\w)(\w*\b)/g, (m,p1,p2) => `#${p1.toUpperCase()}` )
// }
// console.log(generateHashtag("Do We have A Hashtag"))

// function generateHashtag(str) {
// 	let r = '#' + str.replace(/(\b\w)(\w*)(?:\b\s*)/g, ((m, p1, p2) => `${p1.toUpperCase()}${p2}`))
// 	return str === '' || r.length > 140 ? false : r
// }
// console.log(generateHashtag('git hub'))

// function generateHashtag(str = "") {
// 	var hashtag = `#${str.trim().replace(/(?:\b|\s)(\w)/gi, (m, g) => g.toUpperCase())}`
// 	return !!str && hashtag.length <= 140 && hashtag
// }
// console.log(generateHashtag('git hub'))

// const generateHashtag = str =>
// 	(val => !!str.trim() && val.length <= 140 && val)
// 		(`#${str.replace(/(?:^|\s+)(\w)/g, (_, $1) => $1.toUpperCase())}`);
// console.log(generateHashtag("Do We have A Hashtag"))

// 70

// function orderWeight(strng) {
// 	if (strng == '') return ''
// 	let k = strng.split` `
// 	let v = k.map(el => el.split``.map(e=> Number(e)).reduce((p, c) => p + c))
// 	let e = k.map((el, ind) => { return {
// 			key: el,
// 			val: v[ind]
// 		}})
// 	let u = e.sort((a, b) => a.val !== b.val? a.val - b.val :  (a.key).localeCompare(b.key))
// 	return u.map(el => el.key).join` `
// }
// console.log(orderWeight("5 104"));

// let y = ['5','104']
// let x = y.sort((a,b)=> '5'.localeCompare('104'))
// console.log(x);

// function orderWeight(strng) {
// 	const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
// 	function comp(a, b) {
// 		let sumA = sum(a);
// 		let sumB = sum(b);
// 		return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
// 	};
// 	return strng.split(' ').sort(comp).join(' ');
// }
// console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

// function orderWeight(strng) {
// 	let x = strng
// 		.split(" ")
// 		.map(function (v) {
// 			return {
// 				val: v,
// 				key: v.split("").reduce(function (prev, curr) {
// 					return parseInt(prev) + parseInt(curr);
// 				}, 0)
// 			};
// 		})
// 		let y = x.sort(function (a, b) {
// 			return a.key == b.key
// 				? a.val.localeCompare(b.val)
// 				: (a.key - b.key);
// 		})
// 		let r = y
// 		.map(function (v) {
// 			return v.val;
// 		})
// 		return r.join(" ");
// }
// console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

// function digitSum(str) {
// 	return str.split('').reduce(function(s, e) {
// 	  return s + parseInt(e);
// 	}, 0);
//    }

//    function orderWeight(str) {
// 	  return str.split(' ').sort(function(a, b) {
// 	    return digitSum(a) - digitSum(b) || a.localeCompare(b);
// 	  }).join(' ');
//    }
//    console.log(orderWeight("56 65 74 100 99 68 86 180 90"));

// 71
// function firstNonRepeatingLetter(s) {
// 	let j = s.toLowerCase()
// 	let f = j.split``.sort()
// 	let y = []
// 	for (let i = 0; i < f.length; i++) {
// 		if (f[i] !== f[i + 1] && f[i] !== f[i - 1]) { y.push(f[i]) }
// 		else if (f[i] == f[i + 1] || f[i] == f[i + 1]) { i++ }
// 	}
// 	let x = y.sort((a, b) => j.indexOf(a) - j.indexOf(b))[0]
// 	return s[j.indexOf(x)] || ''
// }
// console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// function firstNonRepeatingLetter(s) {
// 	for (var i in s) {
// 		if (s.match(new RegExp(s[i], "gi")).length === 1) {
// 			return s[i];
// 		}
// 	}
// 	return '';
// }
// console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// function firstNonRepeatingLetter(s) {
// 	var t = s.toLowerCase();
// 	for (var i = 0; i < t.length; i++)
// 		if (t.indexOf(t[i]) === t.lastIndexOf(t[i]))
// 			return s[i];
// 	return "";
// }
// console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// function firstNonRepeatingLetter(s) {
// 	var map, len, i, char
// 	map = {}
// 	len = s.length
// 	for (i = 0; i < len; i++) {
// 		char = s[i].toLowerCase()
// 		map[char] = (map[char] || 0) + 1
// 	}
// 	for (i = 0; i < len; i++) {
// 		char = s[i]
// 		if (map[char.toLowerCase()] == 1)
// 			return char
// 	}
// 	return ''
// }
// console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// function firstNonRepeatingLetter(s) {
// 	var search = s.toLowerCase();
// 	for (var i = 0; i < search.length; ++i) {
// 	    var str = search.slice(0, i) + search.slice(i + 1);
// 	    if((str.indexOf(search[i]) === -1)) {
// 		   return s[i];
// 	    }
// 	}
// 	return '';
//  }
//  console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// const firstNonRepeatingLetter = s => s[[...s.toLowerCase()].findIndex((c, _ , s) => s.indexOf(c) === s.lastIndexOf(c))] || "";
//   console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// const firstNonRepeatingLetter = s =>[...s].find(val => !s.match(new RegExp(val, `gi`))[1]) || ``;
//   console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// function firstNonRepeatingLetter(s) {
// 	let str = s.toLowerCase();
// 	for (let i = 0; i < s.length; ++i) {
// 		let str2 = str.split(str[i]).length
// 		if (str2 === 2) return s[i];
// 	}
// 	return '';
// }
// console.log(firstNonRepeatingLetter('>>ﬁVV>Stresﬁﬁs'))

// 72
// function incrementString(strng) {
// 	let f = new RegExp('(\\d*)$', "gi")
// 	let x = new RegExp('([^\\d]*)(\\d*)$', "")
// 	let y = strng.match(f)
// 	return y[0] ? strng.replace(x, ((_, g1, g2) => {
// 		let t = g2.length - String(Number(g2) + 1).length
// 		if (t < 0) t = 0
// 		let d = '0'.repeat(t)
// 		return g1 + d + (parseInt(g2) + 1)
// 	}))
// 		: strng + 1
// }
// console.log(incrementString('edrherthd-0099'))

// function func(p) {
// 	let x = new RegExp ('([^\\d]*)(\\d*)$', "")
// 	let l = new RegExp ('\\d*$', "g")
// 	let y = p.match(x)
// 	let z = p.matchAll(x)
// 	console.log(y)
// 	console.log(z)
// 	console.log([...z])
// 	console.log(z.next())
// 	return p.matchAll(x)
// }
// console.log(func('1foo1'))

// function incrementString(input) {
// 	if (isNaN(parseInt(input[input.length - 1]))) return input + '1';
// 	return input.replace(/(0*)([0-9]+$)/, function (_, p1, p2) {
// 		var up = parseInt(p2) + 1;
// 		return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
// 	});
// }
// console.log(incrementString('edrherthd-99'))

// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
// console.log(incrementString('edrherthd-99'))

// function incrementString(input) {
// 	return input.replace(/([0-8]?)(9*)$/, function (_, d, ns) {
// 		return +d + 1 + ns.replace(/9/g, '0');
// 	});
// }
// console.log(incrementString('edrherthd-99'))

// const incrementString = s => s.replace(/[0-8]?9*$/, m =>++m)
// console.log(incrementString('edrherthd-0099'))

// function incrementString(str) {
// 	var c = str[str.length - 1];
// 	switch (c) {
// 		case '0':
// 		case '1':
// 		case '2':
// 		case '3':
// 		case '4':
// 		case '5':
// 		case '6':
// 		case '7':
// 		case '8': return str.substring(0, str.length - 1) + (parseInt(c) + 1);
// 		case '9': return incrementString(str.substring(0, str.length - 1)) + 0;
// 		default: return str + "1";
// 	}
// }
// console.log(incrementString('edrherthd-0099'))

// function incrementString(strng) {
// 	return strng.replace(/\d*$/, i => String(+i + 1).padStart(i.length, 0));
// }
// console.log(incrementString('edrherthd-'))

// function incrementString (str) {
// 	str = str.split('');
// 	if (!isNaN(str[str.length - 1])) {
// 	  for (var i = str.length - 1; i >= 0; --i) {
// 	    if (!isNaN(str[i]) ) {
// 		 var num = +str[i];
// 		 if (num !== 9) {
// 		   str.splice(i, 1, (++num).toString());
// 		   break;
// 		 }
// 		 str.splice(i, 1, '0');
// 	    } else if (isNaN(str[i + 1]) === false && str[i + 1] === '0') {
// 		 str.splice(i + 1, 0, '1');
// 	    } else {
// 		 break;
// 	    }
// 	  }
// 	} else {
// 	  str.push('1');
// 	}
// 	return str.join('');
//    }
//    console.log(incrementString('edrherthd-99'))

// function incrementString(input) {
// 	return input.replace(/\d*$/, function (n) {
// 		var x = ~~n + 1
// 		return ('0000000' + x).slice(-Math.max(n.length, String(x).length))
// 	})
// }
// console.log(incrementString('edrherthd-00000000000000000000000000000000099'))

// 73
// function domainName(url){
// 	let r = new RegExp ('(https?:\\/\\/www.|https?:\\/\\/|www.|\\b)([^\.]+)(\.)','')
//         console.log(r);
// 	let m = url.match(r)
// 	return m[2]
//    }
//    console.log(domainName("601hvxt.biz/index.php"));

// function domainName(url){
//         return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
//       }
//       console.log(domainName("601hvxt.biz/index.php"));

// 74
// function scramble1(str1, str2) {
// 	let m = new RegExp(`[^${[...new Set([...str2])]}]`, 'gi')
// 	let m2 = new RegExp(`(${[...new Set([...str2])].join('+|')}+)`, 'g')
// 	str1 = str1.replace(m, '').split``.sort().join``
// 	str2 = str2.split``.sort().join``
// 	str1 = [...str1.matchAll(m2)]
// 	str2 = [...str2.matchAll(m2)]
// 	for (let i = 0; i < str1.length; i++) {
// 		if (str2.length > str1.length) { return false }
// 		else if (str1[i][1].length >= str2[i][1].length) { }
// 		else { return false }
// 	}
// 	return true
// }
// console.time('1')
// console.log(scramble1('aabbcamaomsccddsldhvlskdslkdlfkslkflkslkdnfkldfklsdklnfklnsdklnfklnsdklflkklnsdklnflknsdlknflksdlknfklnsdlknflkklnsdklnfklnsklndfklnsdklnfklsdklnfknlnkdlsnlkfslklfkdslkfklnlkdklfknlsdlknfklnsldkfklknsdlkfekfknkcjxoicixzilclkesaiedflefnknslicjioseldfkeficmeljslekflnkefklwiglkwehewngwkwlfjfdjkewlklafeklnklnefwaklefawklnefawklnewfakjlefwlkklr3wlewlkjfndsfmklnewkwekl', 'commas'))
// console.timeEnd('1')

// function scramble2(str1, str2) {
// 	let m = new RegExp(`[^${[...new Set([...str2])]}]`, 'gi')
// 	str1 = str1.replace(m, '')
// 		for (let i = 0; i < str2.length; i++) {
// 		if (str1.includes(str2[i])) {str1 = str1.replace(str2[i],'')}
// 		else {return false}
// 	}
// 	return true
// }
// console.time('2')
// console.log(scramble2('aabbcamaomsccddsldhvlskdslkdlfkslkflkslkdnfkldfklsdklnfklnsdklnfklnsdklflkklnsdklnflknsdlknflksdlknfklnsdlknflkklnsdklnfklnsklndfklnsdklnfklsdklnfknlnkdlsnlkfslklfkdslkfklnlkdklfknlsdlknfklnsldkfklknsdlkfekfknkcjxoicixzilclkesaiedflefnknslicjioseldfkeficmeljslekflnkefklwiglkwehewngwkwlfjfdjkewlklafeklnklnefwaklefawklnefawklnewfakjlefwlkklr3wlewlkjfndsfmklnewkwekl', 'commas'))
// console.timeEnd('2')

// function scramble3(str1, str2) {
//         let occurences = str1.split("").reduce((prev, cur) => { prev[cur] ? prev[cur]++ : prev[cur] = 1; return prev; }, {});
//         return str2.split("").every((character) => --occurences[character] >= 0);
// }
// console.time('3')
// console.log(scramble3('aabbcamaomsccddsldhvlskdslkdlfkslkflkslkdnfkldfklsdklnfklnsdklnfklnsdklflkklnsdklnflknsdlknflksdlknfklnsdlknflkklnsdklnfklnsklndfklnsdklnfklsdklnfknlnkdlsnlkfslklfkdslkfklnlkdklfknlsdlknfklnsldkfklknsdlkfekfknkcjxoicixzilclkesaiedflefnknslicjioseldfkeficmeljslekflnkefklwiglkwehewngwkwlfjfdjkewlklafeklnklnefwaklefawklnefawklnewfakjlefwlkklr3wlewlkjfndsfmklnewkwekl', 'commas'))
// console.timeEnd('3')
// const scramble6 = (str1, str2) =>[...str2].every(val => str2.split(val).length <= str1.split(val).length)

//   console.log(scramble6('aabbcamaomsccdd', 'commas'))

//   function scramble  (str1, str2) {
//   [...str2].every(val => str2.split(val).length <= str1.split(val).length)
//   console.log( str2.split('c'))
//   console.log( str2.split('c').length)
//   console.log( str1.split('c'))
//   console.log( str1.split('c').length)
//   }
//   console.log(scramble('aabbcamaomsccdd', 'commas'))

//   function scramble(str1, srt2) {
//         let ccharstr2 = {}

//         for (const ch of srt2) {
//           if (ccharstr2[ch]) ccharstr2[ch]++
//           else ccharstr2[ch] = 1
//         }

//         for (const ch of str1) {
//           if (ccharstr2[ch] && ccharstr2[ch] !== 0) ccharstr2[ch]--
//         }

//         for (const key in ccharstr2) {
//           if (ccharstr2[key] !== 0) return false
//         }

//         return true
//       }
//       console.log(scramble('scriptjavx','javascript'))

// function scramble(str1, str2) {
// 	var hashtab = [...new Array(256)].map(x => 0);

// 	str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
// 	str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);

// 	hashtab = hashtab.filter (x=>x > 0);

// 	return hashtab.length == 0;
//    }
//    console.log(scramble('scriptjavx','javascript'))

// function scramble(str1, str2) {
// 	var count = Object.create(null);

// 	Array.prototype.forEach.call(str1, function(a) {
// 	  count[a] = (count[a] || 0) + 1
// 	})

// 	return Array.prototype.every.call(str2, function(a) {
// 	  return count[a]--;
// 	})
//    }
//    console.log(scramble('scriptjaavx','javascript'))

// let x = [1,2,3,4,5]
// x.forEach((el,i,arr)=> arr[i] = el*216554615)
// console.log(x);

// function scramble(str1, str2) {
// 	const alphaArr = Array(26).fill(0);

// 	str2.split("").forEach(s => alphaArr[s.charCodeAt() - 97]++);
// 	str1.split("").forEach(s => alphaArr[s.charCodeAt() - 97]--);

// 	return alphaArr.every(v => v <= 0);
//    }
//    console.log(scramble('scriptjaavx','javascript'))

// 75
// function zeros(n) {
// 	let c = 0;
// 	for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
// 		c += Math.floor(n / i);
// 	return c;
// }

// console.log(zeros(30));

// 76
// let one = o => {
// 	if (!o[1]) { return 0 }
// 	else if (o[1] < 3) { return o[1] * 100 }
// 	else if (o[1] >= 3) { return 1000 + ((o[1] - 3) * 100) }
//    }
//    let five = o => {
// 	if (!o[5]) { return 0 }
// 	else if (o[5] < 3) { return o[5] * 50 }
// 	else if (o[5] >= 3) { return 500 + ((o[5] - 3) * 50) }
//    }
//    let two = o => !o[2]||o[2]<3? 0:200
//    let three = o => !o[3]||o[3]<3? 0:300
//    let four = o => !o[4]||o[4]<3? 0:400
//    let six = o => !o[6]||o[6]<3? 0:600
// function score(dice) {
//   let o = Object.create(null)
//   for (let i = 0; i < dice.length; i++) {
//     if (o[dice[i]]) {
//       o[dice[i]]++
//     }
//     else { o[dice[i]] = 1 }
//   }
//   return one(o) + two(o)+ three(o) + four(o) + five(o) + six(o)
// }
// console.time('1')
// console.log(score([1,1,1,1,1]))
// console.timeEnd('1')

// function score(dice) {
// 	var dc = [0, 0, 0, 0, 0, 0];
// 	var tdr = [1000, 200, 300, 400, 500, 600];
// 	var sdr = [100, 0, 0, 0, 50, 0];
// 	dice.forEach(function (x) { dc[x - 1]++; });
// 	return dc.reduce(function (p, c, cInd) {
// 		return p + (c >= 3 ? tdr[cInd] : 0) + sdr[cInd] * (c % 3);
// 	}, 0);
// }
// console.time('2')
// console.log(score([1, 1, 1, 1, 1]))
// console.timeEnd('2')

// 77
// function perimeter(n) {
// 	let x = [1, 1]
// 	for (let i = 2; i < n + 1; i++) {
// 		x[i] = x[i - 1] + x[i - 2]
// 	}
// 	return n == 0 ? 4 : 4 * x.reduce((p, c) => p + c, 0)
// }
// console.log(perimeter(1));

// function fib(n) {
// 	var a = 1, b = 1, tmp;
// 	while (n-- > 0) {
// 		tmp = a;
// 		a = b;
// 		b += tmp;
// 	}
// 	return a;
// }
// function perimeter(n) {
// 	return 4 * (fib(n + 2) - 1)
// }
// console.log(perimeter(1));

// const perimeter = n =>
// 	4 * Math.round((((1 + 5 ** .5) / 2) ** (n + 3) / 5 ** .5) - 1);
// console.log(perimeter(4));

// const SQRT5 = Math.sqrt(5);
// const PHI = (SQRT5 + 1) / 2;
// const fib = n => Math.round(PHI**n / SQRT5);
// const perimeter = n => 4 * fib(n + 3) - 4;
// console.log(perimeter(4));

// console.log(Math.sqrt(5)*Math.sqrt(5) - Number.EPSILON);

// const perimeter = N => {
// 	let [a, b] = [1, 1];
// 	for (let i = 0; i <= N; i++) [a, b] = [b, a + b];
// 	return (b - 1) * 4;
//    }
//    console.log(perimeter(4));

// perimeter = (a, b = (c, d = 1, e = 0) => c ? d + b(--c, d + e, d) : d) => b(a) * 4
// console.log(perimeter(4));

// function perimeter(a,  b = (c, d = 1, e = 0)=>{
// if (c) {return d + b(--c, d + e, d)}
// else {return d}
// }
// ) {
// 	return b(a) * 4
// }
// console.log(perimeter(4));

78
function nextBigger(n) {
   let n2 = n.toString().split``
   let [...n1] = n2
   for (let i = 0; i < n1.length; i++) {
      if (n1[i] < n1[i + 1]) {
         let n3 = n1.slice(i, n1.length)
         let n1i =  n1[i]
         let nmin =String(Math.min(...n3.filter(el=>el>=n1[i])))
         n1[i]=nmin
         n1[n1.indexOf(nmin), i]=n1i
         i++
         for (; i< n1.length; i++) {
            let m = n1[i]
      let m1 = n1[i + 1]
      if (n1[i] < n1[i + 1]) {
         n1[i] = m1
         n1[i + 1] = m
      }
   }
   break
}
   }
   return n1.join`` == n2.join`` ? -1 : +n1.join``
}
console.log(nextBigger(2017));


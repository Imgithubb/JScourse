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

44
const countBits =  (n) =>  n.toString(2).split('').map(el=>Number(el)).reduce((prev,cont)=> prev +cont)
console.log(countBits(7));
function slicce(str) {
	let x2 = str.slice(2)
	return x2
}

console.log(slicce('asdfghjkl'))

/ 24
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



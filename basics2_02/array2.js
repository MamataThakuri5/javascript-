const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=['superman',"flash","batman"]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allheros=marvel_heros.concat(dc_heros);
// console.log(allheros);

// const allnew_heros=[...marvel_heros, ...dc_heros]
// console.log(allnew_heros);

const another_arr=[1,2,[3,4],5,[6,7,[8,9]]];
const realArr=another_arr.flat(Infinity);
console.log(realArr);

console.log(Array.isArray("mamata"));
console.log(Array.from("mamata"));

console.log(Array.from({name:"mamata"}));//intestring

let score =100
let score1=200
let score2=300

console.log(Array.of(score,score1,score2))//imp is isArr,from ,off



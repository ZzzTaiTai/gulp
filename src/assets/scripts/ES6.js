const testConst = null;
let testLet = null;
let bar = {a:'1',b:'2'};
let baz = {...bar};
const numbers = [4, 38];
console.log(numbers.map((item)=>{return item*2}));
let func = () => {
    console.log(1);
    return 1
}
function add(x, y) {
    return new Promise((resove,reject) => {
        setTimeout(()=>{
            console.log(1)
            resove("1")
        },2000)
    })
  }
// 42
async function asyncFun (){
    await add(...numbers);
    console.log(2)
}
asyncFun();
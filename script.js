function add(a,b){
    return a+b
}

const mul=(a,b)=>{
    return a*b
}
const obj={
    name:'axel',
    age:40,
    message:function(){
        let name=obj.name
        return `Hello I am ${name}`
    }
}
/*console.log(obj.name);
console.log(obj.message());*/
//map-return new array after executing func on every element
const numb=[1,2,3,4,5,-4,-45,56]
const mappednum=numb.map((num)=>num*3)
console.log(mappednum);

//filter-return new array with element satisfying the condition
const posnum=numb.filter((num)=>num>0)
console.log(posnum);   
const oddnum=numb.filter((num)=>(num%2)!==0) 
console.log(oddnum);
const tot=numb.reduce((sum,n)=>sum+n,0)
console.log(tot);
const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7000}
]
const totprice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totprice)
const products1=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'tab',price:4500},
    {name:'ac',price:12500}
]
const x=products1.filter((n)=>n.price>5000)
console.log(x);

//destructing
const num=[1,2,3,4,5,6]
const [first,second,third,...spread]=num
console.log(spread);
const user={name:'CR7',password:'12345'}
const {name,password}=user
console.log(password);
//spread
const arr1=[1,2,3]
const arr2=[4,5,6]
const copy=[...arr2,...arr1]
console.log(copy);

//rest
function add2(...arguments){
    return arguments+2;
}
console.log(add(1,2,3,4,5))
function function1(){
    console.log(`from inside callback`)
}
function fun(name,callback){
    callback()
    return `${name} from outside callback`

}
console.log(fun('function',()=>{console.log(`from inside callback`)}))
async function fetchusers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        //console.log(data);
        data.map((a)=>console.log(a.name))
}
catch(error){
    console.log(error);
}
}
fetchusers()
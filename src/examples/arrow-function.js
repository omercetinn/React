//ES5

var helloES5 = function(){
    console.log('hello from es5');
}

//es6

let helloES6 = () =>{
    console.log('hello from es6');
}



helloES6();

let multiplyES5=function(x,y){
    return x*y;
}

let multiplyES6 = (x,y) =>{return x*y}

console.log(multiplyES6(3,8));

const phones=[
    {name:'Ipone 8', price:4000},
    {name:'Ipone X', price:6000},
    {name:'Ipone XR', price:8000}
]

let priceES5 =phones.map(function(phone){
    return phone.price;
})

let priceES6=phones.map(phone=>phone.price);

console.log(priceES6);

console.log(priceES5);

let filterES5=phones.filter(function(phone){
    return phone.price >=5000;
})

let filterES6=phones.filter(phone=>phone.price>=5000);

console.log(filterES6);
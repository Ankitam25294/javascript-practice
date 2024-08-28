


    console.log(a)

promise.then(()=>{
    console.log(b)

}).then(async ()=>{
    await printC();
})


async printC() {
    await console.log(c)
}




var obj = { 
    name:'test'
    age:20
}

  var obj1 = obj;
  obj1.name='test1'

  console.log(obj.name)


//test1




a
c
b


a 
b
c



input:[{title:'mobile-1', cat:'mobile',cost:20000},{title:'mobile-2', cat:'mobile',cost:20000}, {title:'tv', cat:'tv',cost:20000}]
 
outbut: [{cat:'mobile', totalPrice:40000},{cat:'tv', totalPrice:20000}]



{mobile:40000}x



<div> 5 

<div> 2 
 1


let input = [{title:'mobile-1', cat:'mobile',cost:20000},{title:'mobile-2', cat:'mobile',cost:20000}, {title:'tv', cat:'tv',cost:20000}];

// outbut: [{cat:'mobile', totalPrice:40000} ,{cat:'tv', totalPrice:20000}


let obj = {};
let objArr = [];

/* for(let p of input) {
  if(!obj[p.cat]) {
    obj[p.cat] = p.cost
  } else {
    obj[p.cat] += p.cost
  }
} */


for(let p of input) {
let elementToFind = objArr.find((ele)=> ele.cat == p.cat);
if(!elementToFind) {
       objArr.push({cat: p.cat, totalPrice: p.cost});
      } else {
      	elementToFind.totalPrice += p.cost;
      }    
}
console.log('objArr', objArr)




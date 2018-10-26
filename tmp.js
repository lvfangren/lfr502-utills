// test1
// new Promise(function(resolve,reject){
//   if (true) {
//     resolve()
//   }else {
//     reject()
//   }
// }).then(function(){console.log('success');},function(){console.log('faild');}).then(console.log(123)).catch()
//


// test2
// new Promise(resolve=>{
//   setTimeout(()=>{
//     resolve('i am 1');
//   },2000)
// }).then(value=>{
//   console.log(value+'-------test1--------');
//   return new Promise(resolve=>{
//     resolve('i am 2');
//   },2000)
// }).then((value)=>{
//   console.log(value+'-------test2--------');
// })

// test3
// console.log('start');
// let pp=new Promise(resolve=>{
//   setTimeout(()=>{
//     console.log('1S outPut');
//     resolve('xiexie');
//   },1000)
// })
// setTimeout(function(){
//   pp.then((val)=>{
//     console.log(val);
//     console.log('Goby');
//   })
// },3000)


// test4
// console.log('start');
// new Promise(resolve=>{
//   console.log('hello');
//   resolve('every');
// }).then((val)=>{
//   console.log(val);
//   (function(){
//     return new Promise(resolve=>{
//       setTimeout(()=>{
//         console.log('my name is ss');
//         resolve('xxxxxxxxxxxxxxxxxxx')
//       },2000)
//     }).then(val=>{console.log(val);})
//   })()
//   return false
// }).then(value=>{
//     console.log(value+'ooiiuuyy');
// })

// test5
// console.log('start');
// new Promise(resolve=>{
//   console.log('step1');
//   setTimeout(()=>{
//     resolve(100);
//   },1000)
// }).then(value=>{
//   return new Promise(resolve=>{
//     console.log('step1-1');
//     setTimeout((value)=>{
//       resolve(110);
//     },1000)
//   })
// }).then(value=>{
//   console.log('step1-2');
//   return value;
// }).then(value=>{
//   console.log('step1-3');
//   console.log(value);
// }).then(value=>{
//   console.log('end');
// })

// test6
// new Promise(resolve=>{
//   console.log(1);
//   resolve()
// }).then(()=>{
//   console.log('success');
// })
// console.log('xxx');


// test7
// new Promise(resolve=>{
//   setTimeout(()=>{
//     console.log('start');
//     resolve()
//   },1000)
// }).then(value=>{
//   throw new Error('bug');
// }).catch(value=>{
//   console.log(value);
//   throw new Error('raoguo')
// }).then(value=>{
//   console.log('catch houmian1');
// }).then(value=>{
//   console.log('catch houmian2');
// }).catch(value=>{
//   console.log('errorssss'+value);
// })

// (new function f(){
//   this.a=2;
//   return ((...b)=>{
//     console.log(this.a);
//   }).bind({a:5})
// })()

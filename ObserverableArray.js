// class ObserverableArray{
//   constructor() {
//     let arr=new Array();
//     let chamgeMethod=['push','pop','shift','unshift','splice','sort','reverse'];
//     chamgeMethod.forEach((arg)=>{
//       arr[arg]=function(){
//         console.log(arg);
//         return Array.prototype[arg].apply(this,arguments)
//       };
//     })
//     return arr;
//   }
// }

// Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

// Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
function ObserverableArray() {
  return new Proxy([], {
    get(target, propKey) {
      const matArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
      matArr.indexOf(propKey) > -1 && console.log(propKey);
      return target[propKey]
    }
  })
}

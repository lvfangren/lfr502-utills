// const isObjectValueEqual=(obj1,obj2)=>{
  // if (!obj1&&!obj2) {
  //   return obj1===obj2;
  // }
  // if (!(obj1 instanceof Object)||!(obj1 instanceof Object)) {
  //   return false;
  // }
  // if (Object.keys(obj1).length!==Object.keys(obj2).length) {
  //   return false;
  // }else {
  //   for (let tmpArg in obj1) {
  //     let obj1Value=obj1[tmpArg];
  //     let obj2Value=obj1[tmpArg];
  //     if (obj1Value instanceof Object&&obj2Value instanceof Object) {
  //         isObjectValueEqual(obj1Value,obj2Value);
  //     }else if(obj1Value!==obj2Value){
  //       return false;
  //     }
  //   }
  //   return true;
  // }
// }

// 对象判等，传入两个对象参数，返回boolean值

function isObjectValueEqual(obj1,obj2){
  var in1=obj1 instanceof Object;
  var in2=obj2 instanceof Object;
  if (!in1||!in2) {
    return in1===in2
  }
  if (Object.keys(obj1).length!==Object.keys(obj2).length) {
    return false;
  }
  for (var p in obj1) {
    var a=obj1[p] instanceof Object;
    var b=obj2[p] instanceof Object;
    if (a&&b) {
      isObjectValueEqual(obj1[p],obj2[p]);
    }else if (obj1[p]!==obj2[p]) {
      return false;
    }
  }
  return true;
}
let a={a:21,c:{age:'name'},d:[1]};
let b={a:21,c:{age:'name'},d:[1]};
console.log(isObjectValueEqual(a,b));

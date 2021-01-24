//数组去重
// 支持数组合并去重

// 原始方法
// const unique = (arr) => {
//   let result=[];
//   arr.forEach((ite)=>{
//     if(result.indexOf(ite)===-1){
//       result.push(ite);
//     }
//   })
//   return result;
// }

// 直接利用ES6数据结构Set和数组扩展方法from解决
const unique = (...res)  => {
  // Array.from(new Set())
  let arr=[];
  res.forEach((ite)=>{
    arr=[].concat(ite);
  })
  return Array.from(new Set(arr))
}

// 嗯，还可以正则去重

module.exports = unique
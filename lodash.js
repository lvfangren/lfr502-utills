// // // /* // 创建一个模板引擎:
// // // var tpl = new Template('<p>Today: { date }</p>\n<a href="/{ user.id|safe }">{ user.company }</a>');
// // // // 渲染得到HTML片段:
// // // var model = {
// // //     date: 20150316,
// // //     user: {
// // //         id: 'A-000&001',
// // //         company: 'AT&T'
// // //     }
// // // };
// // // var html = tpl.render(model);
// // // console.log(html);
// // // // <p>Today: 20150316</p>
// // // // <a href="/A-000&001">AT&amp;T</a>


// // // class Template {
// // //   constructor(argStr) {

// // //   }
   
// // //   render(data) {
// // //     let htmlStr = ''


// // //     return htmlStr
// // //   }
// // // }
// // //  */

// // //  async function x1() {
// // //    console.log(123)
// // //    return 222
// // //  }

// // //  async function xx() {
// // //   console.log(1); 
// // //   let x = await x1()
// // //   console.log(x);
// // //   // exports.module = x
// // //   console.log(2);  
// // //  }

 
// // //  console.log(xx());
// // //  //  await xx()
// // //  console.log(1235878);




// // //  function calls() {
// // //     console.log('my name is callback'); 
// // //  }
// // //  function funs(callback) {
// // //     console.log(1);
// // //     callback && callback()
// // //  }

// // //  funs(calls)


// // // async function getData(id) {
// // //   let response = await fetch('id')
// // //   return response
// // // }

// // // async function xxx() {
// // //   // let a1Pro = getData(1)
// // //   // let a2Pro = getData(2)
// // //   // let a1asy = await a1Pro
// // //   // let a2asy = await a2Pro
// // //   let [a, b] = await Promise.all([
// // //     getData(a),
// // //     getData(b),
// // //   ])

// // //   let arr = ['a', 'b']
// // //   let datas = arr.map((items)=> {
// // //     return getData(items)
// // //   })
// // //   for (const ii of datas) {
// // //     let res = await ii
// // //     console.log(res)
// // //   }

// // // }

// // async function logs(params) {
// //   console.log(params, 'father')
// //   return new Promise((resolve, reject) => {
// //     if(typeof params === 'number') {
// //       console.log('仅仅仅');
// //       resolve(params)
// //     }else{
// //       throw new Error('sssssss')
// //     }
// //   })
// // }
// // async function demos(xxx) {
// //   console.log('ssss');
// //   let val = await logs(xxx)
// //   console.log(val, 'son')
// //   return val
// // }

// // demos(12).then(val=>console.log(val, 'sssss')).catch(e=>console.log('baba'))
// // // demos('12')






// async function loader() {
//   return {
//     name: 'sss',
//     age: 21
//   }
// }

// async function getData(result) {
//   const {name, age} = result
//   // console.log(name, age)
//   return {
//     names: `${name} papa`,
//     ages: `${age} baba`
//   }
// }
// async function test() {
//   let result = await loader()
//   // console.log(result)
//   return await getData(result)
// }
// test().then(res=>{
//   module.exports = res
// })

// // console.log(test(), '2')


// // old
// // for (var i = 0 ; i < 10 ; ++i) {
// //   setTimeout(function(){
// //       console.log(i)
// //   },0)
// // }

// // methods 1
// for(let i = 0; i < 10; i++) {
//   setTimeout(function(){
//     console.log(i)
//   },0)

// }  

// // methods 2
// // for (var i = 0 ; i < 10; ++i) {
// //   (function(i) {
// //     setTimeout(function(){
// //       console.log(i)
// //     },0)
// //   })(i)
// // }

// function Person () {
//   getName = function () { console.log(1) }
//   return this
// }

// Person.getName = function () { console.log(2) }

// Person.prototype.getName = function () { console.log(3) }

// var getName = function () { console.log(4) }

// function getName () { console.log(5) }





// Person.getName();  //2 
// getName();  //4
// Person().getName();  //2
// getName();  //5
// new Person.getName();  //
// new Person().getName();  //3
// new new Person().getName(); // 






/**
 *
 * 判断ip地址是否合法有效
 * @param {*} ips
 * @returns
 */
function isIP(ips) {
    let ipArr = ips?.split('.')
    if(ipArr.length !== 4) {
      return false
    }

    for (let index = 0; index < ipArr.length; index++) {
      const items = +ipArr[index]
      if(items <= 0 && items >= 255) {
        return false
      }
      
    }
    return true

    // methods 2
    // return /\d(.)/.test(ips)
}


// case 1: 
// 
// console.log(isIP('127.0.0.1'))

// console.log(typeof String(21));
let x = 21

console.log(typeof x.toString(), typeof x)
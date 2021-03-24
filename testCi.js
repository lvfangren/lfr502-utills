// // /**
// //  * 文档：
// //  * https://code.vipkid.com.cn/vfe/qingke/AIclass2/tv-sdk/wikis/home
// //  */
// // import yuvCanvas from '@edu/yuv-canvas-disposable' // 使用yuv-canvas会有切换窗口崩溃问题
// // import yuvBuffer from 'yuv-buffer'
// // import { ACAISDK } from '@edu/acai-sdk/dist/main'
// // import signal from '@onlineclass/signal-javascript-sdk'
// // // import { getACSDK, ACSDKConfigOptions } from '@edu/ai-course-sdk'
// // import { hasOwn, isJSON, parseJSON, pick, isPlainObject, isPrimitiveJSONValue, getUrlQuery } from '@/shared/util'
// // import { pageEnv, appVersion } from '@/shared/public'
// // import { SIGNAL_ID, SIGNAL_TYPE } from '@/constants'
// // import hooks from '@/hooks'
// // import loader from '@edu/core-sdk-loader'

// const { forEach, fill, map, reduce, every, some, entries, keys, values } = require("lodash");



// // // 是否展示信令发送的日志
// // const showSendSignal = !!getUrlQuery('showSendSignal')

// // // 随便起的
// // const MODULE_ID = 'sliveclass/teacher|watcher'

// // async function setup() {
// //     let loaderOptions = {
// //         client: 'teacher',
// //         // env: 
// //     }
// //     const result = await loader(loaderOptions)

// //     if(!result) {
// //         throw new Error('Have BUGS')
// //     }
// //     window.coresdk = result
// //     // const { ACSDKEvents, ACSDKConfigOptions, getACSDK } = result
// //     let module = await initSignalModule(result)
// //     return module
// // }

// // async function initSignalModule(result) {
// //     const { ACSDKEvents, ACSDKConfigOptions, getACSDK } = result
// //     // SDK配置
// //     const config = {
// //         debug: !!getUrlQuery('debug'),
// //         env: pageEnv().env,
// //         appVersion,
// //         engine: ACSDKConfigOptions.ENGINE.UL,
// //     }
  
// //     // 初始化SDK
// //     const sdk = getACSDK(config)
// //     const aiSDK = new ACAISDK(config, sdk)
  
// //     // 插件
// //     sdk.installPlugin('signal-javascript-sdk', signal)
// //     sdk.installPlugin('yuv-buffer', yuvBuffer)
// //     sdk.installPlugin('yuv-canvas', yuvCanvas)
// //     return {
// //         self: sdk,
// //         ar: aiSDK.ar,
// //         /**
// //          * 课件信令传递
// //          */
// //         pptBroadcast(data) {
// //             let form = data
// //             /** 课件信令有特殊格式，可以用这个测试
// //              * let form = {
// //                 pageId_xXFK: 'page_25',
// //                 targetId: '25_select_image_1',
// //                 templateType: 'dragMatch',
// //                 action: 'moveUpdate',
// //                 version: '2.0',
// //                 'page_25_xXFK.dragMatch.25_select_image_1': '*-{"_id":"25_select_image_1","zIndex":4,"top":328,"left":242,"coverTarget":"","canMistake":false,"time":1585634093461}',
// //                 field: ['pageId_xXFK', 'targetId', 'templateType', 'action', 'version', 'page_25_xXFK.dragMatch.25_select_image_1'],
// //                 kbTemplateType: 'freeMatch',
// //                 kbQuestionID: '21d46e65c97411e9ae0fc9d7203e9cb8_',
// //                 kbQuestionType: 2,
// //             }
// //             */

// //             // 缺少一层，这里加上，主要用于测试
// //             if (!hasOwn(form, 'msgId')) {
// //             form = {
// //                 msgId: SIGNAL_ID.ppt,
// //                 msgtype: SIGNAL_TYPE.save,
// //                 data: JSON.stringify(data),
// //             }
// //             }

// //             // msgType转成小写
// //             if (hasOwn(form, 'msgType')) {
// //             form.msgtype = pick(form, 'msgType')
// //             }

// //             const result = hooks.common.signal.beforeSendPPT.call(form)
// //             sdk.S().post(result)

// //             if (showSendSignal) {
// //             console.log('课件发送信令', data)
// //             }
// //         },
// //         /**
// //          * 教室信令发送
// //          */
// //         broadcast(data) {
// //             this.send(data)

// //             if (showSendSignal) {
// //             console.log('教室发送信令', data)
// //             }
// //         },
// //         sendHFChat(data, useEncode = true) {
// //             const result = hooks.common.signal.beforeSendCourse.call(data)
// //             // const form = this.basicFields(result)
        
// //             // if (useEncode) {
// //             //   result = this.encode(result)
// //             // }
        
// //             sdk.S().sendHF({
// //               moduleId: 'chat',
// //               data: JSON.stringify(result),
// //               isPlayback: true,
// //               isSave: true,
// //             })
// //         },

// //         /**
// //          * 教室单播
// //          * 只存回放 不存历史信令
// //          */
// //         unicast(data, userList = []) {
// //             // debugger
// //             const form = this.basicFields(data)
// //             console.log(sdk, 'scmlmlmllml');
// //             sdk.S().unicast(MODULE_ID, form, userList)
// //         },
// //         /**
// //          * 发送
// //          * 信令存储可能会被转码
// //          * 这里编码是防止信令处理
// //          */
// //         send(data, useEncode = true) {
// //             const result = hooks.common.signal.beforeSendCourse.call(data)
// //             const form = this.basicFields(result)

// //             if (useEncode) {
// //             form.data = this.encode(result)
// //             }

// //             sdk.S().post(form)

// //             // 缓存单条发送信令
// //             this.cacheCourseSignal(result)
// //         },
// //         /**
// //          * 删除历史信令的某个key
// //          * (教室信令)
// //          * @param keys
// //          */
// //         delKeys(keys) {
// //             const data = {
// //             msgId: SIGNAL_ID.course,
// //             msgtype: SIGNAL_TYPE.delKey,
// //             data: {
// //                 keys: keys,
// //             },
// //             }
// //             this.send(data, false)
// //             this.delCacheCourseSignal(keys)
// //         },
// //         /**
// //          * 删除所有的key
// //          * (教室信令)
// //          */
// //         delAllKeys() {
// //             const ignoreRe = [
// //             // 课程状态的信令尽量不要删除
// //             /data_class_status_teacher/,
// //             ]

// //             const keys = []
// //             function push(key) {
// //             const ignore = ignoreRe.some(re => re.test(key))
// //             if (!ignore) keys.push(key)
// //             }

// //             for (const key in this.courseStore) {
// //             push(key)
// //             }

// //             this.delKeys(keys)
// //         },
// //         /**
// //          * 标识
// //          */
// //         flag: '%%',

// //         /**
// //          * 获取历史信令
// //          */
// //         getHistory() {
// //             this.getPPTHistory()
// //             this.getCourseHistory()
// //             this.getHFHistory()
// //         },

// //         /**
// //          * 获取课件历史信令
// //          */
// //         getPPTHistory() {
// //             sdk.S().getHistoryData(SIGNAL_ID.ppt)
// //         },

// //         /**
// //          * 获取教室信令
// //          */
// //         getCourseHistory() {
// //             sdk.S().getHistoryData(SIGNAL_ID.course)
// //         },

// //         getHFHistory() {
// //             sdk.S().getHFHistory({
// //             moduleId: 'chat',
// //             })
// //         },

// //         /**
// //          * 基本字段
// //          */
// //         basicFields(data) {
// //             return hasOwn(data, 'msgId')
// //             ? data
// //             : {
// //                 msgId: SIGNAL_ID.course,
// //                 msgtype: SIGNAL_TYPE.save,
// //                 data,
// //             }
// //         },

// //         /**
// //          * 编码
// //          */
// //         encode(obj) {
// //             const result = {}
// //             for (const k in obj) {
// //             if (hasOwn(obj, k)) {
// //                 const val = obj[k]
// //                 // object 和 array需要加标识，防止被信令修改
// //                 if (isPlainObject(val) || Array.isArray(val)) {
// //                 result[k] = this.flag + JSON.stringify(val)
// //                 } else if (isPrimitiveJSONValue(val)) {
// //                 result[k] = val
// //                 } else {
// //                 // fallback
// //                 result[k] = ''
// //                 console.warn(val, '不能json化')
// //                 }
// //             }
// //             }
// //             return JSON.stringify(result)
// //         },

// //         /**
// //          * 解码
// //          */
// //         decode(str) {
// //             let obj = null

// //             if (isPlainObject(str) || Array.isArray(str)) {
// //             return str
// //             }

// //             if (isJSON(str)) {
// //             obj = parseJSON(str)
// //             } else {
// //             // fallback
// //             obj = {}
// //             console.warn(str, '历史信令格式应该是object')
// //             }

// //             const result = {}
// //             for (const k in obj) {
// //             const val = obj[k]
// //             if (typeof val === 'string' && val.startsWith(this.flag)) {
// //                 result[k] = parseJSON(val.substr(this.flag.length))
// //             } else {
// //                 result[k] = val
// //             }
// //             }
// //             return result
// //         },

// //         /**
// //          * 存储教室信令的完整记录
// //          * 发送和接收合并之后的结果
// //          */
// //         courseStore: Object.create(null),

// //         /**
// //          * 缓存教室信令
// //          * @param history
// //          */
// //         cacheCourseSignal(history) {
// //             for (const key in history) {
// //             const isValidSignal = key.startsWith('data_')
// //             if (isValidSignal) {
// //                 this.courseStore[key] = history[key]
// //                 hooks.common.signal.storeUpdated.call(key, history[key], this.courseStore)
// //             }
// //             }
// //         },

// //         /**
// //          * 根据key删除缓存教室信令
// //          * @param keys
// //          */
// //         delCacheCourseSignal(keys) {
// //             keys.forEach(key => {
// //             delete this.courseStore[key]
// //             })
// //         },
// //     }
// // }
// // export default setup()

// // 数组迭代方法
// // forEach
// // fill
// // map
// // reduce

// // every  ==  some
// // (全满足)    (满足一个)
// // entries == keys == values 
// // (键值对)    (键)      (值)


// // let people = {}
// // Object.defineProperty(people, 'name', {
// //   set(val) {
// //     return val === people['name'] ? val : (people['name'] = val)
// //   },
// //   get() {
// //     return people['name']
// //   }
// // })



// // class Dep {
// //   subs
// //   id
// //   constructor() {
// //     this.subs = []
// //     this.id = uid++
// //   }
// //   addSub(val) {
// //     this.subs.push(val)
// //   }
// //   deleteSub() {
// //     this.subs
// //   }
// //   notice() {

// //   }
// // }


// // module.export = {
// //   data() {
// //     return {
// //       testWatch: false,
// //     }
// //   },
// //   mounted() {
// //     this.$watch(this.testWatch, {
// //       handler: ()=>{

// //       },
// //       immediate: true
// //     })
// //   }
// // }




// Function.prototype.callss = function(context) {
//   let context = context || window
//   context.fn = this
//   let args = []
//   for (let index = 1; index < arguments.length; index++) {
//     args.push('arguments[' +index+ ']')
//   }
//   let result = eval('context.fn(' +args+ ')')
//   delete context.fn
//   return result
// }


// Function.prototype.applyss = function(context, arr) {
//   let context = Object(context) || window
//   let result
//   context.fn = this
//   if(!arr) {
//     result = context.fn()
//     return result
//   }
//   let arg = []
//   for (let index = 0; index < arguments.length; index++) {
//     arg.push('arguments['+index+']')
//   }
//   result = eval('context.fn(' + arg + ')')
//   delete context.fn
//   return result
// }

// Function.prototype.binds = function(context) {
//   // let fun = this
//   // return function() {
//   //   return fun.apply(context)
//   // }
//     if(typeof this !== 'function') {
//       return new Error('error')
//     }
    
//     let fun = this
//     // 类数组转数组
//     let argus = Array.prototype.slice.call(arguments, 1)
//     return function() {
//       // 类数组转数组
//       let arg = Array.prototype.slice.call(arguments)
//       return fun.apply(context, argus.contant(arg))
//     }

// }


// function red(){
//   console.log('red');
// }
// function green(){
//   console.log('green');
// }
// function yellow(){
//   console.log('yellow');
// }

// function light(callback, time) {
//   return new Promise((reslove, reject) => {
//     setTimeout(()=>{
//       callback && callback()
//       reslove()
//     },time)
//   })
// }

// function setup() {
//   Promise.resolve()
//         .then(function(){
//             return light(red, 3000)
//         })
//         .then(function(){
//           return light(red, 2000)
//         })
//         .then(function(){
//           return light(red, 1000)
//         })
//         .then(function(){
//           setup()
//         })
// }
// setup()

// class Promises {
//   constructor() {

//   }
//   then() {

//   }
// }

// function debounce(fn, time = 300, immediate = false) {
//   let timer = null
//   let immediates = immediate
//   return function (...args) {
//     if(immediates) {
//       fn.call(this, ...args)
//       immediates = false
//     }
//     clearTimeout(timer)
//     timer = setTimeout( () => {
//       fn.call(this, ...args)
//       immediates = immediate
//     }, time )
//   }
// }
// function throttle(fn, time = 300) {
//   let canRun = true; // 通过闭包保存一个标记
//   return function () {
//     if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
//     canRun = false; // 立即设置为false
//     setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
//       fn.apply(this, arguments);
//       // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
//       canRun = true;
//     }, time);
//   };
// }

// /**
//  * 防抖处理
//  */
// export function debounce(fn, time = 200, immediate = false) {
//   let timer = null
//   let isImmediate = immediate

//   return function (...args) {
//     if (isImmediate) {
//       fn.call(this, ...args)
//       isImmediate = false
//     }
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       fn.call(this, ...args)
//       isImmediate = immediate
//     }, time)
//   }
// }



// function debunces(fn, time = 1000, immediate = true) {
//     let timer = null,
//         isImmediate = immediate

//     return function(...arg) {
//       if(immediate) {
//         fn.call(this, ...arg)
//         isImmediate = false
//       }
//       clearTimeout(timer)
//       timer = setTimeout(() => {
//         fn.call(this, ...args)
//         isImmediate = immediate
//       }, time)
//     } 
// }

// /**
//  * 节流处理
//  */
// export function throttle (fn, delay = 300) {
//   let last = 0
//   return function(...args) {
//     const cur = Date.now()
//     if (cur - last > delay) {
//       fn.call(this, ...args)
//       last = Date.now()
//     }
//   }
// }


// function throttles(fn, time = 1000) {
//   let last = 0
//   return function(...args) {
//       const cur = Date.now()
//       if(cur - last > time) {
//         fn.call(this, ...args)
//         last = Date.now()
//       }
//   }
// }




// setter => departFocus.notice => watcher => Patch



// // 寄生组合继承
// function Child(name, age) {
//   this.name = name
//   this.age = age
// }
// Child.prototype.sayName = function() {console.log(this.name)}

// function Parent(name, age, sex) {
//   this.sex = sex
//   Child.call(this, name, age)
// }
// Parent.prototype = objects(Child.prototype)
// Parent.prototype.constructor = Parent
// function objects(prop) {
//   function f(){}
//   f.prototype = prop
//   return new f()
// }

































(function() {
   

  let demos = {

  }

  function overLoad(obj, name, fn) {
      let test = obj[name]
      obj[name] = function() {
        if (fn.length === arguments.length) {
          return fn.apply(this, arguments)
        } else if (typeof test === "function") {
          return test.apply(this, arguments)
        }
      }
  }

  function fn0() {
    console.log('arg 0')
  }

  function fn1(arg) {
    console.log('arg 1', arg)
  }

  function fn2(arg1, arg2) {
    console.log('arg 2', arg1, arg2)
  }


  overLoad(demos, 'fn', fn0)
  overLoad(demos, 'fn', fn1)
  overLoad(demos, 'fn', fn2)
  
  console.log(demos.fn(), demos.fn(21), demos.fn(21,21))
  

})()




全局     局部
      块级  函数 

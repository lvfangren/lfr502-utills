# 前端路由一探

## 后端路由
我眼中理解的后端路由就是浏览器URL变化，请求资源变化，然后后端做相应的资源返回

## 前端路由

1. hashchange事件
  H5新增hashchange事件用来监听url参数的变化。
  注：hashchange的事件处理程序绑在window下处理。存在浏览器兼容性问题
  能力检测：
    ```
      var isSupport=('hashchange' in window)&&(document.documentMode===undefined||document.documentMode)
    ```

2. 前端路由实现方式
  * 页面不刷新条件下改变URL:
    1. 利用URL的hash值
      URL的每次变化都会导致页面刷新，而利用hash的方式可以让页面不刷新，即不发出请求。
    2. H5的history
      利用history相关API：pushState和replaceState方法，它们改变URL地址，但是请求不发送  
  * 捕捉url变化，执行页面替换

3. 前端路由
    通过hashchange事件我们可以知道URL的参数什么时候发生了变化，什么时候该有所反应。通过状态管理相关API，在不刷新页面下改变浏览器的URL。
  主要是history.pushState()方法。


## vue-router
1. 在vue中使用vue-router
  * 引入vue-router库
    ```
    import VueRouter from 'vue-router';
    ```
  * vue中通过use方法加载vue-router
    ```
      Vue.use(VueRouter);
    ```
  * vue-router实例化
  ```
  const router = new VueRouter({
    'linkActiveClass': 'active',
    routes // routes是写好的路由配置文件
  });
  ```
  * Vue实例挂载vue-router
  ```
  new Vue({
      router
    }).$mount('#app')
  ```
  注：上述过程可能与脚手架直接搭出来的项目结构有点区别。请灵活观看，这里不多写。


2.  vue中通过use方法加载vue-router
  实际是加载VueRouter中的 install 方法。install 完成 Vue 实例对 VueRouter 的挂载过程.(源码见：(vue-router/src/install.js)[https://github.com/vuejs/vue-router/blob/dev/src/install.js])
  ```
    //源码：

    export function install (Vue) {
    ...  

    //混入 (mixins)两个钩子函数
    //当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。(混入概念)[https://cn.vuejs.org/v2/guide/mixins.html]
    Vue.mixin({
    beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router

        //调用实例的init方法
        this._router.init(this)

        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed () {
      registerInstance(this)
    }
  })
  //做数据劫持，修改$router，$route属性的getter
  Object.defineProperty(Vue.prototype, '$router', {
    get () { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this._routerRoot._route }
  })
//全局注册RouterView，RouterLink组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)


  ...
}
  ```

3. 实例化vue-router(源码见： (vue-router/src/index.js)[https://github.com/vuejs/vue-router/blob/dev/src/index.js])
```
//在Vue项目中写路由配置
import Router from 'vue-router'
new Router({
  mode:'history',//不传这个参数，默认值为hash
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```
```
//源码：
export default class VueRouter {
  ...
  constructor (options: RouterOptions = {}) {
    this.app = null
    this.apps = []
    this.options = options
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    this.matcher = createMatcher(options.routes || [], this)

    let mode = options.mode || 'hash' //默认路由方法hash
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
  if (this.fallback) {
    mode = 'hash'
  }
  if (!inBrowser) {
    mode = 'abstract'
  }
  this.mode = mode

//判断浏览器对路由方式的兼容性从而实现选择
  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base)
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback)
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base)
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, `invalid mode: ${mode}`)
      }
  }

  //init方法
  init (app: any /* Vue component instance */) {
    process.env.NODE_ENV !== 'production' && assert(
      install.installed,
      `not installed. Make sure to call \`Vue.use(VueRouter)\` ` +
      `before creating root instance.`
    )

//在inistall方法执行时调用init方法传入Vue实例的this
    this.apps.push(app)

    // main app already initialized.
    if (this.app) {
      return
    }

    this.app = app

    const history = this.history

    if (history instanceof HTML5History) {
      //history.transitionTo路由方法的切换
      history.transitionTo(history.getCurrentLocation())
    } else if (history instanceof HashHistory) {
      const setupHashListener = () => {
        history.setupListeners()
      }
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      )
    }
    //监听路由变化
    history.listen(route => {
     this.apps.forEach((app) => {
       app._route = route
     })
   })
 }


```
注：这部分的源码有TypeScript的写法，感觉就是在JS的基础上加了个类型指定，还有就是让一些概念在语法上显得更严谨。可以参考下

3. Vue实例挂载vue-router
此时router实例对象会被挂到Vue的this.$options选项上
```
new Vue({
  router
  })

```

4. vue-router中 H5的history 实现（源码见：(vue-router/src/history/html5.js)[https://github.com/vuejs/vue-router/blob/dev/src/history/html5.js]）

```
//源码：
//HTML5History对象继承History对象
export class HTML5History extends History {
constructor (router: Router, base: ?string) {
  super(router, base)

}
//下面的方法具体略
//前进到第几页
go(){}
//  
push(){}  
replace(){}
ensureURL(){}
getCurrentLocation (){}
}
export function getLocation (base: string): string {
  let path = window.location.pathname
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length)
  }
  return (path || '/') + window.location.search + window.location.hash
}        
```


5.


; 测试下git rebase命令

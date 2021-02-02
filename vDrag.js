// 解决BUG
export default function (Vue, options) {
    // let options = null
    let isStartDown = false


    let mouseLocalX = null,
        mouseLocalY = null


    function handleMouseDown(event) {
        let target = event.target


        mouseLocalX = event.clientX - target.getBoundingClientRect().left
        mouseLocalY = event.clientY - target.getBoundingClientRect().top

        // 解决特殊元素默认开始的拖拽事件，例如：img元素
        target.ondragstart = function() {
            return false
        }

        document.body.append(target)

        if (!isStartDown) {
            target.style.position = 'absolute'
            isStartDown = true
        }
    }


    function handleMouseMove(event) {
        let target = event.target

        target.style.left = event.clientX - mouseLocalX + 'px'
        target.style.top = event.clientY - mouseLocalY + 'px'

        // target.style.left = event.pageX - target.offsetWidth + 'px'
        // target.style.top = event.pageY - target.offsetHeight + 'px'

        // target.style.left = event.pageX - (event.clientX - target.getBoundingClientRect().left) + 'px'
        // target.style.top = event.pageY - (event.clientY - target.getBoundingClientRect().top) + 'px'

        // target.style.left = event.clientX + 'px'
        // target.style.top = event.clientY + 'px'

    }

    function handleMouseUp(event) {
        let target = event.target
        document.removeEventListener('mousemove', handleMouseMove)
        isStartDown = false

    }


    function bind(el, binding) {
        console.log(options, 'optionsoptions');

        // options = binding.arg
        el.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseup', handleMouseUp)
    }


    function unbind() {
        document.removeEventListener('mousedown', handleMouseDown)
        el.removeEventListener('mouseup', handleMouseUp)
    }

    Vue.directive('drag', {
        bind,
        unbind,

        // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        // bind: function () {},

        // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        // inserted: function () {},

        // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
        // update: function () {},

        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        // componentUpdated: function () {},

        // 只调用一次，指令与元素解绑时调用。
        // unbind: function () {}
    })
}
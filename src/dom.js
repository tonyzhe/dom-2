window.dom={
    find(selector) {
        return document.querySelectorAll(selector)
    },
    style(node,name,value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                const object = name
                for (let key in object) {
                    node.style[key]=object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null,nodeList[i])
        }
    }
}

const div = dom.find('#test>.red')[0]
console.log(div)

dom.style(div, 'color', 'red')

const divList = dom.find('.red')
dom.each(divList, (n) => {
    console.log(n)
})

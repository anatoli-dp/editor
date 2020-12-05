import append from './functions/append'

export default function $Element (node) {
    this[0] = node
}

$Element.prototype = {
    append: function (node) {
        append(this, node)
    },

    content: function (content) {
        this[0].innerHTML = content
    },

    show: function () {
        this[0].style.display = 'block'
    },

    hide: function () {
        this[0].style.display = 'none'
    }
}
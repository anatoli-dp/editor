import $Element from './$Element'
import $Component from './$Component'

import find from './functions/find'
import make from './functions/make'

export default {
    find: function (selector) {
        return new $Element(find(document, selector))
    },

    build: function (struct) {
        return new $Component(struct)
    },

    make: function (selector) {
        return new $Element(make(selector))
    }
}
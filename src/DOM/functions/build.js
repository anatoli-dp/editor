import DOM from '../index'

export default function (struct) {
    return build(struct)
}

function build (struct) {
    let eos = false
    let count = 0
    let com = []
    let css = []

    while (!eos) {
        let temp = null
        let part = struct[count]

        if (part) {
            if (typeof part === 'string') {
                temp = DOM.make(part)
                com.push(temp)
            } else if (typeof part === 'object') {
                if (part instanceof Array) {
                    let newPart = build(part)
                    com.push(newPart[0])

                    if (newPart[1].length > 0) {
                        //
                    }
                } else {
                    //
                }
            }
        } else {
            eos = true
        }

        count++
    }

    return [com, css]
}
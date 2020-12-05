import $Element from '../$Element'
import $Component from '../$Component'

export default function (root, node) {
    if (node instanceof $Element) {
        root[0].appendChild(node[0])
    } else if (node instanceof $Component) {
        appendParts(root, node[0])
    }
}

function appendParts (root, parts) {
    let eop = false
    let count = 0

    while (!eop) {
        let part = parts[count]
        let nextPart = parts[count + 1]

        if (part) {
            if (part instanceof $Element) {
                root.append(part)

                if (nextPart instanceof Array) {
                    appendParts(part, nextPart)
                    count++
                }
            }
        } else {
            eop = true
        }

        count++
    }
}
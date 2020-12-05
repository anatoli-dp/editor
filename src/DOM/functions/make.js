export default function (selector) {
    let selectors = selector.split('.')
    let el = null

    for (let i = 0; i < selectors.length; i++) {
        if (i === 0) {
            if (selectors[i].includes('#')) {
                let split = selectors[i].split('#')

                el = document.createElement(split[0])
                el.id = split[1]
            } else {
                el = document.createElement(selectors[i])
            }
        } else {
            el.classList.add(selectors[i])
        }
    }

    return el
}
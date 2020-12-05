import build from './functions/build'

export default function $Component (struct) {
    let temp = build(struct)

    this[0] = temp[0]
    this[1] = temp[1]
}
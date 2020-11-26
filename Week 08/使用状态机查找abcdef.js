// I abcdefa groot
function match(string) {
    let state = start
    for (const c of string) {
        state = state(c)
    }
    return state === end
}
function start(c) {
    if (c === 'a')
        return foundA
    else
    // reConsume
        return start(c)
}
// foundA 函数查找字符串b
function foundA(c) {
    if (c === 'b')
        return foundB
    else
    // reConsume
        return start(c)
}
function foundB(c) {
    if (c === 'c')
        return foundC
    else
    // reConsume
        return start(c)
}
function foundC(c) {
    if (c === 'd')
        return foundD
    else
    // reConsume
        return start(c)
}
function foundD(c) {
    if (c === 'e')
        return foundE
    else 
    // reConsume
        return start(c)
}
function foundE(c) {
    if (c === 'f')
        return end
    else
    // reConsume
        return start(c)
}
// trap 函数
function end(c) {
    return end
}
console.log(match('I abcdeafa groot')) 

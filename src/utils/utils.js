/**
 * 关键字变色
 * @params content 内容
 * @params keyword 关键词
 * @params tagName 标签名
 */
export function warpTag(content, keyword, tagName) {
    const a = content.toLowerCase()
    const b = keyword.toLowerCase()

    const indexOf = a.indexOf(b)
    const c = indexOf > -1 ? content.substr(indexOf, keyword.length) : ''
    const val = `<${tagName} style="color:#0c73c2;">${c}</${tagName}>`
    const regS = new RegExp(keyword, 'gi')
    return content.replace(regS, val)
}
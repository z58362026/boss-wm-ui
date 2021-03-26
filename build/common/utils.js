const path = require('path')
const constant = require('./constant')
const fs = require('fs')
/**
 * 判断刚路径是否含有index.js
 * @param {String} dir
 */
function hasIndexJs(dir) {
    let dirs = []
    try {
        dirs = fs.readdirSync(dir)
    } catch (e) {
        dirs = null
    }
    return dirs && dirs.includes('index.tsx')
}
/**
 * 获取指定入口的文件夹的路径
 * @param {String} entryDir
 */
const getEntries = (entryDir) => {
    const realPath = path.join(constant.ROOT, entryDir)
    let dirs = fs.readdirSync(realPath)
    const result = {}
    dirs = dirs
        .filter((dir) => {
            return hasIndexJs(path.join(realPath, dir))
        })
        .forEach((dir) => {
            result[dir] = path.join(realPath, dir)
        })
    return result
}
/**
 * 获取所有组件样式
 */
const getStyles = (entryDir) => {
    const realPath = path.join(constant.ROOT, entryDir)
    let dirs = fs.readdirSync(realPath)
    const result = {}
    const EXCLUDES = ['.DS_Store']
    dirs = dirs
        .filter((dir) => !EXCLUDES.includes(dir))
        .forEach((dir) => {
            const [name] = dir.split('.')
            result[name] = path.join(realPath, dir)
        })
    return result
}
module.exports = { getEntries, getStyles }

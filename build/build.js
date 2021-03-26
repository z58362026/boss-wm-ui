const webpack = require('webpack')
const gen_package_entry = require('./compiler/gen-package-entry')
const path = require('path')
const gulp = require('gulp')
const constant = require('./common/constant.js')

function createHomeEntry(cb) {
    gen_package_entry.genPackageEntry({
        outputPath: path.join(constant.HOME_DIR, '/index.ts'),
    })
    cb()
}

function webpackTask(cb) {
    const webpackConf = require('./webpack.components')
    webpack(webpackConf, (error) => {
        if (error) {
            cb(error)
            return
        }
        console.log(error)
        cb()
    })
}

function webpackTemplateTask(cb) {
    const webpackConf = require('./webpack.template')
    webpack(webpackConf, (error) => {
        if (error) {
            cb(error)
            return
        }
        console.log(error)
        cb()
    })
}

gulp.task(
    'default',
    gulp.series(createHomeEntry, webpackTask, webpackTemplateTask),
)

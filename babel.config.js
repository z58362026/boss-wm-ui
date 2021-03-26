module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@vue/babel-plugin-jsx',
        '@babel/plugin-transform-object-assign',
    ],
}

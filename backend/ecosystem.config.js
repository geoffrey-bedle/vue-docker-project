module.exports = [
    {
        script: 'src/app.js',
        name: 'api',
        exec_mode: 'cluster',
        instances: 'max'
    }
]
const exprss = require('express');
const app = exprss()
const router = require('./router')

app.use(router)
app.use('/node_modules',exprss.static('node_modules'))
app.engine('html', require('express-art-template'));
app.listen(3002,()=>{
    console.log('监听。。3002')
})
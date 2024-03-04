const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()


//设置允许跨域访问该服务.

app.all('*', function (req, res, next) {
    // google需要配置，否则报错cors error
//   res.setHeader('Access-Control-Allow-Credentials', 'true')
  // 允许的地址,http://127.0.0.1:9000这样的格式
//   res.setHeader('Access-Control-Allow-Origin', req.get('Origin'))
  // 允许跨域请求的方法
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'POST, GET, OPTIONS, DELETE, PUT'
//   )
  // 允许跨域请求header携带哪些东西
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since'
//   )
  res.setHeader('Content-Type', 'application/json;charset=utf-8');
   // res.header('Access-Control-Allow-Origin', '*');
   
   // //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
   
   // res.header('Access-Control-Allow-Headers', 'Content-Type');
   
   // res.header('Access-Control-Allow-Methods', 'POST');
   
   // res.header('Content-Type', 'application/json;charset=utf-8');
   
   next();
   
   });

  app.use(cookieParser()) 

  // 解析application/json数据
const jsonParser = bodyParser.json()
 // 解析application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended:false})

app.post('/login',urlencodedParser,(req,res)=>{
   console.log(req);
const {userName,password} = req.body
console.log(userName);
console.log(password);
res.cookie('username','userName')
// if(userName==='admin'&&password==='123'){
//    res.send('{data:成功}')
// }else{
//    res.send('{data:错误}')
// }
})


app.get('/getRequest',(req,res)=>{
   res.send('{data:get请求成功}')
})


app.listen(9000,'0.0.0.0',()=>{
   console.log('0.0.0.0:9000运行成功');
})
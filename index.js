// 백엔드 시작점
// --save express라는 패키지를 사용하고 있음을 알림

const express = require('express') //express모듈을 가져옴
const app = express() //express function을 이용해서 새로운 express앱을 만듦
const port = 5000 // 포트


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cjsgksla:chk0823!@cluster0.cb05dvm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))// 연결되었다는 로그
  .catch(err => console.log(err))// 에러 발생시 보여주는 로그

app.get('/', (req, res) => {// '/'는 루트디렉토리에 Hello World 출력
  res.send('Hello World!')
})

app.listen(port, () => { // 포트 5000번에서 앱실행
  console.log(`Example app listening on port ${port}`)
})
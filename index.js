// 백엔드 시작점
// --save express라는 패키지를 사용하고 있음을 알림

const express = require('express') //express모듈을 가져옴
const app = express() //express function을 이용해서 새로운 express앱을 만듦
const port = 5000 // 포트
const bodyParser = require('body-parser')

const config = require('./config/key')

const { User } = require("./models/User");

//application/x-www-form-urlencoded: url데이터를 분석해서 가져올 수 있게
app.use(bodyParser.urlencoded({extended: true}))
//application/json: json타입으로 된 것을 분석해서 가져올 수 있게
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(() => console.log("MongoDB Connected..."))// 연결되었다는 로그
  .catch(err => console.log(err))// 에러 발생시 보여주는 로그

app.get('/', (req, res) => {// '/'는 루트디렉토리에 Hello World 출력
  res.send('Hello World!')
})


//회원가입을 위한 라우트
app.post('/register',(req, res) => {
//회원 가입할때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
  
  const user = new User(req.body) //인스턴스 생성
  user.save((err, userInfo) => { //콜백함수란? 인자로 함수를 넣는 것 -> 왜? 비동기적, 즉 동시작업을 할 수 있게 하기 위하여
    if(err) return res.json({ success: false, err}) //
    return res.status(200).json({
      success: true
    })
  }) //정보들이 유저모델에 저장
})
app.listen(port, () => { // 포트 5000번에서 앱실행
  console.log(`Example app listening on port ${port}`)
})
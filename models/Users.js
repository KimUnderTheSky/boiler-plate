const mongoose = require('mongoose');


const userSchema = mongoose.Schema({ //데이터 적힐 형식
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // 스페이스 없애는 역할
        unique: 1
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //관리자, 일반유저 등등의 역할
        default: 0
    },
    image: String,
    token: { // 토큰을 이용하여 유효성 관리 가능
        type: String
    },
    tokenExp: { //토큰 유효기간
        type: Number
    },

})

const User = mongoose.model('User', userSchema) // schema를 model로 감싸줌

module.exports = {User} //다른 곳에서 사용할 수 있게 export
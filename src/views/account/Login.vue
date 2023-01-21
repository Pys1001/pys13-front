<template>
  <RouterView/>
  <div class="body1">
    <div class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3"><span>登录</span><span>注册</span></h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log">
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">登录</h4>
                        <div class="form-group">
                          <input type="email" name="logemail" class="form-style" placeholder="邮箱" id="logemail"
                          ref="getLoginEm" autocomplete="off">
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="logpass" class="form-style" placeholder="密码" id="logpass"
                          ref="getLoginPw" autocomplete="off">
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" @click="onSubmit()" class="btn mt-4">提交</a>
                        <p class="mb-0 mt-4 text-center"><a href="#0" class="link">忘记密码?</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-4 pb-3">注册</h4>
                        <div class="form-group">
                          <input type="text" name="logname" class="form-style" placeholder="名称" id="logname"
                            ref="getName" autocomplete="off">
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="email" name="logemail" class="form-style" placeholder="邮箱" id="logemail"
                            ref="getEmail" autocomplete="off">
                          <i class="input-icon uil uil-at"></i>
                          <span><a @click="getEmailCode()" class="btn-block">获取验证码</a></span>
                        </div>
                        <div class="form-group mt-2">
                          <input type="password" name="logpass" class="form-style" placeholder="密码" id="logpass"
                            ref="getPassword"  autocomplete="off">
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" @click="onRegister()" class="btn mt-4">提交</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import aes from '../../util/aesUtils'

export default {
  name: 'Login',
  components: {

  },
  setup() {
    var pass = false;
    return{
      pass
    }
  },

  methods: {
    onSubmit() {
      var password = this.$refs.getLoginPw.value
      var email = this.$refs.getLoginEm.value
      var account = {password:password,email:email}
      axios.post("/account/viewlogin", account).then((resp) => {
        console.log(resp.data)
        switch(resp.data.status){
          case 0:router.push("/home");return;
          case 1:alert("账户不存在");return;
          case 2:alert("密码错误");return;
        }
     
      })
    },
    onRegister() {
      var name = this.$refs.getName.value
      var password = this.$refs.getPassword.value
      var email = this.$refs.getEmail.value
      var account = {name:name,password:password,email:email}
      if(!name||!password||!email){
        alert("信息填写不完整！")
        return;
      }
      axios.get("https://api.wer.plus/api/min",
      {params:{t:name}})
      .then((resp)=>{
        if(resp.data.num!=0){
          alert("昵称不合法!")
          return;
        }
        if(!this.pass){
          alert("请获取邮箱验证码！")
          return;
        }
        axios.post("/account/register",account).then((respp)=>{
          console.log(respp.data)
        })
      })
    },
    getEmailCode() {
      var regex = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
      var email = this.$refs.getEmail.value
      if (email.match(regex)) {
        axios.get("/account/getEmailCode/", 
        {params:{email}})
        .then((resp)=>{
          console.log(resp.data.data)
          var code = aes.decrypt(resp.data.data)
          console.log(code)
          var codeInput = prompt("请输入您邮箱内收到的验证码", "在此输入")
          if(code.toString()!=codeInput.toString()){
            alert("验证码错误!")
            return;
          }
          this.pass = true
        })
      } else (
        alert("邮箱格式错误！")
      )
    }
  }
}
   
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
@import url('https://unicons.iconscout.com/release/v2.1.9/css/unicons.css');

.body1 {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: fixed;
  font-family: 'Poppins', sans-serif;
  background-image: url(../../assets/layout.png);
  line-height: 1.7;
  color: #c4c3ca;
  overflow-x: hidden;
}

a {
  cursor: pointer;
  transition: all 200ms linear;
}

a:hover {
  text-decoration: none;
}

.link {
  color: #c4c3ca;
}

.link:hover {
  color: #ffeba7;
}

p {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7;
}

h4 {
  font-weight: 600;
}

h6 span {
  padding: 0 20px;
  text-transform: uppercase;
  font-size: medium;
  font-weight: 800;
  color: white;
}

.section {
  position: relative;
  width: 100%;
  display: block;
}

.full-height {
  min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

.checkbox:checked+label,
.checkbox:not(:checked)+label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}

.checkbox:checked+label:before,
.checkbox:not(:checked)+label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #102770;
  font-family: 'unicons';
  content: '\eb4f';
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked+label:before {
  transform: translateX(44px) rotate(-270deg);
}


.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #FFE4B5;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked~.card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}


.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.form-style {
  display: flex;
  align-items: center;
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, .2);
}

.btn-block {
  position: absolute;
  top: 0;
  right: 8px;
  height: 48px;
  font-size: 12px;
  line-height: 48px;
  color: #ffeba7;
  text-align: left;
}

.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  color: #ffeba7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-ms-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:-moz-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input::-webkit-input-placeholder {
  color: #c4c3ca;
  opacity: 0.7;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus:-ms-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus:-moz-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.form-group input:focus::-webkit-input-placeholder {
  opacity: 0;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
  border: none;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, .2);
}

.btn:active,
.btn:focus {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
}

.btn:hover {
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, .2);
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

@media (min-width:576px) {
  .container {
    max-width: 540px
  }
}

@media (min-width:768px) {
  .container {
    max-width: 720px
  }
}

@media (min-width:992px) {
  .container {
    max-width: 960px
  }
}

@media (min-width:1200px) {
  .container {
    max-width: 1140px
  }
}

.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto
}

@media (min-width:576px) {

  .container,
  .container-sm {
    max-width: 540px
  }
}

@media (min-width:768px) {

  .container,
  .container-md,
  .container-sm {
    max-width: 720px
  }
}

@media (min-width:992px) {

  .container,
  .container-lg,
  .container-md,
  .container-sm {
    max-width: 960px
  }
}

@media (min-width:1200px) {

  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 1140px
  }
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px
}

.justify-content-center {
  -ms-flex-pack: center !important;
  justify-content: center !important
}

.col-12 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%
}

.text-center {
  text-align: center !important
}

.align-self-center {
  -ms-flex-item-align: center !important;
  align-self: center !important
}

.pb-5,
.py-5 {
  padding-top: 3rem !important;
}

.pt-5,
.py-5 {
  padding-bottom: 3rem !important
}

.pt-sm-2,
.py-sm-2 {
  padding-top: .5rem !important
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important
}

.mr-auto,
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important
}

.mb-4,
.my-4 {
  color: white;
  margin-bottom: 1.5rem !important
}

.form-group {
  margin-bottom: 1rem
}

.mt-2,
.my-2 {
  margin-top: .5rem !important
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important
}
</style>
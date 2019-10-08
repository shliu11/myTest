<template>
  <div>

  <!--  <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName" id="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password" id="password">

      <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
      <div style="margin-top: 10px">
        <span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>-->

    <div id="login">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">

        <el-form-item prop="username">
          <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名" auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input  v-model="loginForm.password"  name="password" placeholder="请输入密码" auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item >
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>




</template>

<script>
    import request from '@/utils/request'
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    username: '',
                    password: '',
                }
            }
        },
        loginRules: {//element-ui自带的校验方法
            username: [
                {
                    required: true,
                    message: "请输入用户名",
                    trigger: "blur"
                }
            ],
            password: [
                {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }
            ]
        },
        //在methods加上处理方法
        methods: {
            handleLogin (){
                this.$refs.loginForm.validate((valid) => {
                    if(valid){

                        loginReq(this.loginForm.username,this.loginForm.password).then((res) => {
                            console.log(res.data.status);
                            this.$router.push({
                                name: "Home",
                                params: {
                                    username: this.loginForm.username
                                }
                            });
                        })
                    }else{
                        console.log('用户名或密码错误')
                        this.$message.error("用户名或密码错误");
                    }
                })
            },

        }
    };

    export function loginReq(username,password) {
        return request.post('/login.json',{
            loginName: username,
            loginPassword: password
        })
    }
</script>

<style scoped>

</style>

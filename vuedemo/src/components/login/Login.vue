<template>
  <div>

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
                },
                loginRules: {//element-ui自带的校验方法，loginRules为自定义命名
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
                }
            }
        },

        //在methods加上处理方法
        methods: {
            handleLogin (){
                this.$refs.loginForm.validate((valid) => {//单纯按loginRules规则验证是否有值
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
            userName: username,
            userPassword: password
        })
    }
</script>

<style scoped>

</style>

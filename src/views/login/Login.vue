<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper_img" />
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        placeholder="请输入手机号"
        v-model="data.username"
      />
    </div>
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper_login-button" @click="handleClick">登陆</div>
    <div class="wrapper_login-link" @click="goRegister">立即注册</div>
  </div>
  <Toast v-if="toastData.toastShow" :message="toastData.toastMessage" />
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { post } from '../../utils/request'
import Toast, { usrToastEffect } from '../../components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup() {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: ''
    })
    const { toastData, showToast } = usrToastEffect()
    const handleClick = async () => {
      try {
        const result = await post('111/api/user/login', {
          username: data.username,
          password: data.password
        })
        if (result?.errno === 0) {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        } else {
          showToast('登陆失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    const goRegister = () => {
      router.push({ name: 'Register' })
    }
    return { handleClick, data, toastData, goRegister }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &_input {
    height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding-left: 0.16rem;
    &_content {
      width: 100%;
      border: none;
      outline: none;
      height: 0.48rem;
      background: none;
      font-size: 0.16rem;
      color: $content-logincolor;
      letter-spacing: 0;
      line-height: 24px;
    }
  }
  &_login-button {
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    height: 0.48rem;
    color: #f9f9f9;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.48rem;
    margin: 0.32rem 0.4rem 0 0.4rem;
  }
  &_login-link {
    font-size: 14px;
    color: $content-logincolor;
    margin-top: 0.14rem;
    text-align: center;
  }
}
</style>

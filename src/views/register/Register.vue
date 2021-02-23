<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper_img" />
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请输入密码" />
    </div>
    <div class="wrapper_input">
      <input class="wrapper_input_content" placeholder="请确认密码" />
    </div>
    <div class="wrapper_button">注册</div>
    <div class="wrapper_link" @click="goLogin">已有账号去登陆</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const goLogin = () => {
      router.push({ name: 'Login' })
    }
    return { goLogin }
  }
}
</script>

<style lang="scss" scoped>
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
    margin: 0 0.4rem 0.16rem 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    padding-left: 0.16rem;
    &_content {
      width: 100%;
      border: 0;
      outline: 0;
      background: none;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      line-height: 24px;
      height: 0.48rem;
    }
  }
  &_button {
    background: #0091ff;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    height: 0.48rem;
    color: #ffffff;
    line-height: 0.48rem;
    font-size: 0.16rem;
    letter-spacing: 0;
    text-align: center;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
  }
  &_link {
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
    text-align: center;
  }
}
</style>

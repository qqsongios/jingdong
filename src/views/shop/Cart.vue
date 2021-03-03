<template>
  <div class="cart">
    <div class="check">
      <div class="check_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
        />
        <div class="check_icon_tag">1</div>
      </div>
      <div class="check_info">
        总计：<span class="check_info_price">&yen;128</span>
      </div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.check {
  display: flex;
  height: 0.49rem;
  &_icon {
    position: relative;
    width: 0.76rem;
    text-align: center;
    &_img {
      margin: 0.11rem auto;
      width: 0.26rem;
      height: 0.26rem;
    }
    &_tag {
      position: absolute;
      top: 0.04rem;
      right: 0.14rem;
      width: 0.2rem;
      height: 0.2rem;
      background: crimson;
      color: #ffffff;
      border-radius: 50%;
      text-align: center;
      line-height: 0.2rem;
      transform: scale(0.5);
    }
  }
  &_info {
    flex: 1;
    padding-left: 0.05rem;
    font-size: 12px;
    color: #333333;
    line-height: 0.49rem;
    &_price {
      font-size: 18px;
      color: #e93b3b;
    }
  }
  &_btn {
    position: absolute;
    right: 0;
    width: 0.98rem;
    height: 100%;
    text-align: center;
    background: #4fb0f9;
    font-size: 14px;
    color: #ffffff;
    line-height: 0.49rem;
  }
}
</style>

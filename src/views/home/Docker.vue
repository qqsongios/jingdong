<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :class="{ 'docker_item': true, 'docker_item--active': index === 0 }"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker_title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      { icon: '&#xe665;', title: '首页' },
      { icon: '&#xe65f;', title: '购物车' },
      { icon: '&#xe60c;', title: '订单' },
      { icon: '&#xe660;', title: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
.docker {
  color: $content-fontcolor;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;

      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &_title {
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>

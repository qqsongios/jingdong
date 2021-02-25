<template>
  <div class="shop">
    <img :src="item.imgUrl" class="shop_img" />
    <div
      :class="{
        shop_content: true,
        'shop_content--border': borderHidden ? false : true
      }"
    >
      <div class="shop_content_title">{{ item.name }}</div>
      <div class="shop_content_tags">
        <span class="shop_content_tag">月售{{ item.sales }}</span>
        <span class="shop_content_tag">起送￥{{ item.expressLimit }}</span>
        <span class="shop_content_tag">基础运费￥{{ item.expressPrice }}</span>
      </div>
      <p class="shop_content_highlight">
        {{ item.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'borderHidden']
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;
  &_img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 1px solid #f1f1f1;
    }
    &_title {
      font-size: 0.16rem;
      color: $content-fontcolor;
      line-height: 0.22rem;
    }
    &_tags {
      font-size: 0.13rem;
      line-height: 0.18rem;
      color: $content-fontcolor;
      margin-top: 0.08rem;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      font-size: 0.13rem;
      line-height: 0.18rem;
      color: #e93b3b;
      margin: 0.08rem 0 0 0;
    }
  }
}
</style>

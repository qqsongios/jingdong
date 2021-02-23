<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <div v-for="item in nearbyList" :key="item.id" class="nearby_item">
      <img :src="item.imgUrl" class="nearby_item_img" />
      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.title }}</div>
        <div class="nearby_content_tags">
          <span
            v-for="(tagItem, index) in item.tags"
            :key="index"
            class="nearby_content_tag"
            >{{ tagItem }}</span
          >
        </div>
        <p class="nearby_content_highlight">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup() {
    const nearbyList = [
      {
        id: 1,
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        title: '沃尔玛',
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-weight: normal;
    font-size: 0.18rem;
    color: $content-fontcolor;
  }
  &_item {
    display: flex;
    padding-top: 0.12rem;
    &_img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &_content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #f1f1f1;
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

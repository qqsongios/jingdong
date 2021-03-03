<template>
  <div class="wrapper">
    <div class="search">
      <div class="search_back iconfont" @click="handleBack">&#xe6db;</div>
      <div class="search_content">
        <span class="search_content_icon iconfont">&#xe647;</span>
        <input class="search_content_input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo :item="item" :borderHidden="true" v-show="item.imgUrl" />
  </div>
  <Content />
  <Cart />
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'
// 获取店铺信息
const useGetShopItemEffect = () => {
  const data = reactive({ item: {} })
  const route = useRoute()
  const getShopItem = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getShopItem }
}
// 返回按钮事件
const useGoBack = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return handleBack
}

export default {
  name: 'Shop',
  components: { ShopInfo, Content, Cart },
  setup() {
    const { item, getShopItem } = useGetShopItemEffect()
    getShopItem()
    const handleBack = useGoBack()
    return { item, handleBack }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0.18rem;
}
.search {
  display: flex;
  height: 0.32rem;
  margin: 0.18rem 0 0.04rem 0;
  line-height: 0.32rem;
  &_back {
    width: 0.29rem;
    color: #b6b6b6;
    line-height: 0.32rem;
    font-size: 0.24rem;
  }
  &_content {
    display: flex;
    flex: 1;
    height: 0.32rem;
    background: #f5f5f5;
    border-radius: 16px;
    &_icon {
      width: 0.44rem;
      height: 0.32rem;
      text-align: center;
    }
    &_input {
      display: block;
      width: 100%;
      border: none;
      background: none;
      outline: none;
      font-size: 14px;
      color: #333333;
      line-height: 16px;
      padding-right: 0.2rem;
    }
  }
}
</style>

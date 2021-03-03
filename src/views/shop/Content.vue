<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category_item: true,
          'category_item-acctive': currentTab === item.tab
        }"
        v-for="item in categories"
        :key="item.name"
        @click="
          () => {
            handhandleTabClick(item.tab)
          }
        "
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product_item" v-for="item in list" :key="item._id">
        <img class="product_item_img" :src="item.imgUrl" />
        <div class="product_item_content">
          <h4 class="product_item_title">{{ item.name }}</h4>
          <p class="product_item_slae">月售 {{ item.sales }} 件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>{{ item.price }}
            <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product_number">
          <span
            class="product_number_minus"
            @click="
              () => {
                handleMinusCart(shopId, item._id)
              }
            "
            >-</span
          >
          {{ cartList?.[shopId]?.[item._id]?.count || 0 }}
          <span
            class="product_number_plus"
            @click="
              () => {
                handleAddCart(shopId, item)
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { get } from '../../utils/request'
import { useRoute } from 'vue-router'

// 请求商品
const CurrentListEffect = (tab, shopId) => {
  const data = reactive({ list: [] })
  const getShopProducts = async () => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: tab.value })
    if (result?.errno === 0 && result?.data?.length) {
      data.list = result.data
    }
    console.log(result)
  }
  watchEffect(() => {
    getShopProducts()
  })
  const { list } = toRefs(data)
  return { list }
}

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handhandleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handhandleTabClick }
}

export default {
  name: 'Content',
  setup() {
    const shopId = useRoute().params.id
    const { currentTab, handhandleTabClick } = useTabEffect()
    const { list } = CurrentListEffect(currentTab, shopId)
    const store = useStore()
    const { cartList } = toRefs(store.state)
    const handleAddCart = (shopId, productInfo) => {
      store.commit('AddCart', { shopId, productInfo })
    }
    const handleMinusCart = (shopId, productId) => {
      store.commit('minusCart', { shopId, productId })
    }
    return {
      list,
      categories,
      currentTab,
      handhandleTabClick,
      cartList,
      shopId,
      handleAddCart,
      handleMinusCart
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.7rem;
  bottom: 0.49rem;
  background: #ffffff;
}
.category {
  height: 100%;
  width: 0.76rem;
  background: #f5f5f5;
  border-radius: 2px;
  overflow-y: auto;
  &_item {
    height: 0.4rem;
    font-size: 14px;
    color: #333333;
    text-align: center;
    line-height: 0.4rem;
    &-acctive {
      background: #ffffff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: auto;
  &_item {
    position: relative;
    display: flex;
    margin: 0 0.16rem;
    padding: 0.12rem 0;
    border-bottom: 0.01rem solid #f1f1f1;
    &_img {
      width: 0.68rem;
      height: 0.68rem;
    }
    &_content {
      flex: 1;
      margin-left: 0.16rem;
    }
    &_title {
      margin: 0;
      font-size: 14px;
      color: #333333;
      line-height: 0.2rem;
    }
    &_slae {
      margin: 0.06rem 0;
      font-size: 12px;
      color: #333333;
      line-height: 16px;
    }
    &_price {
      margin: 0;
      font-size: 0.14rem;
      color: #e93b3b;
      line-height: 0.2rem;
    }
    &_yen {
      font-size: 0.12rem;
    }
    &_origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product_number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &_minus,
      &_plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        text-align: center;
        font-size: 0.2rem;
        line-height: 0.16rem;
      }
      &_minus {
        border: 0.01rem solid #333333;
        margin-right: 0.05rem;
      }
      &_plus {
        background: #0091ff;
        color: #ffffff;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>

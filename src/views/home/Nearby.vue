<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in nearbyList" :key="item._id" >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'

const useNearbyList = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    console.log(result?.data?.length)
    if (result.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
      console.log(nearbyList)
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyList()
    getNearbyList()
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
  a {
    text-decoration: none;
  }
}
</style>

<template>
  <div class="wrapper">
    <StaticPart />
    <div class="gap"></div>
    <Nearby />
  </div>
  <Docker />
</template>

<script >
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'

export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.2rem 0.018rem;
}
.gap {
  margin: 0 -0.18rem 0 -0.18rem;
  height: 0.1rem;
  background-color: #f1f1f1;
}
</style>

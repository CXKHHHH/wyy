<script>
import BScroll from '@better-scroll/core'
export default {
  props: {
    config: {
      type: Object,
      default: () => ({ scrollX: true, click:true }),
     
    },
  },
  mounted() {
    new BScroll(this.$refs.wrapper, this.config,);
   
    //  console.log(this.$refs.wrapper);
  },
};
</script>
<template>
  <div ref="wrapper" >
    <slot />
  </div>
</template>

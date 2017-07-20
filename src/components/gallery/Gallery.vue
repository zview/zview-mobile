<template>
  <div style="overflow: hidden">
    <div class="gallery">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Swiper from './core.js'

  export default {
    props: {
      direction: {
        type: String,
        default: 'vertical', //垂直
      },
      spacewidth: {
        type: [Number,String],
        default: 5
      },
    },

    data() {
      return {
        swiper: undefined,
        itemCount: 0
      }
    },

    mounted() {
      Vue.nextTick(() => {
        let container = this.$el.querySelector('.gallery')
        let swiper = new Swiper(container, {
          itemClass: '.gallery-item',
          spacewidth: this.spacewidth,
          direction: this.direction,
        });

        this.swiper = swiper;
        this.itemCount = swiper.count;
      })
    },

    destroyed() {
      if (this.swiper)
        this.swiper.destroy()
    },

    methods: {
      resize() {
        this.swiper.resize()
      }
    }
  }
</script>

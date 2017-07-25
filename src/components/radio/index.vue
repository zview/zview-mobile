<template>
  <div class="list von-radio">
    <div class="item item-borderless" :class="{'item-icon-left': align=='left', 'item-icon-right': align=='right'}"
           v-for="(option, i) in options" @click="onClick(i)"
    >
      <hairline-top v-if="i > 0"></hairline-top>
      <input type="radio" :name="radioId" v-model="selected" :value="i">
      <i
        class="icon ion-ios-checkmark"
        :class="{
          'grey': selected != i,
          'assertive': selected == i && theme == 'assertive',
          'positive': selected == i && theme == 'positive',
          'balanced': selected == i && theme == 'balanced',
          'energized': selected == i && theme == 'energized',
          'calm': selected == i && theme == 'calm',
          'royal': selected == i && theme == 'royal',
          'dark': selected == i && theme == 'dark'
        }"
      >
      </i>
      <span v-text="option"></span>

      <hairline-bottom v-if="i < options.length - 1"></hairline-bottom>
    </div>
  </div>
</template>
<script>
  import HairlineTop from '../list/HairlineTop'
  import HairlineBottom from '../list/HairlineBottom'

  export default {
    components: {
      HairlineTop,
      HairlineBottom
    },

    props: {
      options: {
        type: Array,
        required: true
      },

      value: {
        type: [Number, String],
        required: true
      },

      theme: {
        type: String,
        default: 'assertive'
      },

      align: {
        type: String,
        default: 'left'
      }
    },

    computed: {

    },

    data() {
      return {
        radioId: 'von-radio-' + Math.random().toString(36).substring(3, 6),
        selected: this.value,
      }
    },

    methods: {
      onClick(value) {
        this.selected = value;
        this.$emit('input', value);
      }
    }
  }
</script>

<template>

    <div class="von-accordion">

      <div class="list list-borderless list-accordion" :style="{height: getHeight(pindex, parent.height)}"
           v-for="(parent, pindex) in parents" :key="pindex">

        <item class="item-icon-right" @click.native="_on_parent_click(pindex)">
          <span v-text="parent.title"></span>
          <i class="icon ion-arrow-down-b"
            :class="{'rotated': parent_selected == pindex}"></i>
        </item>
        <transition name="von-accordion">
          <div v-show="parent_selected == pindex" class="accordion-content">

              <div class="list von-radio">
                  <div class="item item-borderless"
                       :class="{'item-icon-left': iconAlign=='left', 'item-icon-right': iconAlign=='right'}"
                       v-for="(option, cindex) in parent.options" @click="_on_child_click(pindex, cindex)"
                  >
                      <hairline-top v-if="cindex > 0"></hairline-top>
                      <input type="radio" :name="radioId" v-model="selected_model" :value="calc_value(pindex, cindex)">
                      <i class="icon ion-ios-checkmark"
                         :class="{
                          'grey': child_selected != calc_value(pindex, cindex),
                          'assertive': child_selected == calc_value(pindex, cindex) && theme == 'assertive',
                          'positive': child_selected == calc_value(pindex, cindex) && theme == 'positive',
                          'balanced': child_selected == calc_value(pindex, cindex) && theme == 'balanced',
                          'energized': child_selected == calc_value(pindex, cindex) && theme == 'energized',
                          'calm': child_selected == calc_value(pindex, cindex) && theme == 'calm',
                          'royal': child_selected == calc_value(pindex, cindex) && theme == 'royal',
                          'dark': child_selected == calc_value(pindex, cindex) && theme == 'dark'
                        }"
                      ></i>
                      <span v-text="option"></span>

                      <hairline-bottom v-if="cindex < parent.options.length - 1"></hairline-bottom>
                  </div>
              </div>


              <HairlineBottom></HairlineBottom>
          </div>
        </transition>

      </div>

    </div>
</template>
<script>
  import channel from './channel'
  import HairlineItem from '../list/HairlineItem'
  import HairlineTop from '../list/HairlineTop'
  import HairlineBottom from '../list/HairlineBottom'

  export default {
    components: {
      Item: HairlineItem,
      HairlineTop,
      HairlineBottom
    },

    props: {
        parents: {
            type: Array,
            required: true
        },
        initval: {
            type: Array,
            default: [0,0]
        },

        theme: {
            type: String,
            default: 'assertive'
        },

        iconAlign: {
            type: String,
            default: 'left'
        }
    },

    data() {
      return {
        radioId: 'von-radio-' + Math.random().toString(36).substring(3, 6),
        parent_selected: -1,
        child_selected: -1,
        selected: this.value,
      }
    },

    computed: {
        selected_model: function () {
            console.log('selected_model', this.initval);
            return this.calc_value(this.initval[0], this.initval[1]);
        },
    },

    mounted() {
        console.log('mounted', this.initval);

        this.parent_selected = this.initval[0];
        this.child_selected = this.initval[1];
    },

    methods: {
        getHeight(pindex, height) {
            return (this.parent_selected == pindex) ? parseInt(height) + 50 + 'px' : '50px'
        },
        calc_value(pindex, cindex) {
            if(pindex<0) pindex=0;
            if(cindex<0) cindex=0;

            let len = 0;
            for(let i=0;i<pindex;i++) {
                len += this.parents[i].options.length;
            }
            return len + cindex;
        },

        _on_child_click(pindex, cindex) {
            console.log('_on_child_click', pindex, cindex);
            this.child_selected = this.calc_value(pindex, cindex);
            this.selected = [pindex, cindex];
            this.$emit('input', this.selected);
        },
        _on_parent_click(pindex) {
            console.log('_on_parent_click', pindex);

            if(this.parent_selected==pindex) {
                this.parent_selected = -1;
            }
            else {
                this.parent_selected = pindex;
            }
      },
    }
  }
</script>
